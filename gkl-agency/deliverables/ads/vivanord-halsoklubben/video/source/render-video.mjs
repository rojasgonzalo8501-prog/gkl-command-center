import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const dir = path.dirname(fileURLToPath(import.meta.url));
const framesDir = path.join(dir, 'frames');
fs.rmSync(framesDir, { recursive: true, force: true });
fs.mkdirSync(framesDir, { recursive: true });

const FPS = 30;
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
await page.goto(`file://${dir}/scene.html`, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
const DUR = await page.evaluate(() => window.__duration);
const nFrames = Math.round((DUR / 1000) * FPS);
await page.waitForTimeout(120);

for (let i = 0; i < nFrames; i++) {
  const t = (i / FPS) * 1000;
  await page.evaluate(ms => window.__seek(ms), t);
  await page.screenshot({ path: path.join(framesDir, `f${String(i).padStart(4, '0')}.png`) });
  if (i % 60 === 0) console.log(`frame ${i}/${nFrames}`);
}
await browser.close();
console.log('frames done:', nFrames);
