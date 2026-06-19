# AranSee_DataViz

<p align="center">
  <a href="https://aranda-a.github.io/AranSee_DataViz/brand/ip-mark.html" title="Googo · 交互 IP">
    <img src="docs/brand/googo_ip.svg" width="132" alt="Googo" />
  </a>
</p>

**AranSee** 是面向创作者的 **AI 内容诊断产品**：把你的帖文与评论场翻译成 **X/Y/Z 三轴判断**，再用可交互 **2.5D 沙盘**把落位看得见。  
在 Cursor 里以 Skill 安装使用——**AI 负责读懂与打分，沙盘负责呈现与模拟**；不是 Chat 长报告，也不是纯 Agent 插件。

帮创作者针对**单条帖文 + 评论场**，完成结构 / 商业 / 情感落位、短洞察、策略模拟与 ROI 提示。

**AI 内容诊断** | **兼容 Cursor · Claude Code Skill** | **不是 Chat 长报告** | **分数驱动场域 · 可反复对照改稿**

<table align="center">
  <tr>
    <td align="center"><img src="release/github/demos/screenshots/gate_dark.png" alt="暗色主题" width="400" height="222" style="display:block" /></td>
    <td align="center"><img src="release/github/demos/screenshots/gate_light.png" alt="亮色主题" width="400" height="222" style="display:block" /></td>
  </tr>
</table>

---

## 在线试玩

| 展示 | 链接 |
|------|------|
| **系列双锚（推荐）** | [`docs/demos/folk_daoxi_series_01/aransee_sandbox.html`](docs/demos/folk_daoxi_series_01/aransee_sandbox.html) |
| 入口导航 | [`docs/demos/`](docs/demos/) |

GitHub Pages：`https://aranda-a.github.io/AranSee_DataViz/demos/`（Settings → Pages → `/docs`）

---

## 安装

### Cursor

克隆本仓库并在 Cursor 中打开；Agent 会读取 `AGENTS.md` 与 `SKILL.md`。

### Claude Code

```bash
cd ~/.claude/skills
git clone https://github.com/Aranda-a/AranSee_DataViz.git
```

其他支持 Skill 的工具：将本文件夹放到对应 skills 目录，保留 `prompts/` 与 `references/`。

---

## 使用

在对话中说明要复盘一条内容，粘贴帖文与评论摘要。Skill 按协议输出 `analysis.json`（三轴分数 + 短洞察 + 下一步）。

```
帮我用 AranSee 复盘这条解说：结构、商业、情感各落在哪？
【粘贴：视频摘要 + 代表性评论】
```

字段契约：[`docs/DATA_CONTRACT.md`](docs/DATA_CONTRACT.md)

---

## 数据与合规

自备数据（BYOD）；展示案例为脱敏样本，不含可复原链接与创作者真名。详见 [`docs/DATA_COMPLIANCE.md`](docs/DATA_COMPLIANCE.md)。

---

## 文档

| 路径 | 说明 |
|------|------|
| [`SKILL.md`](SKILL.md) | Skill 协议与三轴说明 |
| [`docs/BRAND.md`](docs/BRAND.md) | AranSee + Googo |
| [`docs/PRODUCT_AXES.md`](docs/PRODUCT_AXES.md) | 三轴定义 |
| [`release/github/MANIFEST.md`](release/github/MANIFEST.md) | 公开仓范围 |

---

## License

- **代码与 Skill 文档**：MIT — [`LICENSE`](LICENSE)
- **Googo 视觉资产**：© AranSee — 见 [`NOTICE.md`](NOTICE.md)
