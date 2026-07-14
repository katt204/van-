import sharp from "sharp";
import fs from "fs";

async function prepare(key) {
  const full = `public/images/${key}-full.png`;
  const hero = `public/images/${key}-hero.png`;
  const { width, height } = await sharp(full).metadata();
  const slideHeight = Math.min(Math.round(width * 0.62), height);

  const tops = [
    0,
    Math.round(height * 0.2),
    Math.round(height * 0.42),
    Math.max(0, height - slideHeight),
  ];

  // unique tops only
  const uniqueTops = [...new Set(tops)].filter((t) => t + 100 < height);

  let index = 1;
  for (const top of uniqueTops.slice(0, 4)) {
    const h = Math.min(slideHeight, height - top);
    const out = `public/images/${key}-${index}.webp`;
    await sharp(full)
      .extract({ left: 0, top, width, height: h })
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(out);
    console.log(out, fs.statSync(out).length);
    index += 1;
  }

  await sharp(hero)
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(`public/images/${key}-cover.webp`);
  console.log(`${key}-cover`, fs.statSync(`public/images/${key}-cover.webp`).length);
}

for (const key of ["soflow", "manifex", "pillfinda"]) {
  await prepare(key);
}
