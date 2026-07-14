import { chromium } from "playwright";
import fs from "fs";

const sites = [
  { key: "soflow", url: "https://soflowmedia.com/" },
  { key: "manifex", url: "https://manifex.com/" },
  { key: "pillfinda", url: "https://www.pillfinda.co/" },
];

const outDir = "public/images";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const site of sites) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  page.setDefaultTimeout(90000);

  try {
    console.log("capturing", site.key);
    await page.goto(site.url, {
      waitUntil: "domcontentloaded",
      timeout: 90000,
    });
    await page.waitForTimeout(3500);
    await page.screenshot({
      path: `${outDir}/${site.key}-full.png`,
      fullPage: true,
    });
    await page.screenshot({
      path: `${outDir}/${site.key}-hero.png`,
      fullPage: false,
    });
    console.log("ok", site.key);
  } catch (error) {
    console.error("fail", site.key, error.message);
  } finally {
    await context.close();
  }
}

await browser.close();
console.log("done");
