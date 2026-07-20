import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'url';
import path from 'path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(dir, 'out');
import fs from 'fs';
fs.mkdirSync(out, { recursive: true });

const creatives = ['1a', '1b', '1c'];
const formats = [
  { name: '1x1', w: 1080, h: 1080 },
  { name: '4x5', w: 1080, h: 1350 },
  { name: '9x16', w: 1080, h: 1920 },
];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const c of creatives) {
  for (const f of formats) {
    const page = await browser.newPage({ viewport: { width: f.w, height: f.h }, deviceScaleFactor: 1 });
    const url = `file://${dir}/creative-${c}.html?fmt=${f.name}`;
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(150);
    const file = path.join(out, `vivanord_${c}_${f.name}.png`);
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: f.w, height: f.h } });
    console.log('rendered', path.basename(file));
    await page.close();
  }
}
await browser.close();
console.log('DONE');
