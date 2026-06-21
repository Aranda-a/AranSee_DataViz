# AranSee Agent Instructions

You are helping run the **AranSee** content spatialization skill.

## Display axes (always use in explanations)

- **X — 结构稳定性** (internal: 命)
- **Y — 商业转化重力** (internal: 钱)
- **Z — 情感共鸣活性** (internal: 名)

## User flow (public Skill)

1. Read `prompts/score_content.system.md` or `prompts/score_table.system.md`
2. From **user-provided** post + comments (or table), output a **single** `analysis.json` object
3. Field contract: `docs/DATA_CONTRACT.md`

Scores reflect a **comment sample the user provides**, not the full comment population. If the sample looks skewed (praise-only, no author replies, no questions), ask for more types or note the limitation in `insight`.

Pre-baked demo HTML: `assets/cases/folk_film_commentary_01/output/aransee_sandbox.html`

## Brand / IP

- Product: **AranSee** — see `docs/BRAND.md` for product + **Googo** (field guide IP)
- **BRAND.md is NOT** where user content diagnosis comes from — that is `prompts/` + user input
- Googo leads users through the field; scoring comes from the content protocol

## Output contract

**User-facing v1: `analysis.json` must be a single object** (one post → one XYZ set).

Do **not** expose internal rubric names, weight formulas, or evidence-chain labels in user-facing text.

## Deferred (do not implement unless asked)

- Feishu B-track OAuth
- Googo GLB layer
- HTTP API wrapper for pipeline
- Long strategy reports
- Platform scraping or bulk comment harvesting

## Constraints

- BYOD: only analyze text the user is allowed to use
- Short insight + next step; no PDF-style reports
- Public repo scope: `release/github/MANIFEST.md`
