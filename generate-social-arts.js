import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

(async () => {
  const artsDir = path.join(process.cwd(), 'arts');

  console.log('Iniciando Puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Behance
  console.log('Gerando arte do Behance...');
  const behancePath = `file:///${path.join(artsDir, 'behance.html').replace(/\\/g, '/')}`;
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 }); // High res
  await page.goto(behancePath, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(artsDir, '1-behance-presentation.png') });

  // Instagram
  console.log('Gerando arte do Instagram...');
  const instaPath = `file:///${path.join(artsDir, 'instagram.html').replace(/\\/g, '/')}`;
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 }); // High res
  await page.goto(instaPath, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(artsDir, '2-instagram-post.png') });

  await browser.close();
  console.log('Concluído! As artes finais estão na pasta "arts".');
})();
