---
name: personalize
description: Write a version of each campaign email for every lead group in leads/leads.csv. Use when a campaign's emails are final and you want one copy per group.
argument-hint: "[campaign folder]"
context: fork
allowed-tools: Read, Glob, Grep, Write
---

# Personalize

Write one version of each campaign email for each lead group.

Campaign folder: $ARGUMENTS

## 1. Check the campaign folder

- If no campaign folder is given above, stop. Use Glob to find the folders in `campaigns/`, list them and ask for one. Write nothing.
- If the folder doesn't exist or has no `.md` files in its `emails/` folder, stop and say so. Then list the campaign folders that exist. Write nothing.

## 2. Read what you need

- Every `.md` file directly inside `<campaign folder>/emails/`. These are the source emails.
- `leads/leads.csv`, for the group names only. Use each distinct value in the `group` column, in lowercase, as written in the file. Never copy names, email addresses or other lead details into any email.
- `brand/voice.md` and `.claude/rules/emails.md`, which every version must follow.
- The campaign's `plan.md`, if it has one, to learn what each group cares about.

## 3. Write one version per email and group

Keep these exactly the same as the source email:

- The subject and preview lines
- The structure and the order of the sections
- The `{{first_name}}` greeting
- The main link, including its button text
- The sign-off and footer, including their placeholders

Change only these two things:

1. **The opening line:** rewrite the first line after the greeting so it speaks to that group.
2. **One example:** use one example of a task that fits that group.

If the source email has group blocks, such as `{{#schools}}...{{/schools}}`:

- Keep only the block for this group, and remove the other blocks and all the markers.
- Use the example already in this group's block, and change it only if the email doesn't have one.
- Keep this group's app names and prices exactly as written.

If the source email has no block for this group, write the example from what the campaign plan says about the group. Keep the rest of the email unchanged.

Only use facts from the source email and the plan:

- Don't add new claims, app features, prices, results, customer quotes or time savings.
- Don't show one group another group's app or price.
- Leave any "reply to me" answer as it is, rather than making up an answer.

## 4. Save the files

Save each version to `<campaign folder>/groups/<group>/emails/` with the same file name as the source email.

If a file already exists there, don't overwrite it, because it may contain hand edits. Leave it as it is and count it as skipped.

Never send any email. This skill only writes files.

## 5. Reply with a short summary only

Reply with only:

- How many files you wrote, and how many you skipped, if any
- One example opening line per group

Don't include the email text or any other commentary.
