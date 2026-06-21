# AranSee_DataViz

<div align="right"><a href="README.md">中文</a> · <strong>English</strong></div>

<div align="center">
  <img src=".github/assets/googo_ip.svg" width="132" alt="Googo" />
  <br/>
  <sub><a href="https://aranda-a.github.io/AranSee_DataViz/brand/ip-mark.html">Click to interact (Googo)</a></sub>
</div>

**AranSee** is an **AI content diagnosis** product for creators: post + comment field → **X/Y/Z tri-axis scores**, with an interactive **2.5D sandbox** so placement is visible at a glance.  
**Open this repo** in Cursor / Claude Code (in-repo Skill instructions) — **AI reads and scores**; **interactive sandbox and strategy simulation** are in [Try online](#try-online) below (pre-baked demos). Not a long chat report, not an agent plugin.

Helps creators diagnose a **single post + comment field**: structure / commercial / emotional placement and short insights (Skill outputs `analysis.json`); **strategy sliders and ROI hints** are in the pre-baked sandbox demos.

**AI content diagnosis** | **Cursor · Claude Code Skill** | **Not a long chat report** | **Score-driven field · iterate against drafts**

<table align="center">
  <tr>
    <td align="center"><img src="release/github/demos/screenshots/gate_dark.png" alt="Dark theme" width="400" height="222" style="display:block" /></td>
    <td align="center"><img src="release/github/demos/screenshots/gate_light.png" alt="Light theme" width="400" height="222" style="display:block" /></td>
  </tr>
</table>

---

## Try online

| Demo | Link |
|------|------|
| **Series dual anchor (recommended)** | [Explore now](https://aranda-a.github.io/AranSee_DataViz/demos/folk_daoxi_series_01/aransee_sandbox.html) |
| Entry hub | [Compare data series](https://aranda-a.github.io/AranSee_DataViz/demos/) |

---

## How AranSee differs from other AI analytics tools

AranSee addresses a concrete gap: **complex narrative + real comment fields** are hard to align on quickly—raw material is messy and verbal debriefs eat time. It turns your post and pasted comment sample into **comparable tri-axis coordinates** (`analysis.json`); the full product adds visual comparison on top. Not a long chat report—and **not viral prediction or guaranteed growth**.

1. **Skip the essay** — the usual move is Chat spitting out thousands of words of “full analysis”; AranSee gives **X structure / Y commercial / Z emotional** scores plus a few lines you can draft from  
2. **Skip engagement-only reads** — dashboards say hot or not; AranSee reads **what comments are doing**—questions, memes, purchase intent, or pure thanks  
3. **Skip the single total score** — structure, commercial, and emotional land separately, so you know whether to fix the narrative or the conversion—not a vague “content is fine”  
4. **Iterate against drafts** — revise the post and re-score; check whether scores moved toward your goal (Skill → JSON; what the field looks like is in the [Try online](#try-online) demo)

The **public GitHub repo** covers **structured diagnosis** (Skill → JSON). **Field rendering, strategy sliders, and ROI simulation** are in the [Try online](#try-online) pre-baked demos—to show what the full product looks like.

---

## Who it’s for

Small creator teams who **posted but don’t know what to change next**—AranSee helps you align on judgment, not on growth guarantees:

| Where you’re stuck | Typical content | What AranSee clarifies | What the public Skill gives |
|--------------------|-----------------|------------------------|----------------------------|
| Engagement is OK, but title vs commerce hook is unclear | Listicles, live clips | Whether Y commercial or Z emotional is lagging | Tri-axis + `next_step` |
| Comments are all praise—worried structure or info still has gaps | Science outreach, soft seeding | X structure + questions vs pure thanks in comments | Same |
| Long commentary / series—memes and logic fights in the thread | Deep commentary, reviews | X structure + split comment-field types | Same |
| Need to explain the diagnosis to clients or teammates—not just chat logs | Any single post | Tri-axis placement in one aligned view | JSON on file; **visuals** in demo |

**Examples (public demo case types, de-identified):** Folk-horror **deep commentary**—hot memes and logic challenges coexist; the post alone can overstate structural praise. **Holiday market science post**—comments full of “so useful”; Z runs high while Y may stay light—don’t misread it as commerce content.

> v1: **The current release handles one post at a time** (each X/Y/Z group scored 0–100). Public demos include a **dual-anchor series sample** (two posts in one series) for same-field comparison only — **not series batch diagnosis in Skill**. Production capability remains single-post first. Samples are from **public creator works** (de-identified). **The public Skill delivers diagnostic JSON**; series compare, sandbox, and sliders appear in demo form.

---

## Field gallery

<table align="center">
  <tr>
    <td align="center"><img src="release/github/demos/screenshots/field_dark_roi.png" alt="Dark · diagnosis & ROI" width="400" height="222" style="display:block" /></td>
    <td align="center"><img src="release/github/demos/screenshots/field_dark_series_ab.png?v=2" alt="Dark · series dual anchor" width="400" height="222" style="display:block" /></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><sub>Dark · tri-axis field + insight card + sim ROI · series anchors A/B</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="release/github/demos/screenshots/field_light_read_a.png" alt="Light · close read" width="400" height="222" style="display:block" /></td>
    <td align="center"><img src="release/github/demos/screenshots/field_light_series_ab.png" alt="Light · series compare" width="400" height="222" style="display:block" /></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><sub>Light · close read · series compare (closing anchor B)</sub></td>
  </tr>
</table>

---

## Install

### Cursor

Clone this repo and open in Cursor; the agent reads `AGENTS.md` and `SKILL.md`.

### Claude Code

```bash
cd ~/.claude/skills
git clone https://github.com/Aranda-a/AranSee_DataViz.git
```

Other Skill-capable tools: place this folder in the skills directory; keep `prompts/` and `references/`.

---

## Usage

In chat, ask to review a piece of content and paste the post and comment summary. The Skill outputs `analysis.json` (tri-axis scores + short insight + next step).

```
Use AranSee to review this commentary: where do structure, commercial, and emotional land?
【Paste: video summary + representative comments】
```

Data contract: [`docs/DATA_CONTRACT.md`](docs/DATA_CONTRACT.md)

> **Public repo v1 scope:** After installing the Skill, you get a contract-compliant **`analysis.json`** (tri-axis scores + short insight + next step). Screenshots on this page and the **2.5D field, strategy sliders, and ROI simulation** in [Try online](#try-online) come from **pre-baked demo HTML** to show product shape; they **will not** auto-generate an interactive sandbox after you paste content. Rendering your own JSON into a sandbox requires the full dev repo (render pipeline not shipped with the public Skill). See [`release/github/MANIFEST.md`](release/github/MANIFEST.md).

> **Comment sampling note:** Diagnosis is based on a **representative comment sample** you paste (roughly 8–15 items; mix hot comments, author replies, questions, memes or criticism if any)—**not** platform-wide comment statistics. Praise-only samples tend to inflate Z; omitting pushback can inflate X; scores may shift if you change the sample. Public demo cases document sampling in each case’s `SAMPLING.md` (when shipped).

---

## Data & compliance

BYOD; demo cases are de-identified samples without recoverable links or real creator names. See [`docs/DATA_COMPLIANCE.md`](docs/DATA_COMPLIANCE.md).

---

## Docs

| Path | Description |
|------|-------------|
| [`SKILL.md`](SKILL.md) | Skill protocol & tri-axis |
| [`docs/BRAND.md`](docs/BRAND.md) | AranSee + Googo |
| [`docs/PRODUCT_AXES.md`](docs/PRODUCT_AXES.md) | Axis definitions |
| [`release/github/MANIFEST.md`](release/github/MANIFEST.md) | Public repo scope |

---

## License

- **Code & Skill docs**: MIT — [`LICENSE`](LICENSE)
- **Googo visual assets**: © AranSee — see [`NOTICE.md`](NOTICE.md)
