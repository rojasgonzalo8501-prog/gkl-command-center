# Workflow: Blotato Setup & Auto-Publishing

> The Social Manager role (📆 in `social_media_content.md`) uses this to ship a finished batch
> to every channel. Written MCP-agnostic: the content workflow produces a **publish manifest**
> today; the moment Blotato is connected, "post this now" ships it. Nothing here blocks
> producing content — publishing is the last mile.

## What Blotato is
A unified API/MCP for the whole content engine: publish to every social channel, generate videos
& visuals, scrape viral content (YouTube/TikTok transcripts), track analytics, automate
comments and DMs. Full toolkit reference: help.blotato.com/api/llm · visuals: help.blotato.com/api/visuals

## One-time setup (client- or agency-level)

### 1. Import the marketing plugin (optional, for the skills)
- **Claude.ai / Cowork:** Customize › Plugins › Add Marketplace › Add from a Repository →
  paste `github.com/Blotato-Inc/blotato-skills`
- **Claude Code:**
  1. `/plugin marketplace add Blotato-Inc/blotato-skills`
  2. `/plugin install blotato@blotato-skills`
  3. Restart Claude Code
  4. `/blotato` to see the skills (post-grader, carousel, etc.)

### 2. Blotato account + connected socials
1. Sign up at blotato.com
2. Connect the client's social accounts: my.blotato.com/settings
3. Generate an API key: my.blotato.com/settings/api

### 3. Add the Blotato MCP connector
- **Claude.ai / Cowork:** Customize › Connectors › Add Connector
  - Name: `Blotato`
  - URL: `https://mcp.blotato.com/mcp`
- Restart the Claude session after adding.

### 4. Verify the connection
Ask the agent: **"what social accounts are connected?"**
If nothing shows up, restart the session. Once accounts list, publishing is live.

## The publish manifest (the handoff artifact)
Every content batch ships a `blotato-manifest.json` alongside the captions. It's the contract
between the Copywriter/Designer output and the Social Manager's publish step. Shape:

```json
{
  "client": "vivanord",
  "timezone": "Europe/Stockholm",
  "status": "draft",            // draft | approved | published
  "posts": [
    {
      "id": "vn-01",
      "platforms": ["facebook", "instagram"],
      "type": "single_image",   // single_image | carousel | video | text
      "scheduled_for": "2026-07-22T09:00:00+02:00",
      "caption_ref": "captions.md#vn-01",
      "asset": "designer-spec: slide set A (typografi, djupgrön)",
      "notes": "compliance: no health claims; price not mentioned"
    }
  ]
}
```

## Publishing a batch (Social Manager)
1. Confirm the manifest `status` is `approved` (client/Gonzalo signed off).
2. Confirm accounts are connected (step 4 above).
3. For each post, in schedule order, hand Blotato the caption + asset + platforms + time.
   - Immediate: **"post this now"**
   - Scheduled: **"schedule these per the manifest"**
4. Flip each post's manifest entry to `published` and update `calendar.md` status.

## Guardrails
- **Never publish without an approved manifest.** Compliance-gated clients (e.g. Vivanord) must
  clear the hard rules in their brief before anything ships.
- Publishing sends content to external platforms — it is public and effectively permanent.
  Treat "post this now" as irreversible: confirm client approval first.
- If accounts don't list after a restart, stop and fix the connection — don't guess account IDs.
- Keep API keys out of the repo. They live in the connector config / client account, never in git.
