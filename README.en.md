# AranSee_DataViz

<div align="right"><a href="README.md">中文</a> · <strong>English</strong></div>

<div align="center">
  <img src=".github/assets/googo_ip.svg" width="132" alt="Googo" />
  <br/>
  <sub><a href="https://aranda-a.github.io/AranSee_DataViz/brand/ip-mark.html">Click to interact (Googo)</a></sub>
</div>

**AranSee** is an **AI content diagnosis** product for creators: post + comment field → **X/Y/Z tri-axis scores**, with an interactive **2.5D sandbox** so placement is visible at a glance.  
Install as a Cursor Skill — **AI reads and scores**, **the sandbox presents and simulates**; not a long chat report, not an agent plugin.

Helps creators diagnose a **single post + comment field**: structure / commercial / emotional placement, short insights, strategy simulation, and ROI hints.

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

AranSee turns model output into **protocol scores** that drive **deterministic visualization** — not paragraphs left in the chat.

1. **Visible** — placement in tri-axis space: structure belt, sediment field, resonance flow; not an abstract total in prose  
2. **Comment field as layer two** — for commentary and commerce content, comment types often explain the field more cheaply than the post alone  
3. **Short and actionable** — insight + next step + one-line ROI, not a PDF-style report  
4. **Draft iteration** — re-run the same diagnosis in the sandbox to simulate “if this axis moves, where does the field shift?”

---

## Who it’s for

| Content format | What you see clearly |
|----------------|----------------------|
| Deep commentary / film review | Structure stability; comments as follow-ups vs memes |
| Live clips / emotional | Resonance vs reach; weak commercial layer |
| Listicles / hooks | Structure belt clarity; which axis drives saves |
| Closing commerce / pinned conversion | Commercial sediment vs emotional presence |

> v1: **The current release handles one post at a time** (each X/Y/Z group scored 0–100). Public demos include a **dual-anchor series sample** (two posts in one series) for same-field comparison only — **not series batch diagnosis in Skill**. Production capability remains single-post first. Samples are from **public creator works** (de-identified).

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
