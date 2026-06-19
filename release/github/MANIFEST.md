# GitHub 公开仓交付清单

> 开发在完整本地仓 `AranSee-v3` 进行；推送到 **公开 remote** 时只同步本清单「包含」项。  
> 策略：**开源 Skill + 协议 + 展示 demo**；**闭源评分内核与渲染器实现**。

---

## 包含（公开）

| 路径 | 说明 |
|------|------|
| `README.md` | 对外产品说明（根目录） |
| `LICENSE` | MIT |
| `SKILL.md` | Skill 主文件 |
| `AGENTS.md` | Cursor 入口 |
| `prompts/` | 行为约束版 prompt（无权重、无内部原则名） |
| `references/` | 输入示例、映射说明（非内核权重） |
| `docs/DATA_CONTRACT.md` | JSON 字段契约 |
| `docs/PRODUCT_AXES.md` | 三轴产品语义 |
| `docs/PRODUCT_BOUNDARIES.md` | 产品边界 |
| `docs/DATA_COMPLIANCE.md` | 数据、版权与展示声明 |
| `NOTICE.md` | 品牌、分许可、协议版本 |
| `docs/demos/` | **GitHub Pages** 预烘焙沙盘（主 demo：系列双锚） |
| `docs/index.html` | Pages 根跳转 → `demos/` |
| `package.json` | npm Skill 子集（无渲染管道） |
| `.gitignore` | 含 internal 排除规则 |

### npm `files` 建议（Skill 包）

```
SKILL.md
AGENTS.md
bin/
prompts/
references/
docs/DATA_CONTRACT.md
docs/PRODUCT_AXES.md
docs/BRAND.md
docs/PRODUCT_BOUNDARIES.md
```

---

## 不包含（保留本地 / 私有仓）

| 路径 | 原因 |
|------|------|
| `docs/internal/` | 评分基因、rubric、量表、宣发稿、真名档 |
| `scripts/internal/` | `gene_kernel.py` 等加权实现 |
| `scripts/sandbox_renderer.py` | 2.5D 场域映射、Googo 动效、UI 排布（核心差异化） |
| `scripts/sandbox_bridge.py` | 可选闭源；公开仓用预烘焙 HTML 即可 |
| `scripts/pipeline.py` 等完整管道 | 非 Skill 必要路径 |
| `scripts/sim_roi_presets.py` | 含 LLM 调用逻辑 |
| `scripts/content_parser.py` | 规则引擎加权细节 |
| `scripts/axis_model.py` | 阈值与视觉状态映射 |
| 未脱敏案例、`raw/` 含可识别信息 | 隐私与版权 |
| `.env`、`.cache/`、`*_llm_raw.json` | 密钥与原始模型输出 |
| `CURSOR_MIGRATION_GUIDE.md` | 含内部目录说明，可私有保留 |

---

## 同步方式

### 方式 A：独立公开仓库（推荐）

1. 新建 GitHub 空仓 `aransee`（public）。  
2. 在本仓执行：

```bash
python scripts/sync_github_release.py
cd release/github/staging
git init
git remote add origin git@github.com:YOUR_USER/aransee.git
git add .
git commit -m "Initial public skill release"
git push -u origin main
```

3. 开发仓继续私有或本地 only；公开仓仅含 staging 内容。

### 方式 B：单仓 + `.gitignore`

已在根 `.gitignore` 排除 `docs/internal/`、`scripts/internal/`。  
若仍把渲染器留在同一 remote，等于**半开源**；与「仅 Skill」策略不符，不推荐。

---

## 展示资源

| 资源 | 来源 |
|------|------|
| 单点 HTML | `assets/cases/folk_film_commentary_01/output/aransee_sandbox.html` |
| 系列 HTML（可选） | `assets/cases/folk_daoxi_series_01/output/aransee_sandbox.html` |
| 截图 | 手动截取 → `release/github/demos/screenshots/` |

公开仓用户路径：**装 Skill → 对自己的帖出 JSON → 打开 demo HTML 理解体验形态**。

---

## 推送前检查

```bash
# 确认 internal 未被跟踪
git status --ignored | findstr internal

# 扫描真名 / BV（应无命中于将提交文件）
rg -i "BV1|bilibili\\.com|刘巳道" --glob "!docs/internal/**"
```

- [ ] 无 `.env` 进暂存区  
- [ ] 无 API Key 字符串  
- [ ] `folk_*` 的 `raw/` 已脱敏  
- [ ] `package.json` 的 `files` 未包含 `sandbox_renderer.py`
