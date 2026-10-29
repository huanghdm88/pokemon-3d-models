# Garden Assets

This is an unofficial local prototype, not a Pokemon Pokopia asset extraction or an official Pokemon product.

## Pokemon Models

Source: https://github.com/Pokemon-3D-api/assets

Pinned revision: `429de1288cea0d43f5b4f56305d2276e94239d65`.

`species.json` records each model's source URL and size. Frequently used species and the verified Mega Charizard X/Y, Mega Rayquaza and Mega Zygarde models are included locally; other available models are fetched on demand and cached in the browser. Species names come from the PokeAPI species-name dataset: https://github.com/PokeAPI/pokeapi/blob/master/data/v2/csv/pokemon_species_names.csv.

Physical profiles come from PokeAPI's `pokemon.csv`, `pokemon_types.csv` and `pokemon_abilities.csv`: https://github.com/PokeAPI/pokeapi/tree/master/data/v2/csv. Display sizes compress the height/length range with a power curve and a 0.65-2.3 garden-unit target range. Groudon has a tighter 2.1-unit maximum extent; slender Rayquaza models have a 3.6-unit length cap. This is a readable relative scale, not a literal 1:1 size simulation. Flying type, Levitate and explicit floating-species profiles select independent aerial paths with clearance above the house and trees.

Card names preserve Mega X/Y and regional forms. Models are cached by species plus form; an unavailable explicit form is disabled instead of replaced with an ordinary model. M3's Mega Zygarde is distinct from Zygarde Complete Forme: https://www.pokemon.com/us/news/rosas-encouragement-mega-zygarde-ex-and-more-from-mega-evolution-perfect-order. Pikachu's exported coordinate system is corrected before fitting; Rayquaza bodies and Mew tails use continuous additive skeletal motion.

The source repository attributes the Pokemon models and designs to Nintendo, Creatures and GAME FREAK. Its MIT software license does NOT grant commercial rights to Pokemon characters, artwork or models. Obtain the necessary rights before commercial distribution. No model from the user's Pokopia reference screenshots was extracted.

The garden buildings, vegetation, paths, pond, roaming behavior and interaction code were made for this prototype. Twenty species without a model in the source repository use individually modeled, simplified low-poly studies in `garden-models.js`; these are prototype interpretations, not official Pokopia character models. Residents are identified by collected card ID; species IDs only identify shared model resources. Removing a resident does not delete a collected card.

### Supplemental Mega Forms

`garden-mega-models.js` adds eleven distinct, simplified procedural studies for Mega Clefable, Dragonite, Froslass, Scrafty, Chandelure, Golurk, Pyroar, Dragalge, Hawlucha, Golisopod and Tatsugiri. The roster labels these as "Simplified model". These are original prototype geometry interpretations of the respective Pokemon designs, not official model files, Pokopia assets, or ordinary forms relabeled as Mega forms. Form proportions and type profiles use the same PokeAPI CSV datasets above. Visual references are the form-specific illustrations in https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/other/official-artwork. Mega Dragonite's head wings and tail pearl are described at https://legends.pokemon.com/en-ca/story-world/pokemon/mega-dragonite.

Mega Malamar is the existing `models/opt/za/687.glb` asset at the pinned Pokemon-3D-api revision, now explicitly mapped and bundled as `models/687-mega.glb`. Its embedded credits name Mariokart07, https://sketchfab.com/Mariokart07, and list CC-BY-4.0: https://creativecommons.org/licenses/by/4.0/. Original model: https://sketchfab.com/3d-models/mega-malamar-za-c443be586a51452597b147ad99a88853. The bundled GLB is unmodified; garden scale, materials and motion are adjusted at runtime. This attribution does not imply a Pokemon character/IP license. Run `node scripts/prepare-mega-assets.mjs` to restore the pinned local file.

## Software

- Three.js r185, addons and OrbitControls: MIT, https://github.com/mrdoob/three.js/blob/r185/LICENSE
- Draco decoder distributed with Three.js: Apache-2.0, https://github.com/google/draco/blob/main/LICENSE
- EasyStar.js 0.4.4: MIT, copyright Bryce Neal; license included in `vendor/easystar.min.js`. https://github.com/prettymuchbryce/easystarjs
- Lucide 1.8.0: ISC, https://github.com/lucide-icons/lucide/blob/main/LICENSE. Only the selected icons are included in the small local bundle.

The local garden supports 12 residents to keep mobile rendering bounded. Older placements retain the first 12 eligible residents; the card collection is unchanged. This is a device-local feature; clearing browser storage also clears garden placement.

## Relaxed Poses And Placement

Mega Greninja's large water shuriken and Mega Zygarde's weapon meshes are hidden by their dedicated skeleton attachments in the pinned assets. Their arms use relaxed, non-combat poses; these garden adaptations do not alter the collected card artwork or substitute ordinary forms. Default idle animations take priority over battle-idle clips for other models.

Mouse and touch dragging move a resident independently from the camera. Ground placement snaps out of blocked house/pool cells; aerial placement starts a new flight route at the drop point. Aquatic residents project their drop onto a safe lake route. Accepted drops immediately save local placement; a cancelled gesture restores its starting point.

## Lake And Movement

A procedural lake surrounds the island without an enclosing rim. Its irregular, softly fading edge blends into the environment. Periodic wave normals, layered drifting color variations and subtle highlights animate on the GPU using a Three.js standard material; no external water image or video is loaded. Swimming wakes remain attached to aquatic residents. Aquatic species are selected explicitly and checked against their Water-type profile, so land-dwelling Water types do not become fish. Magikarp, Gyarados and Mega Gyarados models are bundled from the pinned revision; `scripts/prepare-lake-assets.mjs` refreshes these three assets without replacing the rest of the catalog. Aquatic residents use clearance-bounded water lanes instead of land or flight paths, with skeletal tail motion and gentle bobbing. All residents share the existing 12-resident limit. Pace varies between brief pauses, slow roaming, cruising and short faster stretches, with smooth acceleration and speed-matched gait.

Lake ripples occasionally appear at independently randomized, shore-clear positions. Two soft wave fronts expand and fade over 3.2-4.4 seconds, with randomized 2.4-6.2-second intervals. A bounded three-event shader pool adds no extra draw calls. Pausing freezes the ripple clock; reduced motion clears the events and resuming schedules a quiet interval instead of a burst.

## Hot Spring And Articulated Motion

The inner pond is a hot spring with a wood spout and continuous procedural steam (36 GPU particles, no external sprite). Ground residents occasionally reserve the spring, follow the existing EasyStar walk grid to its entrance, ease into the water, soak for 15 simulation seconds, then return to land. One visitor uses the small pool at a time. Pause and hidden tabs freeze the visit; dragging and removal release the reservation. Saved placements always use the dry entrance during a visit. Flying and lake-swimming residents never enter the spring.

Wing animation recognizes wing, arm and feeler rigs, including Articuno, Lugia and Charizard. Local-axis corrections and delayed distal motion keep left/right wings coordinated. The unrigged Mega Charizard X export uses instance-owned, weighted wing-surface deformation; shared templates and body geometry remain unchanged. Zoroark's 14 hair joints use phase-delayed sway. Models retain their original designs and textures. `scripts/prepare-motion-assets.mjs` bundles the unchanged regular Charizard, Articuno, Lugia and Zoroark GLBs from the pinned revision above for reliable loading. No new model source is introduced.

Deleting a saved card requires confirmation. Its card-ID-matched garden resident is removed from both the live scene and saved placement, without removing other cards of the same species.

## Local Time

The device's IANA time zone takes priority and requires no location request. Cached or remote IP time zones cannot override it, avoiding incorrect daylight caused by a VPN or proxy exit. Only when the device time zone is unavailable does the browser request the IANA zone field from `https://ipapi.co/timezone/`, with `https://ipwho.is/?fields=success,timezone.id` as a fallback. No card data, coordinates or authentication values are sent. Only the returned zone and cache timestamp are stored locally for six hours. Each provider has a 2.2-second timeout; complete failure falls back to UTC. Lookup never blocks rendering. Documentation: https://ipapi.co/api/ and https://ipwhois.io/documentation.

The garden updates its lighting and sky from that zone's wall-clock time, including daylight saving time. Dawn and dusk are fixed local-hour transitions, not astronomical sunrise/sunset estimates. Night uses weaker, cooler key light and moderate ambient fill: characters and vegetation visibly dim while shadow detail remains readable. Daytime lighting is unchanged. The house's window material and two small non-shadow-casting lights warm up at dusk. The public IP lookup is best-effort; production deployments should account for the provider's availability and usage quota.

The procedural sky uses independently randomized star positions, sizes, brightness and twinkling phases, with fewer stars on small screens. Occasional short shooting stars appear only at night, with randomized paths and a 12-32-second quiet interval after each one. Sky drawing is capped at 20 fps. Reduced-motion preferences disable shooting stars, twinkling and lake flow. The garden entrance uses the same static, original geometric icon treatment and shared interaction states as the other bottom navigation buttons.
