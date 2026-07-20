# Workflow: Social Media Content Creation

> **Model: one agent, four roles.** You (the agent) play all four roles in sequence for a
> single client job — Copywriter → Editor → Designer → Social Manager. No swarm, no code.
> This replaces the older Queen/Researcher hive-mind model for social content.
> (The hive-mind is still fine for large multi-service builds; for social batches, use this.)

## Objective
Create platform-optimized, on-brand, **publish-ready** social content for a client — and hand it
to Blotato (or the client) so the whole calendar can go out on autopilot.

## The four roles

| Role | Emoji | What it does | Output |
|---|---|---|---|
| **Copywriter** | ✍ | Writes and self-grades hooks, captions, CTAs, scripts. Reads screenshots/briefs. | Captions + hashtags per post, each scored |
| **Editor** | 🎬 | Specs edits to existing photos/videos — captions, safe zones for Shorts/Reels/TikTok. | Per-asset edit spec |
| **Designer** | 🎨 | Turns a topic into a carousel or video: slide-by-slide copy + visual direction. | Carousel/video build spec |
| **Social Manager** | 📆 | Schedules and ships to every channel. Owns the publish manifest. | `blotato-manifest.json` + calendar |

## Required Inputs
- Client name, industry, language (**check the client CLAUDE.md — some clients are Swedish-only**)
- Target audience (age, location, interests)
- Platforms (Instagram, TikTok, LinkedIn, Facebook, X)
- Content goals (brand awareness, lead gen, engagement, sales)
- Brand voice + visual identity (colors, typography, tone)
- Number of posts + date range
- Any brand assets, existing content, or screenshots to work from
- **Compliance constraints** — for regulated clients (health, finance), the client's brief and
  any `organiskt-innehall.md` / policy notes are binding. Read them before writing a word.

## Process (run the four roles in order)

**0. Read context first (WAT framework).**
   - Read `clients/[client]/CLAUDE.md`, `brief.md`, and any content/compliance notes.
   - Note the hard rules (banned claims, prices you may not invent, promises you may not make).
   - Check what content already exists so you extend it, don't duplicate it.

**1. ✍ Copywriter.**
   - Write the batch of captions/hooks/CTAs for the chosen platforms.
   - **Self-grade every post** with the rubric below (target 8.5+/10). Rewrite anything under.
   - Respect platform limits and every compliance rule.

**2. 🎬 Editor.**
   - For any post using an existing photo/video, write the edit spec: caption text, placement,
     **safe zones** (keep text clear of the Shorts/Reels/TikTok UI — top ~12%, bottom ~20%),
     line count, and font/color in brand palette.

**3. 🎨 Designer.**
   - For carousel/video posts, produce a slide-by-slide build spec: per-slide headline + body,
     visual direction, and a template reference (e.g. Blotato "instagram carousel slideshow").
   - Reference: help.blotato.com/api/visuals

**4. 📆 Social Manager.**
   - Build the content calendar (date, time, platform, post type) and the **publish manifest**
     (`blotato-manifest.json`) so the Social Manager role — or Blotato directly — can ship it.
   - Sequence and pace posts (typically 3–4/week) so the account looks alive, not spammy.
   - Publishing is handled per `workflows/blotato_setup.md`. Until Blotato is connected, the
     manifest is the handoff artifact — "post this now" works the moment the MCP is live.

## Output Format
Deliver to `deliverables/social-media/[client-name]/`:
- `calendar.md` — the schedule (date · time · platform · post type · status)
- `captions.md` — per post: hook + caption + hashtags + score + which asset/design it uses
- Editor specs + Designer carousel/video specs (inline in captions.md or separate files)
- `blotato-manifest.json` — the Social Manager handoff for auto-publishing

## Self-grading rubric (Copywriter)
Score each post 1–10 on: **Hook** (stops the scroll), **Clarity** (one idea), **Voice** (on-brand),
**CTA** (one clear next step), **Compliance** (breaks zero rules → hard gate, a fail here caps the
whole post at 5). Ship 8.5+. If Compliance fails, rewrite — never ship.

## Edge Cases
- No brand guidelines → ask the client for 3 competitor accounts they admire.
- Regulated industry (health, finance) → compliance is a hard gate, not a style note. When a
  claim, price, or promise isn't explicitly allowed in the brief, leave it out and flag it.
- Platform limits: Instagram 2,200 chars · X 280 · LinkedIn 3,000 · TikTok caption 2,200.
- Don't invent facts (prices, prize amounts, guarantees). If it's not in the brief, it's not real.
