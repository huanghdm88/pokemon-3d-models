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

## 宝可梦模型预览

截图来自仓库中的实际模型，采用统一视角渲染；程序化资源标为“简化模型”。点击宝可梦名称可打开对应 GLB 或模型生成源码，Mega、地区和超极巨化形态分别列出。瓦斯弹的 `galar` 同人标记和胡帕的上游 `mega` 标记保留在名称及文件路径中，便于与原始资源对照。

### GLB 模型（243 项）

| 图鉴编号 | 宝可梦名称 | 模型截图 |
| ---: | --- | --- |
| #0001 | [妙蛙种子](assets/garden/models/1.glb)<br><sub>Bulbasaur</sub> | <img src="docs/previews/1-regular.jpg" width="160" alt="妙蛙种子模型截图"> |
| #0004 | [小火龙](assets/garden/models/4.glb)<br><sub>Charmander</sub> | <img src="docs/previews/4-regular.jpg" width="160" alt="小火龙模型截图"> |
| #0006 | [喷火龙](assets/garden/models/6.glb)<br><sub>Charizard</sub> | <img src="docs/previews/6-regular.jpg" width="160" alt="喷火龙模型截图"> |
| #0006 | [超级喷火龙 X](assets/garden/models/6-mega-x.glb)<br><sub>Mega Charizard X</sub> | <img src="docs/previews/6-mega-x.jpg" width="160" alt="超级喷火龙 X模型截图"> |
| #0006 | [超级喷火龙 Y](assets/garden/models/6-mega-y.glb)<br><sub>Mega Charizard Y</sub> | <img src="docs/previews/6-mega-y.jpg" width="160" alt="超级喷火龙 Y模型截图"> |
| #0006 | [喷火龙（超极巨化）](models/supplemental/6-gmax.glb)<br><sub>Gigantamax Charizard</sub> | <img src="docs/previews/6-gmax.jpg" width="160" alt="喷火龙（超极巨化）模型截图"> |
| #0007 | [杰尼龟](assets/garden/models/7.glb)<br><sub>Squirtle</sub> | <img src="docs/previews/7-regular.jpg" width="160" alt="杰尼龟模型截图"> |
| #0012 | [巴大蝶](models/supplemental/12-regular.glb)<br><sub>Butterfree</sub> | <img src="docs/previews/12-regular.jpg" width="160" alt="巴大蝶模型截图"> |
| #0012 | [巴大蝶（超极巨化）](models/supplemental/12-gmax.glb)<br><sub>Gigantamax Butterfree</sub> | <img src="docs/previews/12-gmax.jpg" width="160" alt="巴大蝶（超极巨化）模型截图"> |
| #0015 | [大针蜂](models/supplemental/15-regular.glb)<br><sub>Beedrill</sub> | <img src="docs/previews/15-regular.jpg" width="160" alt="大针蜂模型截图"> |
| #0015 | [超级大针蜂](models/supplemental/15-mega.glb)<br><sub>Mega Beedrill</sub> | <img src="docs/previews/15-mega.jpg" width="160" alt="超级大针蜂模型截图"> |
| #0016 | [波波](models/supplemental/16-regular.glb)<br><sub>Pidgey</sub> | <img src="docs/previews/16-regular.jpg" width="160" alt="波波模型截图"> |
| #0017 | [比比鸟](models/supplemental/17-regular.glb)<br><sub>Pidgeotto</sub> | <img src="docs/previews/17-regular.jpg" width="160" alt="比比鸟模型截图"> |
| #0018 | [大比鸟](models/supplemental/18-regular.glb)<br><sub>Pidgeot</sub> | <img src="docs/previews/18-regular.jpg" width="160" alt="大比鸟模型截图"> |
| #0018 | [超级大比鸟](models/supplemental/18-mega.glb)<br><sub>Mega Pidgeot</sub> | <img src="docs/previews/18-mega.jpg" width="160" alt="超级大比鸟模型截图"> |
| #0021 | [烈雀](models/supplemental/21-regular.glb)<br><sub>Spearow</sub> | <img src="docs/previews/21-regular.jpg" width="160" alt="烈雀模型截图"> |
| #0022 | [大嘴雀](models/supplemental/22-regular.glb)<br><sub>Fearow</sub> | <img src="docs/previews/22-regular.jpg" width="160" alt="大嘴雀模型截图"> |
| #0025 | [皮卡丘](assets/garden/models/25.glb)<br><sub>Pikachu</sub> | <img src="docs/previews/25-regular.jpg" width="160" alt="皮卡丘模型截图"> |
| #0041 | [超音蝠](models/supplemental/41-regular.glb)<br><sub>Zubat</sub> | <img src="docs/previews/41-regular.jpg" width="160" alt="超音蝠模型截图"> |
| #0042 | [大嘴蝠](models/supplemental/42-regular.glb)<br><sub>Golbat</sub> | <img src="docs/previews/42-regular.jpg" width="160" alt="大嘴蝠模型截图"> |
| #0049 | [摩鲁蛾](models/supplemental/49-regular.glb)<br><sub>Venomoth</sub> | <img src="docs/previews/49-regular.jpg" width="160" alt="摩鲁蛾模型截图"> |
| #0054 | [可达鸭](assets/garden/models/54.glb)<br><sub>Psyduck</sub> | <img src="docs/previews/54-regular.jpg" width="160" alt="可达鸭模型截图"> |
| #0081 | [小磁怪](models/supplemental/81-regular.glb)<br><sub>Magnemite</sub> | <img src="docs/previews/81-regular.jpg" width="160" alt="小磁怪模型截图"> |
| #0082 | [三合一磁怪](models/supplemental/82-regular.glb)<br><sub>Magneton</sub> | <img src="docs/previews/82-regular.jpg" width="160" alt="三合一磁怪模型截图"> |
| #0083 | [大葱鸭](models/supplemental/83-regular.glb)<br><sub>Farfetch’d</sub> | <img src="docs/previews/83-regular.jpg" width="160" alt="大葱鸭模型截图"> |
| #0084 | [嘟嘟](models/supplemental/84-regular.glb)<br><sub>Doduo</sub> | <img src="docs/previews/84-regular.jpg" width="160" alt="嘟嘟模型截图"> |
| #0085 | [嘟嘟利](models/supplemental/85-regular.glb)<br><sub>Dodrio</sub> | <img src="docs/previews/85-regular.jpg" width="160" alt="嘟嘟利模型截图"> |
| #0092 | [鬼斯](models/supplemental/92-regular.glb)<br><sub>Gastly</sub> | <img src="docs/previews/92-regular.jpg" width="160" alt="鬼斯模型截图"> |
| #0093 | [鬼斯通](models/supplemental/93-regular.glb)<br><sub>Haunter</sub> | <img src="docs/previews/93-regular.jpg" width="160" alt="鬼斯通模型截图"> |
| #0094 | [耿鬼](assets/garden/models/94.glb)<br><sub>Gengar</sub> | <img src="docs/previews/94-regular.jpg" width="160" alt="耿鬼模型截图"> |
| #0094 | [超级耿鬼](models/supplemental/94-mega.glb)<br><sub>Mega Gengar</sub> | <img src="docs/previews/94-mega.jpg" width="160" alt="超级耿鬼模型截图"> |
| #0109 | [瓦斯弹](models/supplemental/109-regular.glb)<br><sub>Koffing</sub> | <img src="docs/previews/109-regular.jpg" width="160" alt="瓦斯弹模型截图"> |
| #0109 | [瓦斯弹（伽勒尔风格同人）](models/supplemental/109-galar.glb)<br><sub>Galarian Koffing (fan art)</sub> | <img src="docs/previews/109-galar.jpg" width="160" alt="瓦斯弹（伽勒尔风格同人）模型截图"> |
| #0110 | [双弹瓦斯](models/supplemental/110-regular.glb)<br><sub>Weezing</sub> | <img src="docs/previews/110-regular.jpg" width="160" alt="双弹瓦斯模型截图"> |
| #0123 | [飞天螳螂](models/supplemental/123-regular.glb)<br><sub>Scyther</sub> | <img src="docs/previews/123-regular.jpg" width="160" alt="飞天螳螂模型截图"> |
| #0127 | [超级凯罗斯](models/supplemental/127-mega.glb)<br><sub>Mega Pinsir</sub> | <img src="docs/previews/127-mega.jpg" width="160" alt="超级凯罗斯模型截图"> |
| #0129 | [鲤鱼王](assets/garden/models/129.glb)<br><sub>Magikarp</sub> | <img src="docs/previews/129-regular.jpg" width="160" alt="鲤鱼王模型截图"> |
| #0130 | [暴鲤龙](assets/garden/models/130.glb)<br><sub>Gyarados</sub> | <img src="docs/previews/130-regular.jpg" width="160" alt="暴鲤龙模型截图"> |
| #0130 | [超级暴鲤龙](assets/garden/models/130-mega.glb)<br><sub>Mega Gyarados</sub> | <img src="docs/previews/130-mega.jpg" width="160" alt="超级暴鲤龙模型截图"> |
| #0133 | [伊布](assets/garden/models/133.glb)<br><sub>Eevee</sub> | <img src="docs/previews/133-regular.jpg" width="160" alt="伊布模型截图"> |
| #0137 | [多边兽](models/supplemental/137-regular.glb)<br><sub>Porygon</sub> | <img src="docs/previews/137-regular.jpg" width="160" alt="多边兽模型截图"> |
| #0142 | [化石翼龙](models/supplemental/142-regular.glb)<br><sub>Aerodactyl</sub> | <img src="docs/previews/142-regular.jpg" width="160" alt="化石翼龙模型截图"> |
| #0142 | [超级化石翼龙](models/supplemental/142-mega.glb)<br><sub>Mega Aerodactyl</sub> | <img src="docs/previews/142-mega.jpg" width="160" alt="超级化石翼龙模型截图"> |
| #0144 | [急冻鸟](assets/garden/models/144.glb)<br><sub>Articuno</sub> | <img src="docs/previews/144-regular.jpg" width="160" alt="急冻鸟模型截图"> |
| #0144 | [急冻鸟（伽勒尔的样子）](models/supplemental/144-galar.glb)<br><sub>Galarian Articuno</sub> | <img src="docs/previews/144-galar.jpg" width="160" alt="急冻鸟（伽勒尔的样子）模型截图"> |
| #0145 | [闪电鸟](models/supplemental/145-regular.glb)<br><sub>Zapdos</sub> | <img src="docs/previews/145-regular.jpg" width="160" alt="闪电鸟模型截图"> |
| #0145 | [闪电鸟（伽勒尔的样子）](models/supplemental/145-galar.glb)<br><sub>Galarian Zapdos</sub> | <img src="docs/previews/145-galar.jpg" width="160" alt="闪电鸟（伽勒尔的样子）模型截图"> |
| #0146 | [火焰鸟](models/supplemental/146-regular.glb)<br><sub>Moltres</sub> | <img src="docs/previews/146-regular.jpg" width="160" alt="火焰鸟模型截图"> |
| #0146 | [火焰鸟（伽勒尔的样子）](models/supplemental/146-galar.glb)<br><sub>Galarian Moltres</sub> | <img src="docs/previews/146-galar.jpg" width="160" alt="火焰鸟（伽勒尔的样子）模型截图"> |
| #0149 | [快龙](models/supplemental/149-regular.glb)<br><sub>Dragonite</sub> | <img src="docs/previews/149-regular.jpg" width="160" alt="快龙模型截图"> |
| #0150 | [超梦](models/supplemental/150-regular.glb)<br><sub>Mewtwo</sub> | <img src="docs/previews/150-regular.jpg" width="160" alt="超梦模型截图"> |
| #0150 | [超级超梦 X](models/supplemental/150-mega-x.glb)<br><sub>Mega Mewtwo X</sub> | <img src="docs/previews/150-mega-x.jpg" width="160" alt="超级超梦 X模型截图"> |
| #0150 | [超级超梦 Y](models/supplemental/150-mega-y.glb)<br><sub>Mega Mewtwo Y</sub> | <img src="docs/previews/150-mega-y.jpg" width="160" alt="超级超梦 Y模型截图"> |
| #0151 | [梦幻](assets/garden/models/151.glb)<br><sub>Mew</sub> | <img src="docs/previews/151-regular.jpg" width="160" alt="梦幻模型截图"> |
| #0152 | [菊草叶](assets/garden/models/152.glb)<br><sub>Chikorita</sub> | <img src="docs/previews/152-regular.jpg" width="160" alt="菊草叶模型截图"> |
| #0155 | [火球鼠](assets/garden/models/155.glb)<br><sub>Cyndaquil</sub> | <img src="docs/previews/155-regular.jpg" width="160" alt="火球鼠模型截图"> |
| #0158 | [小锯鳄](assets/garden/models/158.glb)<br><sub>Totodile</sub> | <img src="docs/previews/158-regular.jpg" width="160" alt="小锯鳄模型截图"> |
| #0163 | [咕咕](models/supplemental/163-regular.glb)<br><sub>Hoothoot</sub> | <img src="docs/previews/163-regular.jpg" width="160" alt="咕咕模型截图"> |
| #0164 | [猫头夜鹰](models/supplemental/164-regular.glb)<br><sub>Noctowl</sub> | <img src="docs/previews/164-regular.jpg" width="160" alt="猫头夜鹰模型截图"> |
| #0165 | [芭瓢虫](models/supplemental/165-regular.glb)<br><sub>Ledyba</sub> | <img src="docs/previews/165-regular.jpg" width="160" alt="芭瓢虫模型截图"> |
| #0166 | [安瓢虫](models/supplemental/166-regular.glb)<br><sub>Ledian</sub> | <img src="docs/previews/166-regular.jpg" width="160" alt="安瓢虫模型截图"> |
| #0169 | [叉字蝠](models/supplemental/169-regular.glb)<br><sub>Crobat</sub> | <img src="docs/previews/169-regular.jpg" width="160" alt="叉字蝠模型截图"> |
| #0176 | [波克基古](models/supplemental/176-regular.glb)<br><sub>Togetic</sub> | <img src="docs/previews/176-regular.jpg" width="160" alt="波克基古模型截图"> |
| #0177 | [天然雀](models/supplemental/177-regular.glb)<br><sub>Natu</sub> | <img src="docs/previews/177-regular.jpg" width="160" alt="天然雀模型截图"> |
| #0178 | [天然鸟](models/supplemental/178-regular.glb)<br><sub>Xatu</sub> | <img src="docs/previews/178-regular.jpg" width="160" alt="天然鸟模型截图"> |
| #0183 | [玛力露](assets/garden/models/183.glb)<br><sub>Marill</sub> | <img src="docs/previews/183-regular.jpg" width="160" alt="玛力露模型截图"> |
| #0184 | [玛力露丽](assets/garden/models/184.glb)<br><sub>Azumarill</sub> | <img src="docs/previews/184-regular.jpg" width="160" alt="玛力露丽模型截图"> |
| #0187 | [毽子草](models/supplemental/187-regular.glb)<br><sub>Hoppip</sub> | <img src="docs/previews/187-regular.jpg" width="160" alt="毽子草模型截图"> |
| #0188 | [毽子花](models/supplemental/188-regular.glb)<br><sub>Skiploom</sub> | <img src="docs/previews/188-regular.jpg" width="160" alt="毽子花模型截图"> |
| #0189 | [毽子棉](models/supplemental/189-regular.glb)<br><sub>Jumpluff</sub> | <img src="docs/previews/189-regular.jpg" width="160" alt="毽子棉模型截图"> |
| #0193 | [蜻蜻蜓](models/supplemental/193-regular.glb)<br><sub>Yanma</sub> | <img src="docs/previews/193-regular.jpg" width="160" alt="蜻蜻蜓模型截图"> |
| #0198 | [黑暗鸦](models/supplemental/198-regular.glb)<br><sub>Murkrow</sub> | <img src="docs/previews/198-regular.jpg" width="160" alt="黑暗鸦模型截图"> |
| #0200 | [梦妖](models/supplemental/200-regular.glb)<br><sub>Misdreavus</sub> | <img src="docs/previews/200-regular.jpg" width="160" alt="梦妖模型截图"> |
| #0201 | [未知图腾](models/supplemental/201-regular.glb)<br><sub>Unown</sub> | <img src="docs/previews/201-regular.jpg" width="160" alt="未知图腾模型截图"> |
| #0207 | [天蝎](models/supplemental/207-regular.glb)<br><sub>Gligar</sub> | <img src="docs/previews/207-regular.jpg" width="160" alt="天蝎模型截图"> |
| #0212 | [巨钳螳螂](models/supplemental/212-regular.glb)<br><sub>Scizor</sub> | <img src="docs/previews/212-regular.jpg" width="160" alt="巨钳螳螂模型截图"> |
| #0212 | [超级巨钳螳螂](models/supplemental/212-mega.glb)<br><sub>Mega Scizor</sub> | <img src="docs/previews/212-mega.jpg" width="160" alt="超级巨钳螳螂模型截图"> |
| #0225 | [信使鸟](models/supplemental/225-regular.glb)<br><sub>Delibird</sub> | <img src="docs/previews/225-regular.jpg" width="160" alt="信使鸟模型截图"> |
| #0227 | [盔甲鸟](models/supplemental/227-regular.glb)<br><sub>Skarmory</sub> | <img src="docs/previews/227-regular.jpg" width="160" alt="盔甲鸟模型截图"> |
| #0227 | [超级盔甲鸟](models/supplemental/227-mega.glb)<br><sub>Mega Skarmory</sub> | <img src="docs/previews/227-mega.jpg" width="160" alt="超级盔甲鸟模型截图"> |
| #0233 | [多边兽２型](models/supplemental/233-regular.glb)<br><sub>Porygon2</sub> | <img src="docs/previews/233-regular.jpg" width="160" alt="多边兽２型模型截图"> |
| #0249 | [洛奇亚](assets/garden/models/249.glb)<br><sub>Lugia</sub> | <img src="docs/previews/249-regular.jpg" width="160" alt="洛奇亚模型截图"> |
| #0250 | [凤王](models/supplemental/250-regular.glb)<br><sub>Ho-Oh</sub> | <img src="docs/previews/250-regular.jpg" width="160" alt="凤王模型截图"> |
| #0251 | [时拉比](models/supplemental/251-regular.glb)<br><sub>Celebi</sub> | <img src="docs/previews/251-regular.jpg" width="160" alt="时拉比模型截图"> |
| #0252 | [木守宫](assets/garden/models/252.glb)<br><sub>Treecko</sub> | <img src="docs/previews/252-regular.jpg" width="160" alt="木守宫模型截图"> |
| #0255 | [火稚鸡](assets/garden/models/255.glb)<br><sub>Torchic</sub> | <img src="docs/previews/255-regular.jpg" width="160" alt="火稚鸡模型截图"> |
| #0258 | [水跃鱼](assets/garden/models/258.glb)<br><sub>Mudkip</sub> | <img src="docs/previews/258-regular.jpg" width="160" alt="水跃鱼模型截图"> |
| #0267 | [狩猎凤蝶](models/supplemental/267-regular.glb)<br><sub>Beautifly</sub> | <img src="docs/previews/267-regular.jpg" width="160" alt="狩猎凤蝶模型截图"> |
| #0268 | [盾甲茧](models/supplemental/268-regular.glb)<br><sub>Cascoon</sub> | <img src="docs/previews/268-regular.jpg" width="160" alt="盾甲茧模型截图"> |
| #0269 | [毒粉蛾](models/supplemental/269-regular.glb)<br><sub>Dustox</sub> | <img src="docs/previews/269-regular.jpg" width="160" alt="毒粉蛾模型截图"> |
| #0276 | [傲骨燕](models/supplemental/276-regular.glb)<br><sub>Taillow</sub> | <img src="docs/previews/276-regular.jpg" width="160" alt="傲骨燕模型截图"> |
| #0277 | [大王燕](models/supplemental/277-regular.glb)<br><sub>Swellow</sub> | <img src="docs/previews/277-regular.jpg" width="160" alt="大王燕模型截图"> |
| #0278 | [长翅鸥](models/supplemental/278-regular.glb)<br><sub>Wingull</sub> | <img src="docs/previews/278-regular.jpg" width="160" alt="长翅鸥模型截图"> |
| #0279 | [大嘴鸥](models/supplemental/279-regular.glb)<br><sub>Pelipper</sub> | <img src="docs/previews/279-regular.jpg" width="160" alt="大嘴鸥模型截图"> |
| #0280 | [拉鲁拉丝](assets/garden/models/280.glb)<br><sub>Ralts</sub> | <img src="docs/previews/280-regular.jpg" width="160" alt="拉鲁拉丝模型截图"> |
| #0284 | [雨翅蛾](models/supplemental/284-regular.glb)<br><sub>Masquerain</sub> | <img src="docs/previews/284-regular.jpg" width="160" alt="雨翅蛾模型截图"> |
| #0291 | [铁面忍者](models/supplemental/291-regular.glb)<br><sub>Ninjask</sub> | <img src="docs/previews/291-regular.jpg" width="160" alt="铁面忍者模型截图"> |
| #0292 | [脱壳忍者](models/supplemental/292-regular.glb)<br><sub>Shedinja</sub> | <img src="docs/previews/292-regular.jpg" width="160" alt="脱壳忍者模型截图"> |
| #0313 | [电萤虫](models/supplemental/313-regular.glb)<br><sub>Volbeat</sub> | <img src="docs/previews/313-regular.jpg" width="160" alt="电萤虫模型截图"> |
| #0314 | [甜甜萤](models/supplemental/314-regular.glb)<br><sub>Illumise</sub> | <img src="docs/previews/314-regular.jpg" width="160" alt="甜甜萤模型截图"> |
| #0329 | [超音波幼虫](models/supplemental/329-regular.glb)<br><sub>Vibrava</sub> | <img src="docs/previews/329-regular.jpg" width="160" alt="超音波幼虫模型截图"> |
| #0330 | [沙漠蜻蜓](models/supplemental/330-regular.glb)<br><sub>Flygon</sub> | <img src="docs/previews/330-regular.jpg" width="160" alt="沙漠蜻蜓模型截图"> |
| #0333 | [青绵鸟](models/supplemental/333-regular.glb)<br><sub>Swablu</sub> | <img src="docs/previews/333-regular.jpg" width="160" alt="青绵鸟模型截图"> |
| #0334 | [七夕青鸟](models/supplemental/334-regular.glb)<br><sub>Altaria</sub> | <img src="docs/previews/334-regular.jpg" width="160" alt="七夕青鸟模型截图"> |
| #0337 | [月石](models/supplemental/337-regular.glb)<br><sub>Lunatone</sub> | <img src="docs/previews/337-regular.jpg" width="160" alt="月石模型截图"> |
| #0338 | [太阳岩](models/supplemental/338-regular.glb)<br><sub>Solrock</sub> | <img src="docs/previews/338-regular.jpg" width="160" alt="太阳岩模型截图"> |
| #0343 | [天秤偶](models/supplemental/343-regular.glb)<br><sub>Baltoy</sub> | <img src="docs/previews/343-regular.jpg" width="160" alt="天秤偶模型截图"> |
| #0344 | [念力土偶](models/supplemental/344-regular.glb)<br><sub>Claydol</sub> | <img src="docs/previews/344-regular.jpg" width="160" alt="念力土偶模型截图"> |
| #0355 | [夜巡灵](models/supplemental/355-regular.glb)<br><sub>Duskull</sub> | <img src="docs/previews/355-regular.jpg" width="160" alt="夜巡灵模型截图"> |
| #0356 | [彷徨夜灵](models/supplemental/356-regular.glb)<br><sub>Dusclops</sub> | <img src="docs/previews/356-regular.jpg" width="160" alt="彷徨夜灵模型截图"> |
| #0357 | [热带龙](models/supplemental/357-regular.glb)<br><sub>Tropius</sub> | <img src="docs/previews/357-regular.jpg" width="160" alt="热带龙模型截图"> |
| #0358 | [风铃铃](models/supplemental/358-regular.glb)<br><sub>Chimecho</sub> | <img src="docs/previews/358-regular.jpg" width="160" alt="风铃铃模型截图"> |
| #0373 | [暴飞龙](models/supplemental/373-regular.glb)<br><sub>Salamence</sub> | <img src="docs/previews/373-regular.jpg" width="160" alt="暴飞龙模型截图"> |
| #0373 | [超级暴飞龙](models/supplemental/373-mega.glb)<br><sub>Mega Salamence</sub> | <img src="docs/previews/373-mega.jpg" width="160" alt="超级暴飞龙模型截图"> |
| #0374 | [铁哑铃](models/supplemental/374-regular.glb)<br><sub>Beldum</sub> | <img src="docs/previews/374-regular.jpg" width="160" alt="铁哑铃模型截图"> |
| #0375 | [金属怪](models/supplemental/375-regular.glb)<br><sub>Metang</sub> | <img src="docs/previews/375-regular.jpg" width="160" alt="金属怪模型截图"> |
| #0376 | [巨金怪](models/supplemental/376-regular.glb)<br><sub>Metagross</sub> | <img src="docs/previews/376-regular.jpg" width="160" alt="巨金怪模型截图"> |
| #0376 | [超级巨金怪](models/supplemental/376-mega.glb)<br><sub>Mega Metagross</sub> | <img src="docs/previews/376-mega.jpg" width="160" alt="超级巨金怪模型截图"> |
| #0380 | [拉帝亚斯](models/supplemental/380-regular.glb)<br><sub>Latias</sub> | <img src="docs/previews/380-regular.jpg" width="160" alt="拉帝亚斯模型截图"> |
| #0380 | [超级拉帝亚斯](models/supplemental/380-mega.glb)<br><sub>Mega Latias</sub> | <img src="docs/previews/380-mega.jpg" width="160" alt="超级拉帝亚斯模型截图"> |
| #0381 | [拉帝欧斯](models/supplemental/381-regular.glb)<br><sub>Latios</sub> | <img src="docs/previews/381-regular.jpg" width="160" alt="拉帝欧斯模型截图"> |
| #0381 | [超级拉帝欧斯](models/supplemental/381-mega.glb)<br><sub>Mega Latios</sub> | <img src="docs/previews/381-mega.jpg" width="160" alt="超级拉帝欧斯模型截图"> |
| #0383 | [固拉多](assets/garden/models/383.glb)<br><sub>Groudon</sub> | <img src="docs/previews/383-regular.jpg" width="160" alt="固拉多模型截图"> |
| #0384 | [烈空坐](assets/garden/models/384.glb)<br><sub>Rayquaza</sub> | <img src="docs/previews/384-regular.jpg" width="160" alt="烈空坐模型截图"> |
| #0384 | [超级烈空坐](assets/garden/models/384-mega.glb)<br><sub>Mega Rayquaza</sub> | <img src="docs/previews/384-mega.jpg" width="160" alt="超级烈空坐模型截图"> |
| #0385 | [基拉祈](models/supplemental/385-regular.glb)<br><sub>Jirachi</sub> | <img src="docs/previews/385-regular.jpg" width="160" alt="基拉祈模型截图"> |
| #0386 | [代欧奇希斯](models/supplemental/386-regular.glb)<br><sub>Deoxys</sub> | <img src="docs/previews/386-regular.jpg" width="160" alt="代欧奇希斯模型截图"> |
| #0396 | [姆克儿](models/supplemental/396-regular.glb)<br><sub>Starly</sub> | <img src="docs/previews/396-regular.jpg" width="160" alt="姆克儿模型截图"> |
| #0397 | [姆克鸟](models/supplemental/397-regular.glb)<br><sub>Staravia</sub> | <img src="docs/previews/397-regular.jpg" width="160" alt="姆克鸟模型截图"> |
| #0398 | [姆克鹰](models/supplemental/398-regular.glb)<br><sub>Staraptor</sub> | <img src="docs/previews/398-regular.jpg" width="160" alt="姆克鹰模型截图"> |
| #0414 | [绅士蛾](models/supplemental/414-regular.glb)<br><sub>Mothim</sub> | <img src="docs/previews/414-regular.jpg" width="160" alt="绅士蛾模型截图"> |
| #0415 | [三蜜蜂](models/supplemental/415-regular.glb)<br><sub>Combee</sub> | <img src="docs/previews/415-regular.jpg" width="160" alt="三蜜蜂模型截图"> |
| #0416 | [蜂女王](models/supplemental/416-regular.glb)<br><sub>Vespiquen</sub> | <img src="docs/previews/416-regular.jpg" width="160" alt="蜂女王模型截图"> |
| #0425 | [飘飘球](models/supplemental/425-regular.glb)<br><sub>Drifloon</sub> | <img src="docs/previews/425-regular.jpg" width="160" alt="飘飘球模型截图"> |
| #0426 | [随风球](models/supplemental/426-regular.glb)<br><sub>Drifblim</sub> | <img src="docs/previews/426-regular.jpg" width="160" alt="随风球模型截图"> |
| #0429 | [梦妖魔](models/supplemental/429-regular.glb)<br><sub>Mismagius</sub> | <img src="docs/previews/429-regular.jpg" width="160" alt="梦妖魔模型截图"> |
| #0430 | [乌鸦头头](models/supplemental/430-regular.glb)<br><sub>Honchkrow</sub> | <img src="docs/previews/430-regular.jpg" width="160" alt="乌鸦头头模型截图"> |
| #0433 | [铃铛响](models/supplemental/433-regular.glb)<br><sub>Chingling</sub> | <img src="docs/previews/433-regular.jpg" width="160" alt="铃铛响模型截图"> |
| #0436 | [铜镜怪](models/supplemental/436-regular.glb)<br><sub>Bronzor</sub> | <img src="docs/previews/436-regular.jpg" width="160" alt="铜镜怪模型截图"> |
| #0437 | [青铜钟](models/supplemental/437-regular.glb)<br><sub>Bronzong</sub> | <img src="docs/previews/437-regular.jpg" width="160" alt="青铜钟模型截图"> |
| #0441 | [聒噪鸟](models/supplemental/441-regular.glb)<br><sub>Chatot</sub> | <img src="docs/previews/441-regular.jpg" width="160" alt="聒噪鸟模型截图"> |
| #0447 | [利欧路](assets/garden/models/447.glb)<br><sub>Riolu</sub> | <img src="docs/previews/447-regular.jpg" width="160" alt="利欧路模型截图"> |
| #0448 | [路卡利欧](assets/garden/models/448.glb)<br><sub>Lucario</sub> | <img src="docs/previews/448-regular.jpg" width="160" alt="路卡利欧模型截图"> |
| #0455 | [尖牙笼](models/supplemental/455-regular.glb)<br><sub>Carnivine</sub> | <img src="docs/previews/455-regular.jpg" width="160" alt="尖牙笼模型截图"> |
| #0462 | [自爆磁怪](models/supplemental/462-regular.glb)<br><sub>Magnezone</sub> | <img src="docs/previews/462-regular.jpg" width="160" alt="自爆磁怪模型截图"> |
| #0468 | [波克基斯](models/supplemental/468-regular.glb)<br><sub>Togekiss</sub> | <img src="docs/previews/468-regular.jpg" width="160" alt="波克基斯模型截图"> |
| #0469 | [远古巨蜓](models/supplemental/469-regular.glb)<br><sub>Yanmega</sub> | <img src="docs/previews/469-regular.jpg" width="160" alt="远古巨蜓模型截图"> |
| #0472 | [天蝎王](models/supplemental/472-regular.glb)<br><sub>Gliscor</sub> | <img src="docs/previews/472-regular.jpg" width="160" alt="天蝎王模型截图"> |
| #0474 | [多边兽乙型](models/supplemental/474-regular.glb)<br><sub>Porygon-Z</sub> | <img src="docs/previews/474-regular.jpg" width="160" alt="多边兽乙型模型截图"> |
| #0477 | [黑夜魔灵](models/supplemental/477-regular.glb)<br><sub>Dusknoir</sub> | <img src="docs/previews/477-regular.jpg" width="160" alt="黑夜魔灵模型截图"> |
| #0478 | [雪妖女](models/supplemental/478-regular.glb)<br><sub>Froslass</sub> | <img src="docs/previews/478-regular.jpg" width="160" alt="雪妖女模型截图"> |
| #0479 | [洛托姆](models/supplemental/479-regular.glb)<br><sub>Rotom</sub> | <img src="docs/previews/479-regular.jpg" width="160" alt="洛托姆模型截图"> |
| #0480 | [由克希](models/supplemental/480-regular.glb)<br><sub>Uxie</sub> | <img src="docs/previews/480-regular.jpg" width="160" alt="由克希模型截图"> |
| #0481 | [艾姆利多](models/supplemental/481-regular.glb)<br><sub>Mesprit</sub> | <img src="docs/previews/481-regular.jpg" width="160" alt="艾姆利多模型截图"> |
| #0482 | [亚克诺姆](models/supplemental/482-regular.glb)<br><sub>Azelf</sub> | <img src="docs/previews/482-regular.jpg" width="160" alt="亚克诺姆模型截图"> |
| #0487 | [骑拉帝纳](models/supplemental/487-regular.glb)<br><sub>Giratina</sub> | <img src="docs/previews/487-regular.jpg" width="160" alt="骑拉帝纳模型截图"> |
| #0488 | [克雷色利亚](models/supplemental/488-regular.glb)<br><sub>Cresselia</sub> | <img src="docs/previews/488-regular.jpg" width="160" alt="克雷色利亚模型截图"> |
| #0491 | [达克莱伊](models/supplemental/491-regular.glb)<br><sub>Darkrai</sub> | <img src="docs/previews/491-regular.jpg" width="160" alt="达克莱伊模型截图"> |
| #0491 | [超级达克莱伊](models/supplemental/491-mega.glb)<br><sub>Mega Darkrai</sub> | <img src="docs/previews/491-mega.jpg" width="160" alt="超级达克莱伊模型截图"> |
| #0493 | [阿尔宙斯](models/supplemental/493-regular.glb)<br><sub>Arceus</sub> | <img src="docs/previews/493-regular.jpg" width="160" alt="阿尔宙斯模型截图"> |
| #0494 | [比克提尼](models/supplemental/494-regular.glb)<br><sub>Victini</sub> | <img src="docs/previews/494-regular.jpg" width="160" alt="比克提尼模型截图"> |
| #0519 | [豆豆鸽](models/supplemental/519-regular.glb)<br><sub>Pidove</sub> | <img src="docs/previews/519-regular.jpg" width="160" alt="豆豆鸽模型截图"> |
| #0520 | [咕咕鸽](models/supplemental/520-regular.glb)<br><sub>Tranquill</sub> | <img src="docs/previews/520-regular.jpg" width="160" alt="咕咕鸽模型截图"> |
| #0521 | [高傲雉鸡](models/supplemental/521-regular.glb)<br><sub>Unfezant</sub> | <img src="docs/previews/521-regular.jpg" width="160" alt="高傲雉鸡模型截图"> |
| #0527 | [滚滚蝙蝠](models/supplemental/527-regular.glb)<br><sub>Woobat</sub> | <img src="docs/previews/527-regular.jpg" width="160" alt="滚滚蝙蝠模型截图"> |
| #0528 | [心蝙蝠](models/supplemental/528-regular.glb)<br><sub>Swoobat</sub> | <img src="docs/previews/528-regular.jpg" width="160" alt="心蝙蝠模型截图"> |
| #0561 | [象征鸟](models/supplemental/561-regular.glb)<br><sub>Sigilyph</sub> | <img src="docs/previews/561-regular.jpg" width="160" alt="象征鸟模型截图"> |
| #0562 | [哭哭面具](models/supplemental/562-regular.glb)<br><sub>Yamask</sub> | <img src="docs/previews/562-regular.jpg" width="160" alt="哭哭面具模型截图"> |
| #0563 | [迭失棺](models/supplemental/563-regular.glb)<br><sub>Cofagrigus</sub> | <img src="docs/previews/563-regular.jpg" width="160" alt="迭失棺模型截图"> |
| #0566 | [始祖小鸟](models/supplemental/566-regular.glb)<br><sub>Archen</sub> | <img src="docs/previews/566-regular.jpg" width="160" alt="始祖小鸟模型截图"> |
| #0567 | [始祖大鸟](models/supplemental/567-regular.glb)<br><sub>Archeops</sub> | <img src="docs/previews/567-regular.jpg" width="160" alt="始祖大鸟模型截图"> |
| #0571 | [索罗亚克](assets/garden/models/571.glb)<br><sub>Zoroark</sub> | <img src="docs/previews/571-regular.jpg" width="160" alt="索罗亚克模型截图"> |
| #0577 | [单卵细胞球](models/supplemental/577-regular.glb)<br><sub>Solosis</sub> | <img src="docs/previews/577-regular.jpg" width="160" alt="单卵细胞球模型截图"> |
| #0578 | [双卵细胞球](models/supplemental/578-regular.glb)<br><sub>Duosion</sub> | <img src="docs/previews/578-regular.jpg" width="160" alt="双卵细胞球模型截图"> |
| #0579 | [人造细胞卵](models/supplemental/579-regular.glb)<br><sub>Reuniclus</sub> | <img src="docs/previews/579-regular.jpg" width="160" alt="人造细胞卵模型截图"> |
| #0580 | [鸭宝宝](models/supplemental/580-regular.glb)<br><sub>Ducklett</sub> | <img src="docs/previews/580-regular.jpg" width="160" alt="鸭宝宝模型截图"> |
| #0581 | [舞天鹅](models/supplemental/581-regular.glb)<br><sub>Swanna</sub> | <img src="docs/previews/581-regular.jpg" width="160" alt="舞天鹅模型截图"> |
| #0587 | [电飞鼠](models/supplemental/587-regular.glb)<br><sub>Emolga</sub> | <img src="docs/previews/587-regular.jpg" width="160" alt="电飞鼠模型截图"> |
| #0599 | [齿轮儿](models/supplemental/599-regular.glb)<br><sub>Klink</sub> | <img src="docs/previews/599-regular.jpg" width="160" alt="齿轮儿模型截图"> |
| #0600 | [齿轮组](models/supplemental/600-regular.glb)<br><sub>Klang</sub> | <img src="docs/previews/600-regular.jpg" width="160" alt="齿轮组模型截图"> |
| #0601 | [齿轮怪](models/supplemental/601-regular.glb)<br><sub>Klinklang</sub> | <img src="docs/previews/601-regular.jpg" width="160" alt="齿轮怪模型截图"> |
| #0602 | [麻麻小鱼](models/supplemental/602-regular.glb)<br><sub>Tynamo</sub> | <img src="docs/previews/602-regular.jpg" width="160" alt="麻麻小鱼模型截图"> |
| #0603 | [麻麻鳗](models/supplemental/603-regular.glb)<br><sub>Eelektrik</sub> | <img src="docs/previews/603-regular.jpg" width="160" alt="麻麻鳗模型截图"> |
| #0604 | [麻麻鳗鱼王](models/supplemental/604-regular.glb)<br><sub>Eelektross</sub> | <img src="docs/previews/604-regular.jpg" width="160" alt="麻麻鳗鱼王模型截图"> |
| #0605 | [小灰怪](models/supplemental/605-regular.glb)<br><sub>Elgyem</sub> | <img src="docs/previews/605-regular.jpg" width="160" alt="小灰怪模型截图"> |
| #0606 | [大宇怪](models/supplemental/606-regular.glb)<br><sub>Beheeyem</sub> | <img src="docs/previews/606-regular.jpg" width="160" alt="大宇怪模型截图"> |
| #0607 | [烛光灵](models/supplemental/607-regular.glb)<br><sub>Litwick</sub> | <img src="docs/previews/607-regular.jpg" width="160" alt="烛光灵模型截图"> |
| #0608 | [灯火幽灵](models/supplemental/608-regular.glb)<br><sub>Lampent</sub> | <img src="docs/previews/608-regular.jpg" width="160" alt="灯火幽灵模型截图"> |
| #0609 | [水晶灯火灵](models/supplemental/609-regular.glb)<br><sub>Chandelure</sub> | <img src="docs/previews/609-regular.jpg" width="160" alt="水晶灯火灵模型截图"> |
| #0615 | [几何雪花](models/supplemental/615-regular.glb)<br><sub>Cryogonal</sub> | <img src="docs/previews/615-regular.jpg" width="160" alt="几何雪花模型截图"> |
| #0623 | [泥偶巨人](models/supplemental/623-regular.glb)<br><sub>Golurk</sub> | <img src="docs/previews/623-regular.jpg" width="160" alt="泥偶巨人模型截图"> |
| #0627 | [毛头小鹰](models/supplemental/627-regular.glb)<br><sub>Rufflet</sub> | <img src="docs/previews/627-regular.jpg" width="160" alt="毛头小鹰模型截图"> |
| #0628 | [勇士雄鹰](models/supplemental/628-regular.glb)<br><sub>Braviary</sub> | <img src="docs/previews/628-regular.jpg" width="160" alt="勇士雄鹰模型截图"> |
| #0628 | [勇士雄鹰（洗翠的样子）](models/supplemental/628-hisui.glb)<br><sub>Hisuian Braviary</sub> | <img src="docs/previews/628-hisui.jpg" width="160" alt="勇士雄鹰（洗翠的样子）模型截图"> |
| #0629 | [秃鹰丫头](models/supplemental/629-regular.glb)<br><sub>Vullaby</sub> | <img src="docs/previews/629-regular.jpg" width="160" alt="秃鹰丫头模型截图"> |
| #0630 | [秃鹰娜](models/supplemental/630-regular.glb)<br><sub>Mandibuzz</sub> | <img src="docs/previews/630-regular.jpg" width="160" alt="秃鹰娜模型截图"> |
| #0635 | [三首恶龙](models/supplemental/635-regular.glb)<br><sub>Hydreigon</sub> | <img src="docs/previews/635-regular.jpg" width="160" alt="三首恶龙模型截图"> |
| #0637 | [火神蛾](models/supplemental/637-regular.glb)<br><sub>Volcarona</sub> | <img src="docs/previews/637-regular.jpg" width="160" alt="火神蛾模型截图"> |
| #0641 | [龙卷云](models/supplemental/641-regular.glb)<br><sub>Tornadus</sub> | <img src="docs/previews/641-regular.jpg" width="160" alt="龙卷云模型截图"> |
| #0642 | [雷电云](models/supplemental/642-regular.glb)<br><sub>Thundurus</sub> | <img src="docs/previews/642-regular.jpg" width="160" alt="雷电云模型截图"> |
| #0645 | [土地云](models/supplemental/645-regular.glb)<br><sub>Landorus</sub> | <img src="docs/previews/645-regular.jpg" width="160" alt="土地云模型截图"> |
| #0655 | [超级妖火红狐](models/supplemental/655-mega.glb)<br><sub>Mega Delphox</sub> | <img src="docs/previews/655-mega.jpg" width="160" alt="超级妖火红狐模型截图"> |
| #0658 | [甲贺忍蛙](assets/garden/models/658.glb)<br><sub>Greninja</sub> | <img src="docs/previews/658-regular.jpg" width="160" alt="甲贺忍蛙模型截图"> |
| #0658 | [超级甲贺忍蛙](assets/garden/models/658-mega.glb)<br><sub>Mega Greninja</sub> | <img src="docs/previews/658-mega.jpg" width="160" alt="超级甲贺忍蛙模型截图"> |
| #0661 | [小箭雀](models/supplemental/661-regular.glb)<br><sub>Fletchling</sub> | <img src="docs/previews/661-regular.jpg" width="160" alt="小箭雀模型截图"> |
| #0662 | [火箭雀](models/supplemental/662-regular.glb)<br><sub>Fletchinder</sub> | <img src="docs/previews/662-regular.jpg" width="160" alt="火箭雀模型截图"> |
| #0663 | [烈箭鹰](models/supplemental/663-regular.glb)<br><sub>Talonflame</sub> | <img src="docs/previews/663-regular.jpg" width="160" alt="烈箭鹰模型截图"> |
| #0666 | [彩粉蝶](models/supplemental/666-regular.glb)<br><sub>Vivillon</sub> | <img src="docs/previews/666-regular.jpg" width="160" alt="彩粉蝶模型截图"> |
| #0679 | [独剑鞘](models/supplemental/679-regular.glb)<br><sub>Honedge</sub> | <img src="docs/previews/679-regular.jpg" width="160" alt="独剑鞘模型截图"> |
| #0680 | [双剑鞘](models/supplemental/680-regular.glb)<br><sub>Doublade</sub> | <img src="docs/previews/680-regular.jpg" width="160" alt="双剑鞘模型截图"> |
| #0681 | [坚盾剑怪](models/supplemental/681-regular.glb)<br><sub>Aegislash</sub> | <img src="docs/previews/681-regular.jpg" width="160" alt="坚盾剑怪模型截图"> |
| #0687 | [超级乌贼王](assets/garden/models/687-mega.glb)<br><sub>Mega Malamar</sub> | <img src="docs/previews/687-mega.jpg" width="160" alt="超级乌贼王模型截图"> |
| #0700 | [仙子伊布](assets/garden/models/700.glb)<br><sub>Sylveon</sub> | <img src="docs/previews/700-regular.jpg" width="160" alt="仙子伊布模型截图"> |
| #0701 | [摔角鹰人](models/supplemental/701-regular.glb)<br><sub>Hawlucha</sub> | <img src="docs/previews/701-regular.jpg" width="160" alt="摔角鹰人模型截图"> |
| #0707 | [钥圈儿](models/supplemental/707-regular.glb)<br><sub>Klefki</sub> | <img src="docs/previews/707-regular.jpg" width="160" alt="钥圈儿模型截图"> |
| #0714 | [嗡蝠](models/supplemental/714-regular.glb)<br><sub>Noibat</sub> | <img src="docs/previews/714-regular.jpg" width="160" alt="嗡蝠模型截图"> |
| #0715 | [音波龙](models/supplemental/715-regular.glb)<br><sub>Noivern</sub> | <img src="docs/previews/715-regular.jpg" width="160" alt="音波龙模型截图"> |
| #0717 | [伊裴尔塔尔](models/supplemental/717-regular.glb)<br><sub>Yveltal</sub> | <img src="docs/previews/717-regular.jpg" width="160" alt="伊裴尔塔尔模型截图"> |
| #0718 | [基格尔德](assets/garden/models/718.glb)<br><sub>Zygarde</sub> | <img src="docs/previews/718-regular.jpg" width="160" alt="基格尔德模型截图"> |
| #0718 | [超级基格尔德](assets/garden/models/718-mega.glb)<br><sub>Mega Zygarde</sub> | <img src="docs/previews/718-mega.jpg" width="160" alt="超级基格尔德模型截图"> |
| #0720 | [胡帕](models/supplemental/720-regular.glb)<br><sub>Hoopa</sub> | <img src="docs/previews/720-regular.jpg" width="160" alt="胡帕模型截图"> |
| #0720 | [胡帕（上游标记 mega）](models/supplemental/720-mega.glb)<br><sub>Hoopa (upstream: mega)</sub> | <img src="docs/previews/720-mega.jpg" width="160" alt="胡帕（上游标记 mega）模型截图"> |
| #0722 | [木木枭](models/supplemental/722-regular.glb)<br><sub>Rowlet</sub> | <img src="docs/previews/722-regular.jpg" width="160" alt="木木枭模型截图"> |
| #0723 | [投羽枭](models/supplemental/723-regular.glb)<br><sub>Dartrix</sub> | <img src="docs/previews/723-regular.jpg" width="160" alt="投羽枭模型截图"> |
| #0731 | [小笃儿](models/supplemental/731-regular.glb)<br><sub>Pikipek</sub> | <img src="docs/previews/731-regular.jpg" width="160" alt="小笃儿模型截图"> |
| #0732 | [喇叭啄鸟](models/supplemental/732-regular.glb)<br><sub>Trumbeak</sub> | <img src="docs/previews/732-regular.jpg" width="160" alt="喇叭啄鸟模型截图"> |
| #0733 | [铳嘴大鸟](models/supplemental/733-regular.glb)<br><sub>Toucannon</sub> | <img src="docs/previews/733-regular.jpg" width="160" alt="铳嘴大鸟模型截图"> |
| #0738 | [锹农炮虫](models/supplemental/738-regular.glb)<br><sub>Vikavolt</sub> | <img src="docs/previews/738-regular.jpg" width="160" alt="锹农炮虫模型截图"> |
| #0741 | [花舞鸟](models/supplemental/741-regular.glb)<br><sub>Oricorio</sub> | <img src="docs/previews/741-regular.jpg" width="160" alt="花舞鸟模型截图"> |
| #0743 | [蝶结萌虻](models/supplemental/743-regular.glb)<br><sub>Ribombee</sub> | <img src="docs/previews/743-regular.jpg" width="160" alt="蝶结萌虻模型截图"> |
| #0774 | [小陨星](models/supplemental/774-regular.glb)<br><sub>Minior</sub> | <img src="docs/previews/774-regular.jpg" width="160" alt="小陨星模型截图"> |
| #0786 | [卡璞・蝶蝶](models/supplemental/786-regular.glb)<br><sub>Tapu Lele</sub> | <img src="docs/previews/786-regular.jpg" width="160" alt="卡璞・蝶蝶模型截图"> |
| #0789 | [科斯莫古](models/supplemental/789-regular.glb)<br><sub>Cosmog</sub> | <img src="docs/previews/789-regular.jpg" width="160" alt="科斯莫古模型截图"> |
| #0790 | [科斯莫姆](models/supplemental/790-regular.glb)<br><sub>Cosmoem</sub> | <img src="docs/previews/790-regular.jpg" width="160" alt="科斯莫姆模型截图"> |
| #0797 | [铁火辉夜](models/supplemental/797-regular.glb)<br><sub>Celesteela</sub> | <img src="docs/previews/797-regular.jpg" width="160" alt="铁火辉夜模型截图"> |
| #0821 | [稚山雀](models/supplemental/821-regular.glb)<br><sub>Rookidee</sub> | <img src="docs/previews/821-regular.jpg" width="160" alt="稚山雀模型截图"> |
| #0822 | [蓝鸦](models/supplemental/822-regular.glb)<br><sub>Corvisquire</sub> | <img src="docs/previews/822-regular.jpg" width="160" alt="蓝鸦模型截图"> |
| #0823 | [钢铠鸦](models/supplemental/823-regular.glb)<br><sub>Corviknight</sub> | <img src="docs/previews/823-regular.jpg" width="160" alt="钢铠鸦模型截图"> |
| #0845 | [古月鸟](models/supplemental/845-regular.glb)<br><sub>Cramorant</sub> | <img src="docs/previews/845-regular.jpg" width="160" alt="古月鸟模型截图"> |
| #0905 | [眷恋云](models/supplemental/905-regular.glb)<br><sub>Enamorus</sub> | <img src="docs/previews/905-regular.jpg" width="160" alt="眷恋云模型截图"> |
| #0941 | [大电海燕](models/supplemental/941-regular.glb)<br><sub>Kilowattrel</sub> | <img src="docs/previews/941-regular.jpg" width="160" alt="大电海燕模型截图"> |
| #0962 | [下石鸟](models/supplemental/962-regular.glb)<br><sub>Bombirdier</sub> | <img src="docs/previews/962-regular.jpg" width="160" alt="下石鸟模型截图"> |
| #0973 | [纏红鹤](models/supplemental/973-regular.glb)<br><sub>Flamigo</sub> | <img src="docs/previews/973-regular.jpg" width="160" alt="纏红鹤模型截图"> |

### 程序化模型（31 项）

以下为原项目的简化模型，截图来自 JavaScript 生成的实际几何。点击名称可查看生成源码。

| 图鉴编号 | 宝可梦名称 | 模型截图 |
| ---: | --- | --- |
| #0036 | [超级皮可西](garden-mega-models.js)<br><sub>Mega Clefable</sub><br><sub>简化模型</sub> | <img src="docs/previews/36-mega-procedural.jpg" width="160" alt="超级皮可西模型截图"> |
| #0149 | [超级快龙](garden-mega-models.js)<br><sub>Mega Dragonite</sub><br><sub>简化模型</sub> | <img src="docs/previews/149-mega-procedural.jpg" width="160" alt="超级快龙模型截图"> |
| #0478 | [超级雪妖女](garden-mega-models.js)<br><sub>Mega Froslass</sub><br><sub>简化模型</sub> | <img src="docs/previews/478-mega-procedural.jpg" width="160" alt="超级雪妖女模型截图"> |
| #0560 | [超级头巾混混](garden-mega-models.js)<br><sub>Mega Scrafty</sub><br><sub>简化模型</sub> | <img src="docs/previews/560-mega-procedural.jpg" width="160" alt="超级头巾混混模型截图"> |
| #0609 | [超级水晶灯火灵](garden-mega-models.js)<br><sub>Mega Chandelure</sub><br><sub>简化模型</sub> | <img src="docs/previews/609-mega-procedural.jpg" width="160" alt="超级水晶灯火灵模型截图"> |
| #0623 | [超级泥偶巨人](garden-mega-models.js)<br><sub>Mega Golurk</sub><br><sub>简化模型</sub> | <img src="docs/previews/623-mega-procedural.jpg" width="160" alt="超级泥偶巨人模型截图"> |
| #0668 | [超级火炎狮](garden-mega-models.js)<br><sub>Mega Pyroar</sub><br><sub>简化模型</sub> | <img src="docs/previews/668-mega-procedural.jpg" width="160" alt="超级火炎狮模型截图"> |
| #0691 | [超级毒藻龙](garden-mega-models.js)<br><sub>Mega Dragalge</sub><br><sub>简化模型</sub> | <img src="docs/previews/691-mega-procedural.jpg" width="160" alt="超级毒藻龙模型截图"> |
| #0701 | [超级摔角鹰人](garden-mega-models.js)<br><sub>Mega Hawlucha</sub><br><sub>简化模型</sub> | <img src="docs/previews/701-mega-procedural.jpg" width="160" alt="超级摔角鹰人模型截图"> |
| #0768 | [超级具甲武者](garden-mega-models.js)<br><sub>Mega Golisopod</sub><br><sub>简化模型</sub> | <img src="docs/previews/768-mega-procedural.jpg" width="160" alt="超级具甲武者模型截图"> |
| #0850 | [烧火蚣](garden-models.js)<br><sub>Sizzlipede</sub><br><sub>简化模型</sub> | <img src="docs/previews/850-procedural.jpg" width="160" alt="烧火蚣模型截图"> |
| #0851 | [焚焰蚣](garden-models.js)<br><sub>Centiskorch</sub><br><sub>简化模型</sub> | <img src="docs/previews/851-procedural.jpg" width="160" alt="焚焰蚣模型截图"> |
| #0861 | [长毛巨魔](garden-models.js)<br><sub>Grimmsnarl</sub><br><sub>简化模型</sub> | <img src="docs/previews/861-procedural.jpg" width="160" alt="长毛巨魔模型截图"> |
| #0868 | [小仙奶](garden-models.js)<br><sub>Milcery</sub><br><sub>简化模型</sub> | <img src="docs/previews/868-procedural.jpg" width="160" alt="小仙奶模型截图"> |
| #0873 | [雪绒蛾](garden-models.js)<br><sub>Frosmoth</sub><br><sub>简化模型</sub> | <img src="docs/previews/873-procedural.jpg" width="160" alt="雪绒蛾模型截图"> |
| #0918 | [操陷蛛](garden-models.js)<br><sub>Spidops</sub><br><sub>简化模型</sub> | <img src="docs/previews/918-procedural.jpg" width="160" alt="操陷蛛模型截图"> |
| #0919 | [豆蟋蟀](garden-models.js)<br><sub>Nymble</sub><br><sub>简化模型</sub> | <img src="docs/previews/919-procedural.jpg" width="160" alt="豆蟋蟀模型截图"> |
| #0935 | [炭小侍](garden-models.js)<br><sub>Charcadet</sub><br><sub>简化模型</sub> | <img src="docs/previews/935-procedural.jpg" width="160" alt="炭小侍模型截图"> |
| #0936 | [红莲铠骑](garden-models.js)<br><sub>Armarouge</sub><br><sub>简化模型</sub> | <img src="docs/previews/936-procedural.jpg" width="160" alt="红莲铠骑模型截图"> |
| #0938 | [光蚪仔](garden-models.js)<br><sub>Tadbulb</sub><br><sub>简化模型</sub> | <img src="docs/previews/938-procedural.jpg" width="160" alt="光蚪仔模型截图"> |
| #0939 | [电肚蛙](garden-models.js)<br><sub>Bellibolt</sub><br><sub>简化模型</sub> | <img src="docs/previews/939-procedural.jpg" width="160" alt="电肚蛙模型截图"> |
| #0940 | [电海燕](garden-models.js)<br><sub>Wattrel</sub><br><sub>简化模型</sub> | <img src="docs/previews/940-procedural.jpg" width="160" alt="电海燕模型截图"> |
| #0944 | [滋汁鼹](garden-models.js)<br><sub>Shroodle</sub><br><sub>简化模型</sub> | <img src="docs/previews/944-procedural.jpg" width="160" alt="滋汁鼹模型截图"> |
| #0963 | [波普海豚](garden-models.js)<br><sub>Finizen</sub><br><sub>简化模型</sub> | <img src="docs/previews/963-procedural.jpg" width="160" alt="波普海豚模型截图"> |
| #0964 | [海豚侠](garden-models.js)<br><sub>Palafin</sub><br><sub>简化模型</sub> | <img src="docs/previews/964-procedural.jpg" width="160" alt="海豚侠模型截图"> |
| #0971 | [墓仔狗](garden-models.js)<br><sub>Greavard</sub><br><sub>简化模型</sub> | <img src="docs/previews/971-procedural.jpg" width="160" alt="墓仔狗模型截图"> |
| #0972 | [墓扬犬](garden-models.js)<br><sub>Houndstone</sub><br><sub>简化模型</sub> | <img src="docs/previews/972-procedural.jpg" width="160" alt="墓扬犬模型截图"> |
| #0978 | [超级米立龙](garden-mega-models.js)<br><sub>Mega Tatsugiri</sub><br><sub>简化模型</sub> | <img src="docs/previews/978-mega-procedural.jpg" width="160" alt="超级米立龙模型截图"> |
| #1012 | [斯魔茶](garden-models.js)<br><sub>Poltchageist</sub><br><sub>简化模型</sub> | <img src="docs/previews/1012-procedural.jpg" width="160" alt="斯魔茶模型截图"> |
| #1013 | [来悲粗茶](garden-models.js)<br><sub>Sinistcha</sub><br><sub>简化模型</sub> | <img src="docs/previews/1013-procedural.jpg" width="160" alt="来悲粗茶模型截图"> |
| #1024 | [太乐巴戈斯](garden-models.js)<br><sub>Terapagos</sub><br><sub>简化模型</sub> | <img src="docs/previews/1024-procedural.jpg" width="160" alt="太乐巴戈斯模型截图"> |

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
