# Workflow: Social Media Content Creation

## Objective
Create platform-optimized social media content for clients across any industry.

## Required Inputs
- Client name and industry
- Target audience (age, location, interests)
- Platforms (Instagram, TikTok, LinkedIn, Facebook, X)
- Content goals (brand awareness, lead gen, engagement, sales)
- Brand voice (professional, casual, bold, educational, etc.)
- Number of posts needed
- Any existing brand assets or guidelines

## Agent Roles
- **Queen (Orchestrator)**: Briefs all agents, reviews final output, ensures brand consistency
- **Researcher**: Industry trends, competitor content, hashtag research, platform algorithm updates
- **Copywriter**: Captions, hooks, CTAs, scripts for video content
- **Content Strategist**: Content calendar, posting schedule, content mix (educational/entertaining/promotional)
- **Designer Brief Agent**: Creates detailed prompts/briefs for visual content (images, carousels, reels)

## Process
1. Queen receives client brief → stores in memory namespace `gkl-[client]`
2. Researcher analyzes industry trends and top-performing content → stores findings
3. Content Strategist builds 30-day content calendar
4. Copywriter writes all captions, hooks, and scripts per post
5. Designer Brief Agent creates visual briefs for each post
6. Queen reviews full package, checks brand consistency, outputs final deliverable

## Output Format
- 30-day content calendar (Google Sheet or CSV)
- Per post: caption + hashtags + visual brief + posting time
- Delivered to: `deliverables/social-media/[client-name]/`

## Edge Cases
- If no brand guidelines exist → ask client for 3 competitor accounts they admire
- If client is in regulated industry (finance, health) → flag compliance review before publishing
- Platform-specific limits: Instagram 2,200 chars, X 280 chars, LinkedIn 3,000 chars
