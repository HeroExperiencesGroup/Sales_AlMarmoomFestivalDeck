// Convert source photos in `National Day Festival Photos Proposal/` to WebP
// in `assets/`. Re-runnable; overwrites existing WebPs.
//
// Quality tiers:
//   - HERO_QUALITY (88): hero/background images shown at full slide scale
//   - CARD_QUALITY (82): cards / tab panels at ~50–70% slide width
// Photos exceeding MAX_WIDTH are downscaled (preserves aspect ratio).

const sharp = require('sharp');
const path  = require('path');
const fs    = require('fs');

const REPO_ROOT = path.resolve(__dirname, '..');
const STD_SRC_DIR = path.join(REPO_ROOT, 'National Day Festival Photos Proposal');
const OUT_DIR     = path.join(REPO_ROOT, 'assets');

const MAX_WIDTH      = 2400;
const CARD_QUALITY   = 82;
const HERO_QUALITY   = 88;

// [source path (relative to repo root OR plain filename in STD_SRC_DIR),
//  output basename (in assets/), tier]
const MAP = [
  // ── Standard photos in National Day Festival Photos Proposal/ ──
  ['FestivalSite_Clear.png',                        '05-festival-site-clear',   'hero'],
  ['EntranceImage Slide1- CoverPage .jpeg',         '01-hero-entrance',         'hero'],
  ['FalconryImage Slide 2.png',                     '02-falconry-vision',       'card'],
  ['FestivalSite_Slide3a.jpeg',                     '05-festival-site',         'hero'],
  ['HeritageImage - Slide 3b- background.png',      '08-heritage-bg',           'hero'],
  ['LakeImage- Slide 4a- Background.png',           '06-glow-show',             'card'],
  ['GlowShow- Slide4b.png',                         '06-glow-projection',       'card'],
  ['TetheredBalloon-Slide 4c.png',                  '06-tethered-balloon',      'card'],
  ['BalloonFlight-Slide 4d.png',                    '06-sunrise-balloon',       'card'],
  ['Heritage Image - Slide 4e.png',                 '06-heritage-camp',         'card'],
  ['Arena of Tradition- Slide 4f.png',              '06-arena-tradition',       'card'],
  ['Astronomy- Slide 4g.png',                       '06-astronomy',             'card'],
  ['VLR- Slide 4h.png',                             '06-vintage-land-rover',    'card'],
  ['Heritage Auto Exhibition.jpg',                  '06-heritage-auto',         'card'],
  ['Camping- Slide 4I.png',                         '06-camping',               'card'],
  ['Future District- Slide 4J.png',                 '06-future-district',       'card'],
  ['Souk- Slide 4K.png',                            '06-souq',                  'card'],
  ['Falconry Image- Slide 5a- Background.png',      '10-falconry-operator',     'hero'],

  // ── Slide 7 paradox backgrounds (one image per daily-flow phase) ──
  // Source PNGs live in assets/Slide 7/ alongside the WebP outputs.
  // All hero tier — they paint at full slide scale via background-image.
  ['assets/Slide 7/paradox_1.png',                  '07-daily-flow-dawn',        'hero'],
  ['assets/Slide 7/paradox_2.png',                  '07-daily-flow-morning',     'hero'],
  ['assets/Slide 7/paradox_3.png',                  '07-daily-flow-daytime',     'hero'],
  ['assets/Slide 7/paradox_4.png',                  '07-daily-flow-cultural',    'hero'],
  ['assets/Slide 7/paradox_5.png',                  '07-daily-flow-golden',      'hero'],
  ['assets/Slide 7/paradox_6.png',                  '07-daily-flow-celebration', 'hero'],
  ['assets/Slide 7/paradox_7.png',                  '07-daily-flow-after-dark',  'hero'],
];

fs.mkdirSync(OUT_DIR, { recursive: true });

function resolveSrc(srcSpec) {
  // If the source spec contains a path separator, treat it as repo-relative.
  // Otherwise look it up in the standard source dir.
  return srcSpec.includes('/') || srcSpec.includes(path.sep)
    ? path.join(REPO_ROOT, srcSpec)
    : path.join(STD_SRC_DIR, srcSpec);
}

(async () => {
  let totalIn  = 0;
  let totalOut = 0;
  for (const [srcSpec, outBase, tier] of MAP) {
    const srcPath = resolveSrc(srcSpec);
    const outPath = path.join(OUT_DIR, outBase + '.webp');
    if (!fs.existsSync(srcPath)) {
      console.warn(`SKIP (missing): ${srcSpec}`);
      continue;
    }
    const inSize  = fs.statSync(srcPath).size;
    totalIn += inSize;
    const quality = tier === 'hero' ? HERO_QUALITY : CARD_QUALITY;
    const img     = sharp(srcPath, { failOn: 'none' }).rotate();
    const meta    = await img.metadata();
    const resized = meta.width && meta.width > MAX_WIDTH
      ? img.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : img;
    await resized.webp({ quality, effort: 5 }).toFile(outPath);
    const outSize = fs.statSync(outPath).size;
    totalOut += outSize;
    const ratio = ((1 - outSize / inSize) * 100).toFixed(0);
    console.log(`${outBase}.webp  ${(inSize/1024).toFixed(0)}KB -> ${(outSize/1024).toFixed(0)}KB  (-${ratio}%, q=${quality}, ${meta.width}x${meta.height})`);
  }
  console.log(`\nTotal: ${(totalIn/1024/1024).toFixed(2)}MB -> ${(totalOut/1024/1024).toFixed(2)}MB  (-${((1 - totalOut/totalIn)*100).toFixed(0)}%)`);
})().catch(e => { console.error(e); process.exit(1); });
