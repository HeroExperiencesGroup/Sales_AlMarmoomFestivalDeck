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

const SRC_DIR = path.resolve(__dirname, '..', 'National Day Festival Photos Proposal');
const OUT_DIR = path.resolve(__dirname, '..', 'assets');

const MAX_WIDTH      = 2400;
const CARD_QUALITY   = 82;
const HERO_QUALITY   = 88;

// [source filename, output basename, tier]
const MAP = [
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
];

fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  let totalIn  = 0;
  let totalOut = 0;
  for (const [srcName, outBase, tier] of MAP) {
    const srcPath = path.join(SRC_DIR, srcName);
    const outPath = path.join(OUT_DIR, outBase + '.webp');
    if (!fs.existsSync(srcPath)) {
      console.warn(`SKIP (missing): ${srcName}`);
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
