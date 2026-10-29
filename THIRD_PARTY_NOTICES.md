# 第三方资源说明

本文件区分仓库代码许可、资源集合许可与单个模型保留的原作者许可。根目录的 MIT 许可不覆盖或替换第三方资源原有的条件。

## 宝可梦 GLB

- 集合来源：[Pokemon-3D-api/assets](https://github.com/Pokemon-3D-api/assets)。
- 固定版本：`429de1288cea0d43f5b4f56305d2276e94239d65`。
- 集合的 MIT 许可副本：[`third_party/Pokemon-3D-api-assets-LICENSE.txt`](third_party/Pokemon-3D-api-assets-LICENSE.txt)，版权声明为 Copyright (c) 2024 Sudhanshu Ambastha。
- 本地资源：`assets/garden/models/` 中 37 个文件，以及从原项目 `_qa/wing-models/` 整理至 `models/supplemental/` 的 206 个文件。上传时 GLB 字节未修改。
- 文件级来源、SHA-256 与内嵌作者信息：[`models-manifest.json`](models-manifest.json)。
- 可阅读的作者与许可索引：[`ATTRIBUTIONS.md`](ATTRIBUTIONS.md)。

126 个 GLB 的 `asset.extras` 包含独立作者、Sketchfab 原始作品链接和明确的许可信息：123 个为 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)，2 个为 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)，1 个为 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。这三类许可都要求适当署名、提供许可链接并说明修改；NC 限制商业使用；NC-SA 还要求发布改编作品时采用相同许可。完整条款以链接的许可文本及各文件原有声明为准。

带 NC 或 NC-SA 声明的文件如下，上传时均未修改：

| 文件 | 作者 | 内嵌许可 | 原始作品 |
| --- | --- | --- | --- |
| [`models/supplemental/41-regular.glb`](models/supplemental/41-regular.glb)，超音蝠 | [lucasprs51450](https://sketchfab.com/lucasprs51450) | CC BY-NC 4.0 | [zubat](https://sketchfab.com/3d-models/zubat-35532414945142e0bf1c84f8b8d87aaf) |
| [`models/supplemental/81-regular.glb`](models/supplemental/81-regular.glb)，小磁怪 | [MortyJHin](https://sketchfab.com/MortyJHin) | CC BY-NC 4.0 | [Pokémon Magnemite](https://sketchfab.com/3d-models/pokemon-magnemite-100a13915fd243d0bf35b0c64468984b) |
| [`models/supplemental/789-regular.glb`](models/supplemental/789-regular.glb)，科斯莫古 | [AlmondFeather](https://sketchfab.com/almondfeather) | CC BY-NC-SA 4.0 | [Cosmog](https://sketchfab.com/3d-models/cosmog-d928b7339a9b4ecb841162c53b4c4f4a) |

这些声明仍适用于对应文件；另外 117 个没有这些内嵌许可声明的模型，不应因仓库使用 MIT 而被推断为具有同样的授权范围。

例如，`assets/garden/models/687-mega.glb` 内嵌声明列出作者 [Mariokart07](https://sketchfab.com/Mariokart07)、[原始 Mega Malamar 作品](https://sketchfab.com/3d-models/mega-malamar-za-c443be586a51452597b147ad99a88853)，以及 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。原项目对该模型的比例、材质和动作调整发生在运行时，GLB 保持原样。

## 程序化模型与动作代码

`garden-models.js` 包含 20 个物种的简化模型；`garden-mega-models.js` 包含 11 个 Mega 形态的简化模型，并记录单独提供的 Mega 乌贼王 GLB。几何由原 `holo-pack-h5` 项目的 JavaScript 生成，属于该项目的原型作品，不是官方游戏模型提取物。随附的动作与姿态辅助模块保留原实现。

原项目记载的造型参考包括 [PokeAPI 官方插画索引](https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/other/official-artwork) 和 [Mega Dragonite 介绍](https://legends.pokemon.com/en-ca/story-world/pokemon/mega-dragonite)。这些参考作品未随本次模型整理额外上传。

## 物种目录

`assets/garden/species.json` 保留原项目物种、形态、名称、体型、属性和模型 URL 数据。其名称与物理资料来源于 [PokeAPI 的 CSV 数据集](https://github.com/PokeAPI/pokeapi/tree/master/data/v2/csv)，包括 `pokemon_species_names.csv`、`pokemon.csv`、`pokemon_types.csv` 和 `pokemon_abilities.csv`。目录包含远程资源索引，不能作为本地模型数量的清单。

## 模型预览截图

[`docs/previews/`](docs/previews/) 中的截图由对应源模型渲染，文件映射见 [`docs/preview-catalog.json`](docs/preview-catalog.json)。预览截图沿用相应模型的作者署名和许可条件，包括适用的 NC 非商业及 SA 相同方式共享要求；根目录的 MIT 许可不替换这些条件。模型作者与原始来源仍以 [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md) 和 [`models-manifest.json`](models-manifest.json) 的文件级记录为准。

## 随附软件

| 组件 | 文件 | 许可 |
| --- | --- | --- |
| Three.js r185、GLTFLoader、DRACOLoader 及相关工具 | `vendor/three*.js`、`vendor/three-addons/` 中的 Three.js 代码 | MIT；见 [`vendor/THREE-LICENSE.txt`](vendor/THREE-LICENSE.txt)，Copyright © 2010-2026 three.js authors；[上游](https://github.com/mrdoob/three.js/tree/r185) |
| Draco 解码器 | `vendor/three-addons/libs/draco/` | Apache-2.0；见 [`vendor/DRACO-LICENSE.txt`](vendor/DRACO-LICENSE.txt)；[上游](https://github.com/google/draco) |

## 角色与商标

上游资源集合的 MIT 软件许可和模型中的 CC-BY 等声明不转移宝可梦角色、名称、设计、插画或商标的所有权，也不授予这些知识产权的额外权利。相关权利属于 Nintendo、Creatures、GAME FREAK、The Pokémon Company 及相应权利人。保留模型作者声明不代表获得角色知识产权授权。

本仓库为非官方整理，没有获得上述权利人的认可、赞助或授权背书。
