# CLAUDE.md — GKL Agency

This file provides guidance to Claude Code when working in the GKL Agency project.

## About GKL Agency

GKL Agency is a full-service digital agency offering:
1. **Social Media Content** — Platform-optimized content for any industry
2. **Website Creation** — Conversion-focused websites and landing pages
3. **Online Courses** — Complete course builds from outline to sales page

## How to Work

Always follow the WAT framework. Before starting any client job:
1. Read the relevant workflow in `workflows/`
2. Check `clients/` for existing client context
3. Use the ruflo swarm tools at `/Users/gonza/ruflo/ruflo-src/`

## Running the Swarm

```bash
cd /Users/gonza/ruflo/ruflo-src
export ANTHROPIC_API_KEY=$(grep ANTHROPIC_API_KEY .env | cut -d'=' -f2)
node bin/cli.js hive-mind init -t hierarchical-mesh
node bin/cli.js hive-mind spawn -n 5
```

## File Structure

```
clients/          # One folder per client with brief and project notes
workflows/        # SOPs for each service type
tools/            # Python scripts for automation (scraping, formatting, etc.)
deliverables/
  social-media/   # Completed social media packages per client
  websites/       # Completed website files per client
  courses/        # Completed course content per client
.tmp/             # Temporary working files
```

## Marketing Skills (33 Skills Available)

All marketing skills live in `marketing-skills/skills/`. Each skill is a markdown SOP the agents use automatically. Key skills for GKL Agency work:

| Service | Skills to Use |
|---------|--------------|
| Social Media | `social-content`, `copywriting`, `content-strategy`, `ad-creative`, `marketing-psychology` |
| Websites | `page-cro`, `copywriting`, `seo-audit`, `ai-seo`, `schema-markup`, `site-architecture` |
| Courses | `launch-strategy`, `email-sequence`, `pricing-strategy`, `lead-magnets`, `sales-enablement` |
| All clients | Always start with `product-marketing-context` — it's the source of truth for every job |

**How agents use skills:** Read the relevant `marketing-skills/skills/[skill-name]/SKILL.md` before executing that type of work.

## Deliverable Rules
- All final outputs go into `deliverables/[service]/[client-name]/`
- Never save final work to root or `.tmp/`
- Client briefs live in `clients/[client-name]/brief.md`
