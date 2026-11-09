# Skills I chose

Checked on 9 November 2026. Star and install counts change over time. Nothing has been installed yet.

## Use these

**For writing campaigns: `anthropics/knowledge-work-plugins` (the marketing skills)**
- Use `campaign-plan` for campaign briefs and `email-sequence` for full email series.
- It is published by Anthropic's official GitHub organization and has about 35,200 stars.
- Both skills passed all three security audits listed on skills.sh (Gen Agent Trust Hub, Socket and Snyk).
- These skills did not appear in my four searches. I found them by checking Anthropic's repository directly. They have only about 3,000 installs each, so popularity alone would have hidden them.

**For sending email: `resend/resend-skills` (the `resend` skill)**
- It is published by Resend, the company that runs the email service, so it should follow how the service really works.
- It has about 211 stars, which is low, but the repository is new and belongs to the official Resend organization. Resend's `react-email` repository has about 19,900 stars.
- Gen Agent Trust Hub and Socket passed it. Snyk gave a medium warning: emails received from outsiders could contain hidden instructions for the AI. That risk comes from the receiving features, so use this skill for sending only unless you have a plan for handling inbound mail.

## Avoid these

**`mbfinotti/advertising-skills` (for example `ad-budget-pacing`)**
- It shows about 26,700 installs for one skill but only 2 stars, and the repository is about two months old with one contributor.
- That gap makes me doubt the install count. I found no proof of anything harmful, and the skill passed its security audits, but I would not rely on it.
- It covers paid ads, not email, so there is no reason to take the risk.

**`lark-mail` from `open.feishu.cn`**
- It is the top result for "email marketing" with about 870,000 installs, but it manages a Lark/Feishu mailbox and does not write marketing emails.
- It comes from Feishu's website instead of a GitHub repository listed on skills.sh, so there are no stars or repository history to check, and its skills.sh page showed no audit results.
- It appears to be genuinely from Feishu, so this is not a claim that it is fake. I would not trust it here because it is the wrong tool and harder to check, and it would have access to a real mailbox.

## How I decided

Check these three things before installing any skill:

1. **Who publishes it?** Look for the official organization of the company behind the product, and open the source link to confirm it really goes there.
2. **Do the numbers make sense together?** Compare installs, stars, repository age and recent activity. A high install count with almost no stars is a warning sign, and neither number proves a skill is safe.
3. **What can it do, and what did the audits say?** Read the skill's `SKILL.md` and its security audit results on skills.sh, including the detail behind any warning. Pay close attention to anything that touches API keys, sends email or reads messages from outsiders.
