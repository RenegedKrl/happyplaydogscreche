import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

(async () => {
  const artsDir = path.join(process.cwd(), 'arts-portfolio');
  console.log('Iniciando Puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 }); // Retina resolution

  const files = fs.readdirSync(artsDir).filter(f => f.endsWith('.html')).sort();

  for (const file of files) {
    const htmlPath = path.join(artsDir, file);
    const pngName = file.replace('.html', '.png');
    
    console.log('Gerando ' + pngName + '...');
    const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(artsDir, pngName) });
  }

  await browser.close();
  console.log('Artes de Portfolio geradas com sucesso!');
})();
