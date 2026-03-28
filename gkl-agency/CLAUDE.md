# CLAUDE.md — GKL Agency

This file provides guidance to Claude Code when working in the GKL Agency project.

## About GKL Agency

GKL Agency is a full-service digital agency run by **Gonzalo**, offering:
1. **Social Media Content** — Platform-optimized content for any industry
2. **Website Creation** — Conversion-focused websites and landing pages
3. **Online Courses** — Complete course builds from outline to sales page

## How to Work on Client Projects

Always follow the WAT framework. Before starting any client job:
1. **Read the client's CLAUDE.md first** — it's in `clients/[client-name]/CLAUDE.md`
2. Check any existing files in `clients/[client-name]/` for context
3. Use workflows in `workflows/` for SOPs
4. Use tools in `tools/` for execution scripts

## Active Clients

| Client | Folder | Phase | Language |
|---|---|---|---|
| 🌿 Yalo Yoga | `clients/yaloyoga/` | Proposal sent | English |
| 🧘 Andas ut Hemma | `clients/andasuthemma/` | Course outline done | **Swedish** |
| 🚗 Merca Skroten | `clients/merca-skroten/` | Proposal sent | **Swedish** |
| 📦 ExhalePLR | `clients/exhaleplr/` | Build phase | English |
| 🏢 GKL Agency | `clients/gkl-agency/` | Own brand | English |

> **Important:** Andasuthemma and Merca Skroten are Swedish-language clients. All content for them must be written in Swedish unless told otherwise.

## Running the Swarm

```bash
cd /Users/gonza/ruflo/ruflo-src
export ANTHROPIC_API_KEY=$(grep ANTHROPIC_API_KEY .env | cut -d'=' -f2)
node bin/cli.js hive-mind init -t hierarchical-mesh
node bin/cli.js hive-mind spawn -n 5
```

## File Structure

```
clients/          # One folder per client — each has CLAUDE.md + brief + audit + proposal
workflows/        # SOPs for each service type
tools/            # Python scripts for automation (scraping, formatting, etc.)
deliverables/
  social-media/   # Completed social media packages per client
  websites/       # Completed website files per client
  courses/        # Completed course content per client
.tmp/             # Temporary working files (disposable)
```

## Marketing Skills (33 Skills Available)

All marketing skills live in `marketing-skills/skills/`. Each skill is a markdown SOP.

| Service | Skills to Use |
|---|---|
| Social Media | `social-content`, `copywriting`, `content-strategy`, `ad-creative`, `marketing-psychology` |
| Websites | `page-cro`, `copywriting`, `seo-audit`, `ai-seo`, `schema-markup`, `site-architecture` |
| Courses | `launch-strategy`, `email-sequence`, `pricing-strategy`, `lead-magnets`, `sales-enablement` |
| All clients | Always start with `product-marketing-context` — source of truth for every job |

## Deliverable Rules
- All final outputs go into `deliverables/[service]/[client-name]/`
- Never save final work to root or `.tmp/`
- Client briefs and context live in `clients/[client-name]/`
