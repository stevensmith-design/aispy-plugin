// Screens of each example document, for the plugin edition: one JPEG per section at 1440 px, long
// sections split into their findings, task cards or layout cards (or into 1400 px slices when they
// have none). Uses the full kit's own Playwright install (scripts/capture/node_modules).
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const MAX = 2000; // px: a taller unit is split
const SLICE = 1400;
const UNITS = 'article.finding, .task, .layoutcard';

export async function render({ aispy, examples, out }) {
  let chromium;
  try {
    ({ chromium } = createRequire(path.join(aispy, 'scripts/capture/package.json'))('playwright'));
  } catch {
    console.warn('! No Playwright in the kit checkout (scripts/capture/node_modules): example screens not rendered.');
    return;
  }
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  let total = 0;
  for (const ex of examples) {
    await page.goto(`file://${ex.file}?lang=en`, { waitUntil: 'load' });
    await page.waitForTimeout(400);
    const boxes = await page.evaluate(({ MAX, SLICE, UNITS }) => {
      const abs = (el) => { const r = el.getBoundingClientRect(); return { y: Math.round(r.top + scrollY), h: Math.round(r.height) }; };
      const list = [];
      const secs = [...document.querySelectorAll('#app section[id], body > section[id], main section[id]')].filter((s) => !s.parentElement.closest('section[id]'));
      const first = secs.length ? abs(secs[0]).y : 0;
      if (first > 40) list.push({ id: 'cover', y: 0, h: Math.min(first, MAX) });
      if (!secs.length) { const H = document.documentElement.scrollHeight; for (let y = 0, i = 1; y < H; y += SLICE, i++) list.push({ id: `page-${i}`, y, h: Math.min(SLICE, H - y) }); return list; }
      for (const s of secs) {
        const b = abs(s);
        if (b.h <= MAX) { list.push({ id: s.id, ...b }); continue; }
        const units = [...s.querySelectorAll(UNITS)];
        if (units.length) {
          const u0 = abs(units[0]);
          if (u0.y - b.y > 40) list.push({ id: `${s.id}-intro`, y: b.y, h: Math.min(u0.y - b.y, MAX) });
          units.forEach((u, i) => {
            const ub = abs(u); const id = `${s.id}-${u.id || i + 1}`;
            if (ub.h <= MAX) list.push({ id, ...ub });
            else for (let y = ub.y, k = 1; y < ub.y + ub.h; y += SLICE, k++) list.push({ id: `${id}-${k}`, y, h: Math.min(SLICE, ub.y + ub.h - y) });
          });
        } else {
          for (let y = b.y, k = 1; y < b.y + b.h; y += SLICE, k++) list.push({ id: `${s.id}-${k}`, y, h: Math.min(SLICE, b.y + b.h - y) });
        }
      }
      return list.filter((x) => x.h > 20);
    }, { MAX, SLICE, UNITS });
    boxes.forEach((b, i) => { b.n = i + 1; });
    for (const b of boxes) {
      const file = out(ex.pkg, `${ex.name}--${String(b.n).padStart(2, '0')}-${b.id.replace(/[^\w-]/g, '')}.jpg`);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      await page.screenshot({ path: file, type: 'jpeg', quality: 80, fullPage: true, clip: { x: 0, y: b.y, width: 1440, height: b.h } });
      total++;
    }
    console.log(`  ${ex.pkg}/${ex.name}: ${boxes.length} screens`);
  }
  await browser.close();
  console.log(`Rendered ${total} example screens.`);
}
