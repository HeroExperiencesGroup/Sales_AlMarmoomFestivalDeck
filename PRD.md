# Horizons of Al Marmoom Festival — Pitch Deck PRD

**Version:** 1.0 (Draft for review)
**Author:** Generated from PDF + Excel blueprint
**Date:** 2026-05-31
**Owner:** Hero Experiences Group · Group Events Specialist
**Reference style:** `D:\Projects\SGU\Canvas in the Sky\index.html`

---

## 1. Purpose

Build a single-file, presentation-mode HTML pitch deck for **Horizons of Al Marmoom Festival** — a five-day immersive National Day destination festival to be staged at Al Marmoom Desert Conservation Reserve (2–6 December 2026, Wed–Sun).

The deck is the live, screen-presented version used by Hero Experiences Group with strategic partners and sponsors. Content is sourced from:

- `Horizons of Al Marmoom Festival.pdf` — current 6-page narrative deck (source of truth for tone)
- `Horizons of Al Marmoom Festival Blueprint.xlsx` — full operational blueprint (source of truth for depth: zones, anchor experiences, sponsor categories, audience profiles, daily flow, revenue streams, legacy objectives)
- `National Day Festival Photos Proposal/` — 17 imagery assets with naming convention `<topic>- Slide <N><letter>` indicating intended slide placement

## 2. Style reference (non-negotiable)

The visual language is **borrowed wholesale** from `D:\Projects\SGU\Canvas in the Sky\index.html` ("Canvas From The Sky"):

| Token | Value | Use |
|---|---|---|
| Font display | **Playfair Display** 600–700 | Headlines, hero numbers, ticket prices |
| Font body | **DM Sans** 300–500 | Body copy, eyebrows, labels |
| Gold (light bg) | `#A67C3A` | Dividers, stat numbers, accents |
| Gold light (dark bg) | `#C9A96E` | Hero accents on `.slide--ink` |
| Parchment bg | `#F7F4EF` | Default light slide |
| White bg | `#FFFFFF` | Alt light |
| Cream bg | `#EDEAE2` | Alt warm-grey |
| Ink bg | `#0A0A0F` | Hero + CTA dark slides |
| Text on light | `#18140E` heading, `#3C3428` body, `#7A7065` muted |
| Text on dark | `#F0EDE6` paper, `#C9A96E` heading |

**Canvas geometry:** 1920 × 1080 baseline, scale-to-fit with `[1920, 2880]` width range. **DO NOT** change.

**Slide transitions:** 80px slide-in + 520ms opacity crossfade with the same `is-before / is-active / is-after / is-animating / is-far` performance dance. **REUSE** the JS verbatim.

**Navigation:** top-right pill (counter + arrows + dots + fullscreen toggle), keyboard `← →`, swipe, mouse-wheel paging, pinch-zoom — all reused as-is.

**Begin-presentation gate + rotate-prompt** retained.

**No build step.** Single `index.html`, inline `<style>` and inline `<script>`. Google Fonts via CDN preconnect.

## 3. Content scope (in this version)

### IN scope
- 10 narrative slides + 1 dark hero + 1 dark CTA = **11 slides total**
- All copy sourced from the PDF (narrative) and Excel (depth). When the two conflict, the PDF wins for tone, the Excel wins for facts and counts.
- 17 photos from `National Day Festival Photos Proposal/`, placed per their filename slide-mapping.
- Bilingual title cue (Arabic شكرًا on the CTA, matching the PDF's Thank-You page).

### OUT of scope (this version)
- No financial model numbers, IRR, payback, CAPEX — the source materials do **not** include audited financials. Revenue is mentioned only qualitatively (14 streams, "Very High / High / Premium / Medium" scale) per the Excel.
- No interactive altitude widget or theme tabs from the reference deck — those are Canvas-specific.
- No PDF-export A4 variant (`pitch-pdf.html` equivalent) — can be added in v2 if requested.
- No CMS / JSON data binding — content is hard-coded in HTML.

## 4. Slide-by-slide plan

| # | Slide | Background | Hero asset | Primary content |
|---|---|---|---|---|
| 1 | **Hero** | `slide--ink has-bg-image` | `EntranceImage Slide1- CoverPage.jpeg` | Eyebrow "Al Marmoom Desert Reserve · Dubai · UAE National Day 2026", H1 "Horizons of<br>Al Marmoom Festival", lede tagline "A Five Day Celebration of Heritage, Wonder, and the Spirit of the UAE", 4 stat row: 5 Days · 11 Districts · 11 Anchor Experiences · 2–6 Dec 2026 |
| 2 | **Vision** | `slide--paper` | `FalconryImage Slide 2.png` (right column) | Eyebrow "Festival Vision", H2 "Honouring the past.<br>Inspiring the future." (Playfair), 2-col layout: left = vision narrative (Option 2 from xlsx), right = falconry image; stat row underneath: National Day timing, Al Marmoom Reserve location, family/resident/tourist audience |
| 3 | **Core Pillars** | `slide--paper` | n/a (typography slide) | Eyebrow "Rooted in the Spirit of the Emirates", H2 "Six pillars. One story.", `cols-3` × 2 rows of 6 pillar cards: Heritage · Wonder · Exploration · Innovation · Conservation · Community (each card: gold number, title, 2-line definition from xlsx) |
| 4 | **The Journey** | `slide--cream` | n/a | Eyebrow "The Journey", H2 "Four horizons. One desert night.", 4-column journey theme grid (Desert · Horizon · Stars · Heritage) — paragraph each from PDF page 3 |
| 5 | **Festival Districts (Site Plan)** | `slide--paper` | `FestivalSite_Slide3a.jpeg` | Eyebrow "Site Masterplan · 11 Districts", H2 "A festival woven into the desert.", canvas-split: left = site image, right = scrollable/compact list of 11 zones with one-line purpose. Heritage Camp District is the cultural heart; Skies of Al Marmoom is the visual spectacle anchor. |
| 6 | **Signature Experiences** | `slide--paper` | 11 photos (4a–4K) | Eyebrow "Anchor Experiences", H2 "Eleven moments that define the night.", **4 themed tabs** mapped to The Journey: <br>**Stars** (Glow Show + Lake Projection, Tethered Balloon, Sunrise Balloon, Astronomy)<br>**Heritage** (Heritage Camp Dining, Arena of Tradition, Camping)<br>**Desert** (Heritage Drives in Vintage Land Rovers, Heritage Auto Exhibition)<br>**Horizon** (Future Horizons Innovation, Festival Souq & Culinary). Each tab shows a 2-up or 3-up `theme-row` with photo + name + description + zone + emotional impact tag. |
| 7 | **Daily Festival Flow** | `slide--cream` | n/a | Eyebrow "From Dawn to Desert After Dark", H2 "A day that unfolds across seven horizons.", `timeline` 7-step row: Dawn Horizons · Morning Awakening · Daytime Exploration · Cultural Encounters · Golden Horizons · Celebration Under the Stars · Desert After Dark — with hours, mood, and signature experiences (Excel sheet "Experience and Programming" §2) |
| 8 | **What Makes It Different** | `slide--paper` | `Heritage Image - Slide 3b- background.png` (faint bg or right column) | Eyebrow "What Makes Horizons Different", H2 "Not a festival. A destination.", 5 differentiator cards (cols-3 row + cols-2 row, or single 5-col): Rooted in Conservation · Authentically Emirati · Designed for All Generations · Heritage Meets Innovation · A Destination Festival Experience (definitions from PDF p4) |
| 9 | **Partnerships & Audience** | `slide--paper` | n/a | Eyebrow "Strategic Partnerships", H2 "Built for partners.<br>Designed for every guest.", split layout: left = 8 audience profile pills (UAE Families · Residents · Tourists · Schools · Cultural Enthusiasts · Outdoor Adventurers · VIP/Sponsors · Corporate); right = sponsorship pillars (Strategic Tourism, Cultural, Innovation, Space & Exploration, Conservation, Education, Automotive, Hospitality) with named anchor partners from xlsx (DET, Dubai Culture, Museum of the Future, MBR Space Centre, Emirates Nature-WWF, Jaguar Land Rover, LEGO, Emirates) |
| 10 | **Why Hero Experiences Group** | `slide--cream` | `Falconry Image- Slide 5a- Background.png` (background, dimmed) | Eyebrow "Hero Experiences Group · Operator", H2 "Two decades of immersive desert experience.", lede from PDF p5, operator-style credentials row (4 numbered stats: 20+ Years Heritage, Award-Winning Tourism, Large-Scale Event Delivery, Conservation-First) + 2-col list of capabilities & strengths, pull-quote "Hero is uniquely positioned to bring Horizons of Al Marmoom to life." |
| 11 | **Thank You / CTA** | `slide--ink` | n/a (dark slide) | Eyebrow "Get in touch", H1 "Honouring the past.<br>Inspiring the future.<br>Celebrating the spirit of the UAE.", Arabic شكرًا small under title, 2 contact cards: Adam McEwan — Group CEO — adam@hero-experiences.com · Courtney Sneddon — Group Events Specialist — courtney@hero-experiences.com |

## 5. Asset map

The 17 source photos contain spaces and odd casing, and are delivered as `.jpeg` / `.jpg` / `.png`. We will:

1. **Convert** every image to **WebP** (quality ~82 — sweet spot for landscape photography, ~70% file-size reduction vs JPEG with no perceptible loss in a presentation context). Hero/background images are saved at slightly higher quality (~88) to survive being scaled across a full 1920-wide canvas.
2. **Output** to a new `assets/` folder using clean kebab-case filenames.
3. **Keep** originals in `National Day Festival Photos Proposal/` for traceability — they are gitignored only if size becomes an issue; otherwise committed for reproducibility.
4. **Tool:** Node.js `sharp` library (already available via npm — no Python dependency).

| Source file | New path (WebP) | Used on |
|---|---|---|
| `EntranceImage Slide1- CoverPage .jpeg` | `assets/01-hero-entrance.webp` | Slide 1 hero bg |
| `FalconryImage Slide 2.png` | `assets/02-falconry-vision.webp` | Slide 2 right column |
| `FestivalSite_Slide3a.jpeg` | `assets/05-festival-site.webp` | Slide 5 split-image |
| `HeritageImage - Slide 3b- background.png` | `assets/08-heritage-bg.webp` | Slide 8 bg/column |
| `LakeImage- Slide 4a- Background.png` | `assets/06-glow-show.webp` | Slide 6 · Stars · Glow Show |
| `GlowShow- Slide4b.jpg` | `assets/06-glow-projection.webp` | Slide 6 · Stars · Glow Show alt |
| `TetheredBalloon-Slide 4c.jpeg` | `assets/06-tethered-balloon.webp` | Slide 6 · Stars · Tethered |
| `BalloonFlight-Slide 4d.png` | `assets/06-sunrise-balloon.webp` | Slide 6 · Stars · Sunrise |
| `Heritage Image - Slide 4e.png` | `assets/06-heritage-camp.webp` | Slide 6 · Heritage · Camp Dining |
| `Arena of Tradition- Slide 4f.jpeg` | `assets/06-arena-tradition.webp` | Slide 6 · Heritage · Arena |
| `Astronomy- Slide 4g.png` | `assets/06-astronomy.webp` | Slide 6 · Stars · Astronomy |
| `VLR- Slide 4h.png` | `assets/06-vintage-land-rover.webp` | Slide 6 · Desert · Heritage Drives |
| `Camping- Slide 4I.png` | `assets/06-camping.webp` | Slide 6 · Heritage · Camping |
| `Future District- Slide 4J.jpeg` | `assets/06-future-district.webp` | Slide 6 · Horizon · Future Horizons |
| `Souk- Slide 4K.jpeg` | `assets/06-souq.webp` | Slide 6 · Horizon · Souq |
| `Falconry Image- Slide 5a- Background.png` | `assets/10-falconry-operator.webp` | Slide 10 background |

**Conversion script:** `scripts/convert-images.js` — generated once; can be re-run if originals are updated. Targets max-width 2400px (downscales only oversized photos), preserves aspect ratio, strips EXIF.

## 6. Content sources, verbatim quotes

These will be used as-is in the deck:

- **Tagline** (PDF p1): "A Celebration of Heritage, Wonder, and the Spirit of the UAE" — extended to xlsx version: "A Five Day Celebration of Heritage, Wonder, and the Spirit of the UAE"
- **Vision Statement (Option 2, xlsx Foundation §2)**: the longer, future-oriented version — picked over Option 1 because it leads with the legacy framing and matches the PDF closing slide tone.
- **Six Pillars + Definitions** (xlsx Foundation §4, identical to PDF)
- **11 Districts + Atmosphere** (xlsx "Site & Masterplan" §2)
- **11 Anchor Experiences + Emotional Impact** (xlsx "Experience and Programming" §1)
- **Daily Flow** (xlsx "Experience and Programming" §2, 7 phases)
- **5 Differentiators** (PDF p4)
- **Closing copy** (PDF p6): "Honouring the Past. Inspiring the Future. Celebrating the Spirit of the UAE." — used on the final CTA slide.

## 7. Acceptance criteria

The deck is "done" when:

- [ ] Opens cleanly in Chrome / Edge / Safari on desktop and lands on Slide 1 hero.
- [ ] Begin-presentation overlay appears on first load; clicking it enters fullscreen.
- [ ] Slide counter reads `01 / 11` initially; advancing with arrow key / swipe / wheel / dot click increments correctly and loops.
- [ ] All 11 slides render at 1920×1080 without horizontal overflow on a 16:9 monitor.
- [ ] Every photo from §5 loads (no broken-image icons).
- [ ] Mobile (iPhone Safari landscape) renders without the rotate-prompt blocking unnecessarily and slides paginate via swipe.
- [ ] Print preview at A4 landscape paginates one slide per page.
- [ ] No console errors.
- [ ] All copy quoted from PDF/Excel is reproduced accurately (no transcription errors in proper nouns: Al Marmoom, Saluki, Bedouin, Jaguar Land Rover, Mohammed Bin Rashid Space Centre, etc.).

## 8. Open questions for stakeholder review

Before build, please confirm:

1. **Vision Statement** — use Option 2 (legacy-leading) or Option 1 (current-tense)?
2. **Slide count** — 11 OK, or compress (e.g., merge Pillars + Journey, or split Districts + Site map)?
3. **Daily Flow slide** — keep as a separate Slide 7, or fold it into the Anchor Experiences tabs?
4. **Sponsor logos** — none provided. Render names as text only, or leave room for logo drop-in later?
5. **Contact slide** — include both contacts (Adam + Courtney) or just CEO?
6. **Arabic text** — `شكرًا` on the close slide as in the PDF. Anywhere else (e.g., a subtitle on the hero)?
7. **Branding / Hero Experiences Group logo** — do we have an SVG or PNG to place on Slide 10 / footer?
8. **Festival color accent** — keep the Canvas-deck gold (#A67C3A / #C9A96E), or shift toward a desert palette (deeper amber / sand) more associated with Al Marmoom?

## 9. Deliverables

1. **`index.html`** — replaces the current placeholder copy of Canvas From The Sky with the Horizons deck.
2. **`assets/`** — 16 renamed WebP images (one source file is provisional-duplicate, see asset map).
3. **`scripts/convert-images.js`** — Node + sharp image conversion script (re-runnable if originals are updated).
4. **`PRD.md`** — this document, committed alongside the deck for future iteration context.
5. **`.gitignore`** — exclude `_tmp_pdf/` (extraction working dir), `node_modules/`, OS junk.
6. **Initial commit** on the local git repo with the above.

## 10. Not committed to scope (parking lot for v2)

- A4 print/PDF brochure variant (`pitch-pdf.html`)
- Detailed revenue model and CAPEX numbers (currently not provided)
- Sponsor logo wall slide
- Animated transitions for the Daily Flow timeline
- Bilingual EN/AR toggle
- Map/GIS layer of the Al Marmoom site
- Schools & youth programming sub-deck

## 11. Slide 7 background refresh (planned, sources committed 2026-06-02)

Slide 7 (Daily Flow / Time Scrubber) is moving from soft diagonal CSS gradients to **real desert environment photos per phase**, one image per phase, in phase order.

| Phase | Source PNG | Converted WebP | Status |
|---|---|---|---|
| Dawn Horizons | `assets/Slide 7/paradox_1.png` | `assets/07-daily-flow-dawn-sand.webp` | converted, not yet wired |
| Morning Awakening | `assets/Slide 7/paradox_2.png` | `assets/07-daily-flow-morning-sand.webp` | converted, not yet wired |
| Daytime Exploration | `assets/Slide 7/paradox_3.png` | — | needs WebP + wiring |
| Cultural Encounters | `assets/Slide 7/paradox_4.png` | — | needs WebP + wiring |
| Golden Horizons | `assets/Slide 7/paradox_5.png` | — | needs WebP + wiring |
| Celebration Under the Stars | `assets/Slide 7/paradox_6.png` | — | needs WebP + wiring |
| Desert After Dark | `assets/Slide 7/paradox_7.png` | — | needs WebP + wiring |

**Implementation note when wiring in:**
1. Add the remaining 5 mappings to `scripts/convert-images.js` and re-run to generate the WebPs (suggested naming: `07-daily-flow-<phase>-sand.webp` to match the two already done).
2. In `draft.html`, swap each `.scrubber-slide[data-mood="<phase>"] { background: linear-gradient(...) }` rule for `background: url('assets/07-daily-flow-<phase>-sand.webp') center/cover`.
3. Update the JS `MOOD_BG` map (used by the bleed-backdrop) to the dominant ground colour of each photo, so the body bg blends past the canvas edge.
4. Re-check the warm-mood label/tick contrast overrides on the scrubber axis — photo backgrounds may need different opacity on the white phase card and axis container than the gradient version did.
5. Sanity test all 7 phases for title legibility; the existing dark-mood (celebration, after-dark) text overrides may need to expand to cover golden + cultural depending on how saturated the new photo bottoms are.
