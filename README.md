# pokemon-3d-models

从 `holo-pack-h5` 项目整理的宝可梦 3D 资源，包含 **243 个去重后的本地 GLB** 和 **31 个程序化模型的 JavaScript 源码**。GLB 共 132,034,068 字节（约 125.9 MiB），保留原始文件内容、内置贴图、骨骼、动画与作者信息。

| 位置 | 内容 |
| --- | --- |
| [`assets/garden/models/`](assets/garden/models/) | 花园当前使用的 37 个 GLB |
| [`models/supplemental/`](models/supplemental/) | 项目翼部动作审计中保留的 206 个额外 GLB，含普通、Mega、地区与超极巨化形态 |
| [`garden-models.js`](garden-models.js) | 20 个物种的简化程序化模型 |
| [`garden-mega-models.js`](garden-mega-models.js) | 11 个 Mega 形态的简化程序化模型；另保留 Mega 乌贼王 GLB 的来源映射 |
| [`garden-motion.js`](garden-motion.js)、[`garden-pose.js`](garden-pose.js)、[`garden-wings.js`](garden-wings.js)、[`garden-soft-motion.js`](garden-soft-motion.js) | 模型姿态、骨骼、翼部和柔性部件动作辅助代码 |
| [`vendor/`](vendor/) | 上述资源需要的 Three.js、加载器、工具及 Draco 解码器 |
| [`assets/garden/species.json`](assets/garden/species.json) | 原项目物种、形态与上游资源目录 |
| [`models-manifest.json`](models-manifest.json) | 每个已上传 GLB 的路径、大小、SHA-256、来源和内嵌元数据 |
| [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md) | 从模型中提取的作者、来源与许可声明 |
| [`SHA256SUMS`](SHA256SUMS) | 243 个 GLB 文件的完整性校验清单 |

发布目录中的重复 GLB 已去重。`species.json` 中还包含未下载资源的远程 URL；**这些目录条目不代表对应模型已收入本仓库**。本地 GLB 的准确范围以 `models-manifest.json` 为准。

## 使用 GLB

通过 HTTP 服务提供仓库文件，并使用支持 glTF 2.0 的加载器。所有 GLB 使用 `KHR_draco_mesh_compression`；其中 238 个还需要 `EXT_texture_webp` 支持。模型没有外部贴图或 buffer 文件依赖，Draco 解码器仍需单独加载。

以下代码可放在以仓库根目录为基准的 ES module 页面中：

```js
import { GLTFLoader } from './vendor/three-addons/loaders/GLTFLoader.js';
import { DRACOLoader } from './vendor/three-addons/loaders/DRACOLoader.js';

const draco = new DRACOLoader();
draco.setDecoderPath('./vendor/three-addons/libs/draco/');
const loader = new GLTFLoader().setDRACOLoader(draco);
const gltf = await loader.loadAsync('./assets/garden/models/25.glb');
// 将 gltf.scene 加入你的场景；动画位于 gltf.animations。
```

不同模型保留了各自的坐标系、比例与动画命名。原项目通过 `prepareRig()` 对普通皮卡丘执行 X 轴 `-Math.PI / 2` 修正，并在运行时处理其他模型的姿态和附加动作；这些运行时效果没有烘焙进 GLB。

## 使用程序化模型

```js
import { createStylizedModel } from './garden-models.js';
import { createMegaModel } from './garden-mega-models.js';

const stylized = createStylizedModel(940);
const mega = createMegaModel({ id: 149, form: 'mega' });
// 两个返回值均包含 scene 和 animations。
```

这 31 个模型以源码形式保留，尚未导出为 GLB。它们是原项目的简化几何作品，模型样式与上游 GLB 不同。

## 来源与许可

上游 GLB 集合来自 [Pokemon-3D-api/assets](https://github.com/Pokemon-3D-api/assets)，固定版本为 `429de1288cea0d43f5b4f56305d2276e94239d65`。上传时未修改 GLB 内容。

仓库级 [MIT License](LICENSE) 不替代单个模型中保留的作者许可。126 个 GLB 明确内嵌了以下声明：

| 内嵌许可 | 数量 | 主要条件 |
| --- | ---: | --- |
| [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | 123 | 署名、链接许可并说明修改 |
| [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) | 2 | 上述署名条件，加上非商业使用限制 |
| [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) | 1 | 上述署名和非商业使用条件；发布改编作品时采用相同许可 |

非商业许可对应 [`41-regular.glb`](models/supplemental/41-regular.glb)（超音蝠）、[`81-regular.glb`](models/supplemental/81-regular.glb)（小磁怪）和 [`789-regular.glb`](models/supplemental/789-regular.glb)（科斯莫古，其中该文件为 NC-SA）。其余文件没有这些内嵌声明，不代表可以推断为统一 MIT。请按 [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md)、[`models-manifest.json`](models-manifest.json) 和 [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) 中的文件级记录保留署名及适用条件。

宝可梦角色、名称、设计和相关商标的权利属于 Nintendo、Creatures、GAME FREAK、The Pokémon Company 及相应权利人。本仓库是非官方资源整理，与这些权利人没有隶属、赞助或认可关系。
