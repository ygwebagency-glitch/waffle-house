import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public';
const skip = ['og-image.jpg', 'apple-touch-icon.png'];
const MAX_W = 1600;

for (const f of fs.readdirSync(dir)) {
  const ext = path.extname(f).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
  if (f.startsWith('favicon') || skip.includes(f)) continue;

  try {
    const p = path.join(dir, f);
    const input = fs.readFileSync(p);          // file memory mein parh li
    const before = input.length;

    let img = sharp(input).resize({ width: MAX_W, withoutEnlargement: true });
    if (ext === '.webp') img = img.webp({ quality: 75 });
    else if (ext === '.png') img = img.png({ compressionLevel: 9, palette: true });
    else img = img.jpeg({ quality: 75, mozjpeg: true });

    const buf = await img.toBuffer();
    if (buf.length < before) {
      fs.writeFileSync(p, buf);
      console.log(`${f}: ${Math.round(before / 1024)} KB -> ${Math.round(buf.length / 1024)} KB`);
    } else {
      console.log(`${f}: already small, skipped`);
    }
  } catch (e) {
    console.log(`${f}: ERROR (${e.code || e.message}), skipped`);
  }
}