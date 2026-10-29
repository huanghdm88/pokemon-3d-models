# pokemon-3d-models

Pokémon 3D assets collected from the `holo-pack-h5` project, including **243 deduplicated local GLB files** and **JavaScript source for 31 procedural models**. The GLB files total 132,034,068 bytes (about 125.9 MiB), preserving their original contents, embedded textures, rigs, animations, and author credits.

| Location | Contents |
| --- | --- |
| [`assets/garden/models/`](assets/garden/models/) | 37 GLB files currently used in the garden |
| [`models/supplemental/`](models/supplemental/) | 206 additional GLB files retained from the project's wing animation audit, including regular, Mega, regional, and Gigantamax forms |
| [`garden-models.js`](garden-models.js) | Simplified procedural models for 20 species |
| [`garden-mega-models.js`](garden-mega-models.js) | Simplified procedural models for 11 Mega forms, plus the source mapping for the Mega Malamar GLB |
| [`garden-motion.js`](garden-motion.js), [`garden-pose.js`](garden-pose.js), [`garden-wings.js`](garden-wings.js), [`garden-soft-motion.js`](garden-soft-motion.js) | Helpers for model poses, skeletal animation, wings, and flexible parts |
| [`vendor/`](vendor/) | Three.js, loaders, utilities, and the Draco decoder required by these assets |
| [`assets/garden/species.json`](assets/garden/species.json) | The original project's species, form, and upstream asset catalog |
| [`models-manifest.json`](models-manifest.json) | Paths, sizes, SHA-256 hashes, sources, and embedded metadata for every included GLB |
| [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md) | Author credits, sources, and license statements extracted from the models |
| [`SHA256SUMS`](SHA256SUMS) | Integrity checksums for all 243 GLB files |

Duplicate GLB copies from release directories have been removed. `species.json` also contains remote URLs for assets that have not been downloaded; **a catalog entry does not mean that its model is included in this repository**. See `models-manifest.json` for the exact list of local GLB files.

## Pokémon Model Previews

These screenshots show the actual repository models rendered from a consistent viewing angle. Procedural assets are labeled "Simplified model." Click a Pokémon name to open its GLB file or model generation source. Mega, regional, and Gigantamax forms have separate entries. Koffing's `galar` fan art label and Hoopa's upstream `mega` label are retained in their names and file paths for comparison with the original assets.

### GLB Models (243 Entries)

| Pokédex No. | Pokémon Name | Model Preview |
| ---: | --- | --- |
| #0001 | [Bulbasaur](assets/garden/models/1.glb) | <img src="docs/previews/1-regular.jpg" width="160" alt="Bulbasaur model preview"> |
| #0004 | [Charmander](assets/garden/models/4.glb) | <img src="docs/previews/4-regular.jpg" width="160" alt="Charmander model preview"> |
| #0006 | [Charizard](assets/garden/models/6.glb) | <img src="docs/previews/6-regular.jpg" width="160" alt="Charizard model preview"> |
| #0006 | [Mega Charizard X](assets/garden/models/6-mega-x.glb) | <img src="docs/previews/6-mega-x.jpg" width="160" alt="Mega Charizard X model preview"> |
| #0006 | [Mega Charizard Y](assets/garden/models/6-mega-y.glb) | <img src="docs/previews/6-mega-y.jpg" width="160" alt="Mega Charizard Y model preview"> |
| #0006 | [Gigantamax Charizard](models/supplemental/6-gmax.glb) | <img src="docs/previews/6-gmax.jpg" width="160" alt="Gigantamax Charizard model preview"> |
| #0007 | [Squirtle](assets/garden/models/7.glb) | <img src="docs/previews/7-regular.jpg" width="160" alt="Squirtle model preview"> |
| #0012 | [Butterfree](models/supplemental/12-regular.glb) | <img src="docs/previews/12-regular.jpg" width="160" alt="Butterfree model preview"> |
| #0012 | [Gigantamax Butterfree](models/supplemental/12-gmax.glb) | <img src="docs/previews/12-gmax.jpg" width="160" alt="Gigantamax Butterfree model preview"> |
| #0015 | [Beedrill](models/supplemental/15-regular.glb) | <img src="docs/previews/15-regular.jpg" width="160" alt="Beedrill model preview"> |
| #0015 | [Mega Beedrill](models/supplemental/15-mega.glb) | <img src="docs/previews/15-mega.jpg" width="160" alt="Mega Beedrill model preview"> |
| #0016 | [Pidgey](models/supplemental/16-regular.glb) | <img src="docs/previews/16-regular.jpg" width="160" alt="Pidgey model preview"> |
| #0017 | [Pidgeotto](models/supplemental/17-regular.glb) | <img src="docs/previews/17-regular.jpg" width="160" alt="Pidgeotto model preview"> |
| #0018 | [Pidgeot](models/supplemental/18-regular.glb) | <img src="docs/previews/18-regular.jpg" width="160" alt="Pidgeot model preview"> |
| #0018 | [Mega Pidgeot](models/supplemental/18-mega.glb) | <img src="docs/previews/18-mega.jpg" width="160" alt="Mega Pidgeot model preview"> |
| #0021 | [Spearow](models/supplemental/21-regular.glb) | <img src="docs/previews/21-regular.jpg" width="160" alt="Spearow model preview"> |
| #0022 | [Fearow](models/supplemental/22-regular.glb) | <img src="docs/previews/22-regular.jpg" width="160" alt="Fearow model preview"> |
| #0025 | [Pikachu](assets/garden/models/25.glb) | <img src="docs/previews/25-regular.jpg" width="160" alt="Pikachu model preview"> |
| #0041 | [Zubat](models/supplemental/41-regular.glb) | <img src="docs/previews/41-regular.jpg" width="160" alt="Zubat model preview"> |
| #0042 | [Golbat](models/supplemental/42-regular.glb) | <img src="docs/previews/42-regular.jpg" width="160" alt="Golbat model preview"> |
| #0049 | [Venomoth](models/supplemental/49-regular.glb) | <img src="docs/previews/49-regular.jpg" width="160" alt="Venomoth model preview"> |
| #0054 | [Psyduck](assets/garden/models/54.glb) | <img src="docs/previews/54-regular.jpg" width="160" alt="Psyduck model preview"> |
| #0081 | [Magnemite](models/supplemental/81-regular.glb) | <img src="docs/previews/81-regular.jpg" width="160" alt="Magnemite model preview"> |
| #0082 | [Magneton](models/supplemental/82-regular.glb) | <img src="docs/previews/82-regular.jpg" width="160" alt="Magneton model preview"> |
| #0083 | [Farfetch’d](models/supplemental/83-regular.glb) | <img src="docs/previews/83-regular.jpg" width="160" alt="Farfetch’d model preview"> |
| #0084 | [Doduo](models/supplemental/84-regular.glb) | <img src="docs/previews/84-regular.jpg" width="160" alt="Doduo model preview"> |
| #0085 | [Dodrio](models/supplemental/85-regular.glb) | <img src="docs/previews/85-regular.jpg" width="160" alt="Dodrio model preview"> |
| #0092 | [Gastly](models/supplemental/92-regular.glb) | <img src="docs/previews/92-regular.jpg" width="160" alt="Gastly model preview"> |
| #0093 | [Haunter](models/supplemental/93-regular.glb) | <img src="docs/previews/93-regular.jpg" width="160" alt="Haunter model preview"> |
| #0094 | [Gengar](assets/garden/models/94.glb) | <img src="docs/previews/94-regular.jpg" width="160" alt="Gengar model preview"> |
| #0094 | [Mega Gengar](models/supplemental/94-mega.glb) | <img src="docs/previews/94-mega.jpg" width="160" alt="Mega Gengar model preview"> |
| #0109 | [Koffing](models/supplemental/109-regular.glb) | <img src="docs/previews/109-regular.jpg" width="160" alt="Koffing model preview"> |
| #0109 | [Galarian Koffing (fan art)](models/supplemental/109-galar.glb) | <img src="docs/previews/109-galar.jpg" width="160" alt="Galarian Koffing (fan art) model preview"> |
| #0110 | [Weezing](models/supplemental/110-regular.glb) | <img src="docs/previews/110-regular.jpg" width="160" alt="Weezing model preview"> |
| #0123 | [Scyther](models/supplemental/123-regular.glb) | <img src="docs/previews/123-regular.jpg" width="160" alt="Scyther model preview"> |
| #0127 | [Mega Pinsir](models/supplemental/127-mega.glb) | <img src="docs/previews/127-mega.jpg" width="160" alt="Mega Pinsir model preview"> |
| #0129 | [Magikarp](assets/garden/models/129.glb) | <img src="docs/previews/129-regular.jpg" width="160" alt="Magikarp model preview"> |
| #0130 | [Gyarados](assets/garden/models/130.glb) | <img src="docs/previews/130-regular.jpg" width="160" alt="Gyarados model preview"> |
| #0130 | [Mega Gyarados](assets/garden/models/130-mega.glb) | <img src="docs/previews/130-mega.jpg" width="160" alt="Mega Gyarados model preview"> |
| #0133 | [Eevee](assets/garden/models/133.glb) | <img src="docs/previews/133-regular.jpg" width="160" alt="Eevee model preview"> |
| #0137 | [Porygon](models/supplemental/137-regular.glb) | <img src="docs/previews/137-regular.jpg" width="160" alt="Porygon model preview"> |
| #0142 | [Aerodactyl](models/supplemental/142-regular.glb) | <img src="docs/previews/142-regular.jpg" width="160" alt="Aerodactyl model preview"> |
| #0142 | [Mega Aerodactyl](models/supplemental/142-mega.glb) | <img src="docs/previews/142-mega.jpg" width="160" alt="Mega Aerodactyl model preview"> |
| #0144 | [Articuno](assets/garden/models/144.glb) | <img src="docs/previews/144-regular.jpg" width="160" alt="Articuno model preview"> |
| #0144 | [Galarian Articuno](models/supplemental/144-galar.glb) | <img src="docs/previews/144-galar.jpg" width="160" alt="Galarian Articuno model preview"> |
| #0145 | [Zapdos](models/supplemental/145-regular.glb) | <img src="docs/previews/145-regular.jpg" width="160" alt="Zapdos model preview"> |
| #0145 | [Galarian Zapdos](models/supplemental/145-galar.glb) | <img src="docs/previews/145-galar.jpg" width="160" alt="Galarian Zapdos model preview"> |
| #0146 | [Moltres](models/supplemental/146-regular.glb) | <img src="docs/previews/146-regular.jpg" width="160" alt="Moltres model preview"> |
| #0146 | [Galarian Moltres](models/supplemental/146-galar.glb) | <img src="docs/previews/146-galar.jpg" width="160" alt="Galarian Moltres model preview"> |
| #0149 | [Dragonite](models/supplemental/149-regular.glb) | <img src="docs/previews/149-regular.jpg" width="160" alt="Dragonite model preview"> |
| #0150 | [Mewtwo](models/supplemental/150-regular.glb) | <img src="docs/previews/150-regular.jpg" width="160" alt="Mewtwo model preview"> |
| #0150 | [Mega Mewtwo X](models/supplemental/150-mega-x.glb) | <img src="docs/previews/150-mega-x.jpg" width="160" alt="Mega Mewtwo X model preview"> |
| #0150 | [Mega Mewtwo Y](models/supplemental/150-mega-y.glb) | <img src="docs/previews/150-mega-y.jpg" width="160" alt="Mega Mewtwo Y model preview"> |
| #0151 | [Mew](assets/garden/models/151.glb) | <img src="docs/previews/151-regular.jpg" width="160" alt="Mew model preview"> |
| #0152 | [Chikorita](assets/garden/models/152.glb) | <img src="docs/previews/152-regular.jpg" width="160" alt="Chikorita model preview"> |
| #0155 | [Cyndaquil](assets/garden/models/155.glb) | <img src="docs/previews/155-regular.jpg" width="160" alt="Cyndaquil model preview"> |
| #0158 | [Totodile](assets/garden/models/158.glb) | <img src="docs/previews/158-regular.jpg" width="160" alt="Totodile model preview"> |
| #0163 | [Hoothoot](models/supplemental/163-regular.glb) | <img src="docs/previews/163-regular.jpg" width="160" alt="Hoothoot model preview"> |
| #0164 | [Noctowl](models/supplemental/164-regular.glb) | <img src="docs/previews/164-regular.jpg" width="160" alt="Noctowl model preview"> |
| #0165 | [Ledyba](models/supplemental/165-regular.glb) | <img src="docs/previews/165-regular.jpg" width="160" alt="Ledyba model preview"> |
| #0166 | [Ledian](models/supplemental/166-regular.glb) | <img src="docs/previews/166-regular.jpg" width="160" alt="Ledian model preview"> |
| #0169 | [Crobat](models/supplemental/169-regular.glb) | <img src="docs/previews/169-regular.jpg" width="160" alt="Crobat model preview"> |
| #0176 | [Togetic](models/supplemental/176-regular.glb) | <img src="docs/previews/176-regular.jpg" width="160" alt="Togetic model preview"> |
| #0177 | [Natu](models/supplemental/177-regular.glb) | <img src="docs/previews/177-regular.jpg" width="160" alt="Natu model preview"> |
| #0178 | [Xatu](models/supplemental/178-regular.glb) | <img src="docs/previews/178-regular.jpg" width="160" alt="Xatu model preview"> |
| #0183 | [Marill](assets/garden/models/183.glb) | <img src="docs/previews/183-regular.jpg" width="160" alt="Marill model preview"> |
| #0184 | [Azumarill](assets/garden/models/184.glb) | <img src="docs/previews/184-regular.jpg" width="160" alt="Azumarill model preview"> |
| #0187 | [Hoppip](models/supplemental/187-regular.glb) | <img src="docs/previews/187-regular.jpg" width="160" alt="Hoppip model preview"> |
| #0188 | [Skiploom](models/supplemental/188-regular.glb) | <img src="docs/previews/188-regular.jpg" width="160" alt="Skiploom model preview"> |
| #0189 | [Jumpluff](models/supplemental/189-regular.glb) | <img src="docs/previews/189-regular.jpg" width="160" alt="Jumpluff model preview"> |
| #0193 | [Yanma](models/supplemental/193-regular.glb) | <img src="docs/previews/193-regular.jpg" width="160" alt="Yanma model preview"> |
| #0198 | [Murkrow](models/supplemental/198-regular.glb) | <img src="docs/previews/198-regular.jpg" width="160" alt="Murkrow model preview"> |
| #0200 | [Misdreavus](models/supplemental/200-regular.glb) | <img src="docs/previews/200-regular.jpg" width="160" alt="Misdreavus model preview"> |
| #0201 | [Unown](models/supplemental/201-regular.glb) | <img src="docs/previews/201-regular.jpg" width="160" alt="Unown model preview"> |
| #0207 | [Gligar](models/supplemental/207-regular.glb) | <img src="docs/previews/207-regular.jpg" width="160" alt="Gligar model preview"> |
| #0212 | [Scizor](models/supplemental/212-regular.glb) | <img src="docs/previews/212-regular.jpg" width="160" alt="Scizor model preview"> |
| #0212 | [Mega Scizor](models/supplemental/212-mega.glb) | <img src="docs/previews/212-mega.jpg" width="160" alt="Mega Scizor model preview"> |
| #0225 | [Delibird](models/supplemental/225-regular.glb) | <img src="docs/previews/225-regular.jpg" width="160" alt="Delibird model preview"> |
| #0227 | [Skarmory](models/supplemental/227-regular.glb) | <img src="docs/previews/227-regular.jpg" width="160" alt="Skarmory model preview"> |
| #0227 | [Mega Skarmory](models/supplemental/227-mega.glb) | <img src="docs/previews/227-mega.jpg" width="160" alt="Mega Skarmory model preview"> |
| #0233 | [Porygon2](models/supplemental/233-regular.glb) | <img src="docs/previews/233-regular.jpg" width="160" alt="Porygon2 model preview"> |
| #0249 | [Lugia](assets/garden/models/249.glb) | <img src="docs/previews/249-regular.jpg" width="160" alt="Lugia model preview"> |
| #0250 | [Ho-Oh](models/supplemental/250-regular.glb) | <img src="docs/previews/250-regular.jpg" width="160" alt="Ho-Oh model preview"> |
| #0251 | [Celebi](models/supplemental/251-regular.glb) | <img src="docs/previews/251-regular.jpg" width="160" alt="Celebi model preview"> |
| #0252 | [Treecko](assets/garden/models/252.glb) | <img src="docs/previews/252-regular.jpg" width="160" alt="Treecko model preview"> |
| #0255 | [Torchic](assets/garden/models/255.glb) | <img src="docs/previews/255-regular.jpg" width="160" alt="Torchic model preview"> |
| #0258 | [Mudkip](assets/garden/models/258.glb) | <img src="docs/previews/258-regular.jpg" width="160" alt="Mudkip model preview"> |
| #0267 | [Beautifly](models/supplemental/267-regular.glb) | <img src="docs/previews/267-regular.jpg" width="160" alt="Beautifly model preview"> |
| #0268 | [Cascoon](models/supplemental/268-regular.glb) | <img src="docs/previews/268-regular.jpg" width="160" alt="Cascoon model preview"> |
| #0269 | [Dustox](models/supplemental/269-regular.glb) | <img src="docs/previews/269-regular.jpg" width="160" alt="Dustox model preview"> |
| #0276 | [Taillow](models/supplemental/276-regular.glb) | <img src="docs/previews/276-regular.jpg" width="160" alt="Taillow model preview"> |
| #0277 | [Swellow](models/supplemental/277-regular.glb) | <img src="docs/previews/277-regular.jpg" width="160" alt="Swellow model preview"> |
| #0278 | [Wingull](models/supplemental/278-regular.glb) | <img src="docs/previews/278-regular.jpg" width="160" alt="Wingull model preview"> |
| #0279 | [Pelipper](models/supplemental/279-regular.glb) | <img src="docs/previews/279-regular.jpg" width="160" alt="Pelipper model preview"> |
| #0280 | [Ralts](assets/garden/models/280.glb) | <img src="docs/previews/280-regular.jpg" width="160" alt="Ralts model preview"> |
| #0284 | [Masquerain](models/supplemental/284-regular.glb) | <img src="docs/previews/284-regular.jpg" width="160" alt="Masquerain model preview"> |
| #0291 | [Ninjask](models/supplemental/291-regular.glb) | <img src="docs/previews/291-regular.jpg" width="160" alt="Ninjask model preview"> |
| #0292 | [Shedinja](models/supplemental/292-regular.glb) | <img src="docs/previews/292-regular.jpg" width="160" alt="Shedinja model preview"> |
| #0313 | [Volbeat](models/supplemental/313-regular.glb) | <img src="docs/previews/313-regular.jpg" width="160" alt="Volbeat model preview"> |
| #0314 | [Illumise](models/supplemental/314-regular.glb) | <img src="docs/previews/314-regular.jpg" width="160" alt="Illumise model preview"> |
| #0329 | [Vibrava](models/supplemental/329-regular.glb) | <img src="docs/previews/329-regular.jpg" width="160" alt="Vibrava model preview"> |
| #0330 | [Flygon](models/supplemental/330-regular.glb) | <img src="docs/previews/330-regular.jpg" width="160" alt="Flygon model preview"> |
| #0333 | [Swablu](models/supplemental/333-regular.glb) | <img src="docs/previews/333-regular.jpg" width="160" alt="Swablu model preview"> |
| #0334 | [Altaria](models/supplemental/334-regular.glb) | <img src="docs/previews/334-regular.jpg" width="160" alt="Altaria model preview"> |
| #0337 | [Lunatone](models/supplemental/337-regular.glb) | <img src="docs/previews/337-regular.jpg" width="160" alt="Lunatone model preview"> |
| #0338 | [Solrock](models/supplemental/338-regular.glb) | <img src="docs/previews/338-regular.jpg" width="160" alt="Solrock model preview"> |
| #0343 | [Baltoy](models/supplemental/343-regular.glb) | <img src="docs/previews/343-regular.jpg" width="160" alt="Baltoy model preview"> |
| #0344 | [Claydol](models/supplemental/344-regular.glb) | <img src="docs/previews/344-regular.jpg" width="160" alt="Claydol model preview"> |
| #0355 | [Duskull](models/supplemental/355-regular.glb) | <img src="docs/previews/355-regular.jpg" width="160" alt="Duskull model preview"> |
| #0356 | [Dusclops](models/supplemental/356-regular.glb) | <img src="docs/previews/356-regular.jpg" width="160" alt="Dusclops model preview"> |
| #0357 | [Tropius](models/supplemental/357-regular.glb) | <img src="docs/previews/357-regular.jpg" width="160" alt="Tropius model preview"> |
| #0358 | [Chimecho](models/supplemental/358-regular.glb) | <img src="docs/previews/358-regular.jpg" width="160" alt="Chimecho model preview"> |
| #0373 | [Salamence](models/supplemental/373-regular.glb) | <img src="docs/previews/373-regular.jpg" width="160" alt="Salamence model preview"> |
| #0373 | [Mega Salamence](models/supplemental/373-mega.glb) | <img src="docs/previews/373-mega.jpg" width="160" alt="Mega Salamence model preview"> |
| #0374 | [Beldum](models/supplemental/374-regular.glb) | <img src="docs/previews/374-regular.jpg" width="160" alt="Beldum model preview"> |
| #0375 | [Metang](models/supplemental/375-regular.glb) | <img src="docs/previews/375-regular.jpg" width="160" alt="Metang model preview"> |
| #0376 | [Metagross](models/supplemental/376-regular.glb) | <img src="docs/previews/376-regular.jpg" width="160" alt="Metagross model preview"> |
| #0376 | [Mega Metagross](models/supplemental/376-mega.glb) | <img src="docs/previews/376-mega.jpg" width="160" alt="Mega Metagross model preview"> |
| #0380 | [Latias](models/supplemental/380-regular.glb) | <img src="docs/previews/380-regular.jpg" width="160" alt="Latias model preview"> |
| #0380 | [Mega Latias](models/supplemental/380-mega.glb) | <img src="docs/previews/380-mega.jpg" width="160" alt="Mega Latias model preview"> |
| #0381 | [Latios](models/supplemental/381-regular.glb) | <img src="docs/previews/381-regular.jpg" width="160" alt="Latios model preview"> |
| #0381 | [Mega Latios](models/supplemental/381-mega.glb) | <img src="docs/previews/381-mega.jpg" width="160" alt="Mega Latios model preview"> |
| #0383 | [Groudon](assets/garden/models/383.glb) | <img src="docs/previews/383-regular.jpg" width="160" alt="Groudon model preview"> |
| #0384 | [Rayquaza](assets/garden/models/384.glb) | <img src="docs/previews/384-regular.jpg" width="160" alt="Rayquaza model preview"> |
| #0384 | [Mega Rayquaza](assets/garden/models/384-mega.glb) | <img src="docs/previews/384-mega.jpg" width="160" alt="Mega Rayquaza model preview"> |
| #0385 | [Jirachi](models/supplemental/385-regular.glb) | <img src="docs/previews/385-regular.jpg" width="160" alt="Jirachi model preview"> |
| #0386 | [Deoxys](models/supplemental/386-regular.glb) | <img src="docs/previews/386-regular.jpg" width="160" alt="Deoxys model preview"> |
| #0396 | [Starly](models/supplemental/396-regular.glb) | <img src="docs/previews/396-regular.jpg" width="160" alt="Starly model preview"> |
| #0397 | [Staravia](models/supplemental/397-regular.glb) | <img src="docs/previews/397-regular.jpg" width="160" alt="Staravia model preview"> |
| #0398 | [Staraptor](models/supplemental/398-regular.glb) | <img src="docs/previews/398-regular.jpg" width="160" alt="Staraptor model preview"> |
| #0414 | [Mothim](models/supplemental/414-regular.glb) | <img src="docs/previews/414-regular.jpg" width="160" alt="Mothim model preview"> |
| #0415 | [Combee](models/supplemental/415-regular.glb) | <img src="docs/previews/415-regular.jpg" width="160" alt="Combee model preview"> |
| #0416 | [Vespiquen](models/supplemental/416-regular.glb) | <img src="docs/previews/416-regular.jpg" width="160" alt="Vespiquen model preview"> |
| #0425 | [Drifloon](models/supplemental/425-regular.glb) | <img src="docs/previews/425-regular.jpg" width="160" alt="Drifloon model preview"> |
| #0426 | [Drifblim](models/supplemental/426-regular.glb) | <img src="docs/previews/426-regular.jpg" width="160" alt="Drifblim model preview"> |
| #0429 | [Mismagius](models/supplemental/429-regular.glb) | <img src="docs/previews/429-regular.jpg" width="160" alt="Mismagius model preview"> |
| #0430 | [Honchkrow](models/supplemental/430-regular.glb) | <img src="docs/previews/430-regular.jpg" width="160" alt="Honchkrow model preview"> |
| #0433 | [Chingling](models/supplemental/433-regular.glb) | <img src="docs/previews/433-regular.jpg" width="160" alt="Chingling model preview"> |
| #0436 | [Bronzor](models/supplemental/436-regular.glb) | <img src="docs/previews/436-regular.jpg" width="160" alt="Bronzor model preview"> |
| #0437 | [Bronzong](models/supplemental/437-regular.glb) | <img src="docs/previews/437-regular.jpg" width="160" alt="Bronzong model preview"> |
| #0441 | [Chatot](models/supplemental/441-regular.glb) | <img src="docs/previews/441-regular.jpg" width="160" alt="Chatot model preview"> |
| #0447 | [Riolu](assets/garden/models/447.glb) | <img src="docs/previews/447-regular.jpg" width="160" alt="Riolu model preview"> |
| #0448 | [Lucario](assets/garden/models/448.glb) | <img src="docs/previews/448-regular.jpg" width="160" alt="Lucario model preview"> |
| #0455 | [Carnivine](models/supplemental/455-regular.glb) | <img src="docs/previews/455-regular.jpg" width="160" alt="Carnivine model preview"> |
| #0462 | [Magnezone](models/supplemental/462-regular.glb) | <img src="docs/previews/462-regular.jpg" width="160" alt="Magnezone model preview"> |
| #0468 | [Togekiss](models/supplemental/468-regular.glb) | <img src="docs/previews/468-regular.jpg" width="160" alt="Togekiss model preview"> |
| #0469 | [Yanmega](models/supplemental/469-regular.glb) | <img src="docs/previews/469-regular.jpg" width="160" alt="Yanmega model preview"> |
| #0472 | [Gliscor](models/supplemental/472-regular.glb) | <img src="docs/previews/472-regular.jpg" width="160" alt="Gliscor model preview"> |
| #0474 | [Porygon-Z](models/supplemental/474-regular.glb) | <img src="docs/previews/474-regular.jpg" width="160" alt="Porygon-Z model preview"> |
| #0477 | [Dusknoir](models/supplemental/477-regular.glb) | <img src="docs/previews/477-regular.jpg" width="160" alt="Dusknoir model preview"> |
| #0478 | [Froslass](models/supplemental/478-regular.glb) | <img src="docs/previews/478-regular.jpg" width="160" alt="Froslass model preview"> |
| #0479 | [Rotom](models/supplemental/479-regular.glb) | <img src="docs/previews/479-regular.jpg" width="160" alt="Rotom model preview"> |
| #0480 | [Uxie](models/supplemental/480-regular.glb) | <img src="docs/previews/480-regular.jpg" width="160" alt="Uxie model preview"> |
| #0481 | [Mesprit](models/supplemental/481-regular.glb) | <img src="docs/previews/481-regular.jpg" width="160" alt="Mesprit model preview"> |
| #0482 | [Azelf](models/supplemental/482-regular.glb) | <img src="docs/previews/482-regular.jpg" width="160" alt="Azelf model preview"> |
| #0487 | [Giratina](models/supplemental/487-regular.glb) | <img src="docs/previews/487-regular.jpg" width="160" alt="Giratina model preview"> |
| #0488 | [Cresselia](models/supplemental/488-regular.glb) | <img src="docs/previews/488-regular.jpg" width="160" alt="Cresselia model preview"> |
| #0491 | [Darkrai](models/supplemental/491-regular.glb) | <img src="docs/previews/491-regular.jpg" width="160" alt="Darkrai model preview"> |
| #0491 | [Mega Darkrai](models/supplemental/491-mega.glb) | <img src="docs/previews/491-mega.jpg" width="160" alt="Mega Darkrai model preview"> |
| #0493 | [Arceus](models/supplemental/493-regular.glb) | <img src="docs/previews/493-regular.jpg" width="160" alt="Arceus model preview"> |
| #0494 | [Victini](models/supplemental/494-regular.glb) | <img src="docs/previews/494-regular.jpg" width="160" alt="Victini model preview"> |
| #0519 | [Pidove](models/supplemental/519-regular.glb) | <img src="docs/previews/519-regular.jpg" width="160" alt="Pidove model preview"> |
| #0520 | [Tranquill](models/supplemental/520-regular.glb) | <img src="docs/previews/520-regular.jpg" width="160" alt="Tranquill model preview"> |
| #0521 | [Unfezant](models/supplemental/521-regular.glb) | <img src="docs/previews/521-regular.jpg" width="160" alt="Unfezant model preview"> |
| #0527 | [Woobat](models/supplemental/527-regular.glb) | <img src="docs/previews/527-regular.jpg" width="160" alt="Woobat model preview"> |
| #0528 | [Swoobat](models/supplemental/528-regular.glb) | <img src="docs/previews/528-regular.jpg" width="160" alt="Swoobat model preview"> |
| #0561 | [Sigilyph](models/supplemental/561-regular.glb) | <img src="docs/previews/561-regular.jpg" width="160" alt="Sigilyph model preview"> |
| #0562 | [Yamask](models/supplemental/562-regular.glb) | <img src="docs/previews/562-regular.jpg" width="160" alt="Yamask model preview"> |
| #0563 | [Cofagrigus](models/supplemental/563-regular.glb) | <img src="docs/previews/563-regular.jpg" width="160" alt="Cofagrigus model preview"> |
| #0566 | [Archen](models/supplemental/566-regular.glb) | <img src="docs/previews/566-regular.jpg" width="160" alt="Archen model preview"> |
| #0567 | [Archeops](models/supplemental/567-regular.glb) | <img src="docs/previews/567-regular.jpg" width="160" alt="Archeops model preview"> |
| #0571 | [Zoroark](assets/garden/models/571.glb) | <img src="docs/previews/571-regular.jpg" width="160" alt="Zoroark model preview"> |
| #0577 | [Solosis](models/supplemental/577-regular.glb) | <img src="docs/previews/577-regular.jpg" width="160" alt="Solosis model preview"> |
| #0578 | [Duosion](models/supplemental/578-regular.glb) | <img src="docs/previews/578-regular.jpg" width="160" alt="Duosion model preview"> |
| #0579 | [Reuniclus](models/supplemental/579-regular.glb) | <img src="docs/previews/579-regular.jpg" width="160" alt="Reuniclus model preview"> |
| #0580 | [Ducklett](models/supplemental/580-regular.glb) | <img src="docs/previews/580-regular.jpg" width="160" alt="Ducklett model preview"> |
| #0581 | [Swanna](models/supplemental/581-regular.glb) | <img src="docs/previews/581-regular.jpg" width="160" alt="Swanna model preview"> |
| #0587 | [Emolga](models/supplemental/587-regular.glb) | <img src="docs/previews/587-regular.jpg" width="160" alt="Emolga model preview"> |
| #0599 | [Klink](models/supplemental/599-regular.glb) | <img src="docs/previews/599-regular.jpg" width="160" alt="Klink model preview"> |
| #0600 | [Klang](models/supplemental/600-regular.glb) | <img src="docs/previews/600-regular.jpg" width="160" alt="Klang model preview"> |
| #0601 | [Klinklang](models/supplemental/601-regular.glb) | <img src="docs/previews/601-regular.jpg" width="160" alt="Klinklang model preview"> |
| #0602 | [Tynamo](models/supplemental/602-regular.glb) | <img src="docs/previews/602-regular.jpg" width="160" alt="Tynamo model preview"> |
| #0603 | [Eelektrik](models/supplemental/603-regular.glb) | <img src="docs/previews/603-regular.jpg" width="160" alt="Eelektrik model preview"> |
| #0604 | [Eelektross](models/supplemental/604-regular.glb) | <img src="docs/previews/604-regular.jpg" width="160" alt="Eelektross model preview"> |
| #0605 | [Elgyem](models/supplemental/605-regular.glb) | <img src="docs/previews/605-regular.jpg" width="160" alt="Elgyem model preview"> |
| #0606 | [Beheeyem](models/supplemental/606-regular.glb) | <img src="docs/previews/606-regular.jpg" width="160" alt="Beheeyem model preview"> |
| #0607 | [Litwick](models/supplemental/607-regular.glb) | <img src="docs/previews/607-regular.jpg" width="160" alt="Litwick model preview"> |
| #0608 | [Lampent](models/supplemental/608-regular.glb) | <img src="docs/previews/608-regular.jpg" width="160" alt="Lampent model preview"> |
| #0609 | [Chandelure](models/supplemental/609-regular.glb) | <img src="docs/previews/609-regular.jpg" width="160" alt="Chandelure model preview"> |
| #0615 | [Cryogonal](models/supplemental/615-regular.glb) | <img src="docs/previews/615-regular.jpg" width="160" alt="Cryogonal model preview"> |
| #0623 | [Golurk](models/supplemental/623-regular.glb) | <img src="docs/previews/623-regular.jpg" width="160" alt="Golurk model preview"> |
| #0627 | [Rufflet](models/supplemental/627-regular.glb) | <img src="docs/previews/627-regular.jpg" width="160" alt="Rufflet model preview"> |
| #0628 | [Braviary](models/supplemental/628-regular.glb) | <img src="docs/previews/628-regular.jpg" width="160" alt="Braviary model preview"> |
| #0628 | [Hisuian Braviary](models/supplemental/628-hisui.glb) | <img src="docs/previews/628-hisui.jpg" width="160" alt="Hisuian Braviary model preview"> |
| #0629 | [Vullaby](models/supplemental/629-regular.glb) | <img src="docs/previews/629-regular.jpg" width="160" alt="Vullaby model preview"> |
| #0630 | [Mandibuzz](models/supplemental/630-regular.glb) | <img src="docs/previews/630-regular.jpg" width="160" alt="Mandibuzz model preview"> |
| #0635 | [Hydreigon](models/supplemental/635-regular.glb) | <img src="docs/previews/635-regular.jpg" width="160" alt="Hydreigon model preview"> |
| #0637 | [Volcarona](models/supplemental/637-regular.glb) | <img src="docs/previews/637-regular.jpg" width="160" alt="Volcarona model preview"> |
| #0641 | [Tornadus](models/supplemental/641-regular.glb) | <img src="docs/previews/641-regular.jpg" width="160" alt="Tornadus model preview"> |
| #0642 | [Thundurus](models/supplemental/642-regular.glb) | <img src="docs/previews/642-regular.jpg" width="160" alt="Thundurus model preview"> |
| #0645 | [Landorus](models/supplemental/645-regular.glb) | <img src="docs/previews/645-regular.jpg" width="160" alt="Landorus model preview"> |
| #0655 | [Mega Delphox](models/supplemental/655-mega.glb) | <img src="docs/previews/655-mega.jpg" width="160" alt="Mega Delphox model preview"> |
| #0658 | [Greninja](assets/garden/models/658.glb) | <img src="docs/previews/658-regular.jpg" width="160" alt="Greninja model preview"> |
| #0658 | [Mega Greninja](assets/garden/models/658-mega.glb) | <img src="docs/previews/658-mega.jpg" width="160" alt="Mega Greninja model preview"> |
| #0661 | [Fletchling](models/supplemental/661-regular.glb) | <img src="docs/previews/661-regular.jpg" width="160" alt="Fletchling model preview"> |
| #0662 | [Fletchinder](models/supplemental/662-regular.glb) | <img src="docs/previews/662-regular.jpg" width="160" alt="Fletchinder model preview"> |
| #0663 | [Talonflame](models/supplemental/663-regular.glb) | <img src="docs/previews/663-regular.jpg" width="160" alt="Talonflame model preview"> |
| #0666 | [Vivillon](models/supplemental/666-regular.glb) | <img src="docs/previews/666-regular.jpg" width="160" alt="Vivillon model preview"> |
| #0679 | [Honedge](models/supplemental/679-regular.glb) | <img src="docs/previews/679-regular.jpg" width="160" alt="Honedge model preview"> |
| #0680 | [Doublade](models/supplemental/680-regular.glb) | <img src="docs/previews/680-regular.jpg" width="160" alt="Doublade model preview"> |
| #0681 | [Aegislash](models/supplemental/681-regular.glb) | <img src="docs/previews/681-regular.jpg" width="160" alt="Aegislash model preview"> |
| #0687 | [Mega Malamar](assets/garden/models/687-mega.glb) | <img src="docs/previews/687-mega.jpg" width="160" alt="Mega Malamar model preview"> |
| #0700 | [Sylveon](assets/garden/models/700.glb) | <img src="docs/previews/700-regular.jpg" width="160" alt="Sylveon model preview"> |
| #0701 | [Hawlucha](models/supplemental/701-regular.glb) | <img src="docs/previews/701-regular.jpg" width="160" alt="Hawlucha model preview"> |
| #0707 | [Klefki](models/supplemental/707-regular.glb) | <img src="docs/previews/707-regular.jpg" width="160" alt="Klefki model preview"> |
| #0714 | [Noibat](models/supplemental/714-regular.glb) | <img src="docs/previews/714-regular.jpg" width="160" alt="Noibat model preview"> |
| #0715 | [Noivern](models/supplemental/715-regular.glb) | <img src="docs/previews/715-regular.jpg" width="160" alt="Noivern model preview"> |
| #0717 | [Yveltal](models/supplemental/717-regular.glb) | <img src="docs/previews/717-regular.jpg" width="160" alt="Yveltal model preview"> |
| #0718 | [Zygarde](assets/garden/models/718.glb) | <img src="docs/previews/718-regular.jpg" width="160" alt="Zygarde model preview"> |
| #0718 | [Mega Zygarde](assets/garden/models/718-mega.glb) | <img src="docs/previews/718-mega.jpg" width="160" alt="Mega Zygarde model preview"> |
| #0720 | [Hoopa](models/supplemental/720-regular.glb) | <img src="docs/previews/720-regular.jpg" width="160" alt="Hoopa model preview"> |
| #0720 | [Hoopa (upstream: mega)](models/supplemental/720-mega.glb) | <img src="docs/previews/720-mega.jpg" width="160" alt="Hoopa (upstream: mega) model preview"> |
| #0722 | [Rowlet](models/supplemental/722-regular.glb) | <img src="docs/previews/722-regular.jpg" width="160" alt="Rowlet model preview"> |
| #0723 | [Dartrix](models/supplemental/723-regular.glb) | <img src="docs/previews/723-regular.jpg" width="160" alt="Dartrix model preview"> |
| #0731 | [Pikipek](models/supplemental/731-regular.glb) | <img src="docs/previews/731-regular.jpg" width="160" alt="Pikipek model preview"> |
| #0732 | [Trumbeak](models/supplemental/732-regular.glb) | <img src="docs/previews/732-regular.jpg" width="160" alt="Trumbeak model preview"> |
| #0733 | [Toucannon](models/supplemental/733-regular.glb) | <img src="docs/previews/733-regular.jpg" width="160" alt="Toucannon model preview"> |
| #0738 | [Vikavolt](models/supplemental/738-regular.glb) | <img src="docs/previews/738-regular.jpg" width="160" alt="Vikavolt model preview"> |
| #0741 | [Oricorio](models/supplemental/741-regular.glb) | <img src="docs/previews/741-regular.jpg" width="160" alt="Oricorio model preview"> |
| #0743 | [Ribombee](models/supplemental/743-regular.glb) | <img src="docs/previews/743-regular.jpg" width="160" alt="Ribombee model preview"> |
| #0774 | [Minior](models/supplemental/774-regular.glb) | <img src="docs/previews/774-regular.jpg" width="160" alt="Minior model preview"> |
| #0786 | [Tapu Lele](models/supplemental/786-regular.glb) | <img src="docs/previews/786-regular.jpg" width="160" alt="Tapu Lele model preview"> |
| #0789 | [Cosmog](models/supplemental/789-regular.glb) | <img src="docs/previews/789-regular.jpg" width="160" alt="Cosmog model preview"> |
| #0790 | [Cosmoem](models/supplemental/790-regular.glb) | <img src="docs/previews/790-regular.jpg" width="160" alt="Cosmoem model preview"> |
| #0797 | [Celesteela](models/supplemental/797-regular.glb) | <img src="docs/previews/797-regular.jpg" width="160" alt="Celesteela model preview"> |
| #0821 | [Rookidee](models/supplemental/821-regular.glb) | <img src="docs/previews/821-regular.jpg" width="160" alt="Rookidee model preview"> |
| #0822 | [Corvisquire](models/supplemental/822-regular.glb) | <img src="docs/previews/822-regular.jpg" width="160" alt="Corvisquire model preview"> |
| #0823 | [Corviknight](models/supplemental/823-regular.glb) | <img src="docs/previews/823-regular.jpg" width="160" alt="Corviknight model preview"> |
| #0845 | [Cramorant](models/supplemental/845-regular.glb) | <img src="docs/previews/845-regular.jpg" width="160" alt="Cramorant model preview"> |
| #0905 | [Enamorus](models/supplemental/905-regular.glb) | <img src="docs/previews/905-regular.jpg" width="160" alt="Enamorus model preview"> |
| #0941 | [Kilowattrel](models/supplemental/941-regular.glb) | <img src="docs/previews/941-regular.jpg" width="160" alt="Kilowattrel model preview"> |
| #0962 | [Bombirdier](models/supplemental/962-regular.glb) | <img src="docs/previews/962-regular.jpg" width="160" alt="Bombirdier model preview"> |
| #0973 | [Flamigo](models/supplemental/973-regular.glb) | <img src="docs/previews/973-regular.jpg" width="160" alt="Flamigo model preview"> |

### Procedural Models (31 Entries)

These simplified models come from the original project. Their screenshots show the geometry generated by JavaScript. Click a name to view the generation source.

| Pokédex No. | Pokémon Name | Model Preview |
| ---: | --- | --- |
| #0036 | [Mega Clefable](garden-mega-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/36-mega-procedural.jpg" width="160" alt="Mega Clefable model preview"> |
| #0149 | [Mega Dragonite](garden-mega-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/149-mega-procedural.jpg" width="160" alt="Mega Dragonite model preview"> |
| #0478 | [Mega Froslass](garden-mega-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/478-mega-procedural.jpg" width="160" alt="Mega Froslass model preview"> |
| #0560 | [Mega Scrafty](garden-mega-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/560-mega-procedural.jpg" width="160" alt="Mega Scrafty model preview"> |
| #0609 | [Mega Chandelure](garden-mega-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/609-mega-procedural.jpg" width="160" alt="Mega Chandelure model preview"> |
| #0623 | [Mega Golurk](garden-mega-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/623-mega-procedural.jpg" width="160" alt="Mega Golurk model preview"> |
| #0668 | [Mega Pyroar](garden-mega-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/668-mega-procedural.jpg" width="160" alt="Mega Pyroar model preview"> |
| #0691 | [Mega Dragalge](garden-mega-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/691-mega-procedural.jpg" width="160" alt="Mega Dragalge model preview"> |
| #0701 | [Mega Hawlucha](garden-mega-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/701-mega-procedural.jpg" width="160" alt="Mega Hawlucha model preview"> |
| #0768 | [Mega Golisopod](garden-mega-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/768-mega-procedural.jpg" width="160" alt="Mega Golisopod model preview"> |
| #0850 | [Sizzlipede](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/850-procedural.jpg" width="160" alt="Sizzlipede model preview"> |
| #0851 | [Centiskorch](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/851-procedural.jpg" width="160" alt="Centiskorch model preview"> |
| #0861 | [Grimmsnarl](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/861-procedural.jpg" width="160" alt="Grimmsnarl model preview"> |
| #0868 | [Milcery](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/868-procedural.jpg" width="160" alt="Milcery model preview"> |
| #0873 | [Frosmoth](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/873-procedural.jpg" width="160" alt="Frosmoth model preview"> |
| #0918 | [Spidops](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/918-procedural.jpg" width="160" alt="Spidops model preview"> |
| #0919 | [Nymble](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/919-procedural.jpg" width="160" alt="Nymble model preview"> |
| #0935 | [Charcadet](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/935-procedural.jpg" width="160" alt="Charcadet model preview"> |
| #0936 | [Armarouge](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/936-procedural.jpg" width="160" alt="Armarouge model preview"> |
| #0938 | [Tadbulb](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/938-procedural.jpg" width="160" alt="Tadbulb model preview"> |
| #0939 | [Bellibolt](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/939-procedural.jpg" width="160" alt="Bellibolt model preview"> |
| #0940 | [Wattrel](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/940-procedural.jpg" width="160" alt="Wattrel model preview"> |
| #0944 | [Shroodle](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/944-procedural.jpg" width="160" alt="Shroodle model preview"> |
| #0963 | [Finizen](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/963-procedural.jpg" width="160" alt="Finizen model preview"> |
| #0964 | [Palafin](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/964-procedural.jpg" width="160" alt="Palafin model preview"> |
| #0971 | [Greavard](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/971-procedural.jpg" width="160" alt="Greavard model preview"> |
| #0972 | [Houndstone](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/972-procedural.jpg" width="160" alt="Houndstone model preview"> |
| #0978 | [Mega Tatsugiri](garden-mega-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/978-mega-procedural.jpg" width="160" alt="Mega Tatsugiri model preview"> |
| #1012 | [Poltchageist](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/1012-procedural.jpg" width="160" alt="Poltchageist model preview"> |
| #1013 | [Sinistcha](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/1013-procedural.jpg" width="160" alt="Sinistcha model preview"> |
| #1024 | [Terapagos](garden-models.js)<br><sub>Simplified model</sub> | <img src="docs/previews/1024-procedural.jpg" width="160" alt="Terapagos model preview"> |

## Using GLB Files

Serve the repository files over HTTP and use a loader that supports glTF 2.0. All GLB files use `KHR_draco_mesh_compression`, and 238 also require `EXT_texture_webp` support. Textures and buffers are embedded in the model files; the Draco decoder must still be loaded separately.

The following code can be used in an ES module page served from the repository root:

```js
import { GLTFLoader } from './vendor/three-addons/loaders/GLTFLoader.js';
import { DRACOLoader } from './vendor/three-addons/loaders/DRACOLoader.js';

const draco = new DRACOLoader();
draco.setDecoderPath('./vendor/three-addons/libs/draco/');
const loader = new GLTFLoader().setDRACOLoader(draco);
const gltf = await loader.loadAsync('./assets/garden/models/25.glb');
// Add gltf.scene to your scene; animations are available in gltf.animations.
```

Models retain their original coordinate systems, scales, and animation names. The original project's `prepareRig()` applies an X-axis correction of `-Math.PI / 2` to regular Pikachu and handles other poses and additional motion at runtime. These runtime effects are not baked into the GLB files.

## Using Procedural Models

```js
import { createStylizedModel } from './garden-models.js';
import { createMegaModel } from './garden-mega-models.js';

const stylized = createStylizedModel(940);
const mega = createMegaModel({ id: 149, form: 'mega' });
// Both return values contain scene and animations.
```

These 31 models are preserved as source code and have not been exported to GLB. They are simplified geometry created for the original project, with a different visual style from the upstream GLB models.

## Sources and Licensing

The upstream GLB collection comes from [Pokemon-3D-api/assets](https://github.com/Pokemon-3D-api/assets), pinned to revision `429de1288cea0d43f5b4f56305d2276e94239d65`. The GLB contents were not modified during this upload.

The repository's [MIT License](LICENSE) does not replace the author licenses retained in individual models. A total of 126 GLB files explicitly embed the following statements:

| Embedded License | Count | Main Conditions |
| --- | ---: | --- |
| [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | 123 | Give attribution, link the license, and indicate changes |
| [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) | 2 | The attribution conditions above, plus a restriction to noncommercial use |
| [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) | 1 | The attribution and noncommercial conditions above; distribute adaptations under the same license |

The noncommercial licenses apply to [`41-regular.glb`](models/supplemental/41-regular.glb) (Zubat), [`81-regular.glb`](models/supplemental/81-regular.glb) (Magnemite), and [`789-regular.glb`](models/supplemental/789-regular.glb) (Cosmog, which uses NC-SA). The absence of these embedded statements in other files does not imply that all models share the repository's MIT license. Preserve the credits and applicable conditions recorded for each file in [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md), [`models-manifest.json`](models-manifest.json), and [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).

Pokémon characters, names, designs, and related trademarks belong to Nintendo, Creatures, GAME FREAK, The Pokémon Company, and their respective rights holders. This is an unofficial asset collection with no affiliation, sponsorship, or endorsement from those rights holders.
