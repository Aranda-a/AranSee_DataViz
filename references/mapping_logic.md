# 数据映射逻辑（X 结构 / Y 商业 / Z 情感）

## 角色 → 轴

| 绑定角色 | 映射到 | 展示轴 |
|----------|--------|--------|
| `vitality` | X | 结构稳定性 |
| `commercial` | Y | 商业转化重力 |
| `z` 列名匹配 `y轴`/`y得分` | Y | 商业 |
| `resonance` | Z | 情感共鸣活性 |
| `z` 列名匹配 `z轴`/`z得分` | Z | 情感 |

手动指定：`data_mapper.py --axis-x ... --axis-y ... --axis-z ...`  
其中 `--axis-y` = 商业列，`--axis-z` = 情感列。

## 信号层融合

无直接三轴列时，`fuse_signal_layer()` 推断，并写 `fusion_notes`。

详见 `docs/PRODUCT_AXES.md`。
