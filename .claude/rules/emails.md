---
paths:
  - "campaigns/**/emails/*.md"
---

# Email file rules

Every email file must follow these rules.

1. **Subject and preview:** The first line must be "Subject: ..." with 50 characters or fewer. The second line must be "Preview: ..." with 90 characters or fewer.
2. **Greeting:** Greet the reader with {{first_name}}.
3. **Main link:** Include exactly one main link, written as [Button text](https://example.com/ai-automation-solutions). The unsubscribe placeholder in the footer does not count as a main link.
4. **Ending:** End with our sign-off from `brand/voice.md`, followed by the two-line footer below. Write the footer as plain text, not inside a code block.

You're getting this because you joined the AI Automation Solutions waitlist.
AI Automation Solutions, {{company_address}} · Unsubscribe: {{unsubscribe_url}}
