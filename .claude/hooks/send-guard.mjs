// PreToolUse hook: stops Claude sending email to the wrong people through Resend.
// Exit 0 allows the tool call. Exit 2 blocks it, and the reason goes to standard error.
// If the guard can't tell that a call is safe, it blocks it.

const CHECKED_TOOLS = new Set(['send-email', 'send-batch-emails']);
const BLOCKED_TOOLS = new Set([
  'send-broadcast',
  'create-automation',
  'send-inbox-draft',
  'send-new-inbox-email',
]);
const RECIPIENT_FIELDS = ['to', 'cc', 'bcc'];
const TEST_ADDRESS = /^[^@\s,;<>]+@resend\.dev$/;

function block(reason) {
  process.stderr.write(`${reason}\n`);
  process.exit(2);
}

function normalize(address) {
  return String(address).trim().toLowerCase();
}

function isAllowed(address, myEmail) {
  if (typeof address !== 'string') return false;
  const clean = normalize(address);
  return TEST_ADDRESS.test(clean) || (myEmail !== '' && clean === myEmail);
}

function recipientsOf(email) {
  return RECIPIENT_FIELDS.flatMap((field) => email?.[field] ?? []);
}

let raw = '';
for await (const chunk of process.stdin) raw += chunk;

let call;
try {
  call = JSON.parse(raw);
} catch {
  block('Blocked: the send guard could not read this tool call.');
}

const toolName = String(call?.tool_name ?? '').split('__').pop();
const toolInput = call?.tool_input ?? {};

if (BLOCKED_TOOLS.has(toolName)) {
  block(`Blocked: ${toolName} can reach whole lists of people.`);
}

if (!CHECKED_TOOLS.has(toolName)) {
  process.exit(0);
}

const emails = toolName === 'send-batch-emails' ? toolInput.emails : [toolInput];
if (!Array.isArray(emails) || emails.length === 0) {
  block(`Blocked: ${toolName} has no emails the send guard can check.`);
}

const myEmail = normalize(process.env.MY_EMAIL ?? '');

for (const email of emails) {
  const recipients = recipientsOf(email);
  if (recipients.length === 0) {
    block(`Blocked: ${toolName} has an email with no recipients the send guard can check.`);
  }
  for (const address of recipients) {
    if (!isAllowed(address, myEmail)) {
      block(
        `Blocked: ${JSON.stringify(address)} is not allowed. Send only to @resend.dev test addresses or to MY_EMAIL.`,
      );
    }
  }
}

process.exit(0);
