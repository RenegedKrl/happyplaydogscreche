import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

(async () => {
  const artsDir = path.join(process.cwd(), 'arts-final');
  console.log('Iniciando Puppeteer...');
  const browser = await puppeteer.launch({ args: ['--allow-file-access-from-files'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });

  const files = fs.readdirSync(artsDir).filter(f => f.endsWith('.html')).sort();

  for (const file of files) {
    const htmlPath = path.join(artsDir, file);
    const pngName = file.replace('.html', '.png');
    console.log('Gerando ' + pngName + '...');
    const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
    await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(artsDir, pngName) });
    console.log('OK: ' + pngName);
  }

  await browser.close();
  console.log('Artes finais geradas com sucesso!');
})();
