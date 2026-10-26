import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const OUT = 'public';
const BACKUP = 'D:/waffle-public-backup';
const SRC = fs.existsSync(BACKUP) ? BACKUP : OUT;
console.log('Source:', SRC);

const MIN_KB = 80;     // sirf 80 KB se bari images
const MAX_W = 1200;    // zyada se zyada width
const QUALITY = 65;

for (const f of fs.readdirSync(OUT)) {
  const ext = path.extname(f).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
  if (f.startsWith('favicon') || ['og-image.jpg', 'apple-touch-icon.png'].includes(f)) continue;

  try {
    const outPath = path.join(OUT, f);
    const currentKB = fs.statSync(outPath).size / 1024;
    if (currentKB < MIN_KB) continue;

    const srcPath = path.join(SRC, f);
    const input = fs.readFileSync(fs.existsSync(srcPath) ? srcPath : outPath);

    let img = sharp(input).resize({ width: MAX_W, withoutEnlargement: true });
    if (ext === '.webp') img = img.webp({ quality: QUALITY });
    else if (ext === '.png') img = img.png({ compressionLevel: 9, palette: true });
    else img = img.jpeg({ quality: QUALITY, mozjpeg: true });

    const buf = await img.toBuffer();
    if (buf.length / 1024 < currentKB) {
      fs.writeFileSync(outPath, buf);
      console.log(`${f}: ${Math.round(currentKB)} KB -> ${Math.round(buf.length / 1024)} KB`);
    } else {
      console.log(`${f}: ${Math.round(currentKB)} KB, already smaller, skipped`);
    }
  } catch (e) {
    console.log(`${f}: ERROR (${e.code || e.message}), skipped`);
  }
}