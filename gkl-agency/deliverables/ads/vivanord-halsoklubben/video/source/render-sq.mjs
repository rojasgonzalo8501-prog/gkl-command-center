import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
const dir = path.dirname(fileURLToPath(import.meta.url));
const FPS = 30;
const scenes = ['b', 'c', 'd'];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
for (const s of scenes) {
  const fdir = path.join(dir, `frames_sq_${s}`);
  fs.rmSync(fdir, { recursive: true, force: true });
  fs.mkdirSync(fdir, { recursive: true });
  await page.goto(`file://${dir}/scene-${s}.html?ar=sq`, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const DUR = await page.evaluate(() => window.__duration);
  const n = Math.round((DUR / 1000) * FPS);
  await page.waitForTimeout(100);
  for (let i = 0; i < n; i++) {
    await page.evaluate(ms => window.__seek(ms), (i / FPS) * 1000);
    await page.screenshot({ path: path.join(fdir, `f${String(i).padStart(4, '0')}.png`), clip: { x: 0, y: 0, width: 1080, height: 1080 } });
  }
  console.log(`sq scene ${s}: ${n} frames`);
}
await browser.close();
console.log('SQ FRAMES DONE');
