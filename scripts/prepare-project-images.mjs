import sharp from "sharp";
import fs from "fs";

const src = "public/images/breshna.png";
const { width, height } = await sharp(src).metadata();
console.log({ width, height });

const slideHeight = Math.round(width * 0.62);
const slices = [
  { name: "breshna-1", top: 0 },
  { name: "breshna-2", top: Math.round(height * 0.22) },
  { name: "breshna-3", top: Math.round(height * 0.48) },
  { name: "breshna-4", top: Math.max(0, height - slideHeight) },
];

for (const s of slices) {
  const h = Math.min(slideHeight, height - s.top);
  const out = `public/images/${s.name}.webp`;
  await sharp(src)
    .extract({ left: 0, top: s.top, width, height: h })
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);
  console.log(s.name, fs.statSync(out).length, "top", s.top, "h", h);
}

await sharp(src)
  .extract({ left: 0, top: 0, width, height: slideHeight })
  .resize({ width: 1400, withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile("public/images/breshna-cover.webp");
console.log("cover", fs.statSync("public/images/breshna-cover.webp").length);

await sharp("public/images/lloyds.png")
  .resize({ width: 1400, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile("public/images/lloyds-1.webp");
console.log("lloyds-1", fs.statSync("public/images/lloyds-1.webp").length);
