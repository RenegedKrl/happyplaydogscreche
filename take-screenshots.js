import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      let distance = 100;
      let timer = setInterval(() => {
        let scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
}

(async () => {
  const screenshotsDir = path.join(process.cwd(), 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  console.log('Iniciando o navegador...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const url = 'http://localhost:5174/';
  console.log(`Acessando ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

  console.log('Forçando o carregamento do mapa e das imagens...');
  await page.evaluate(() => {
    // Remover o atributo loading lazy de todas as imagens e iframes
    document.querySelectorAll('iframe, img').forEach(el => {
      el.removeAttribute('loading');
      el.setAttribute('loading', 'eager');
      // Forçar recarregamento do src para garantir que o navegador faça o request agora
      const src = el.src;
      el.src = '';
      el.src = src;
    });
  });
  
  // Rolar a página
  console.log('Rolando a página para renderizar os elementos...');
  await autoScroll(page);
  
  // Aguardar 5 segundos extras para o mapa carregar perfeitamente e os pins do Google Maps renderizarem
  console.log('Aguardando 5 segundos para garantir que o mapa da Google carregou por completo...');
  await new Promise(r => setTimeout(r, 5000));

  // 1. Desktop Screenshot
  console.log('Tirando print da versão Desktop...');
  await page.setViewport({ width: 1920, height: 1080 });
  await page.screenshot({ path: path.join(screenshotsDir, '1-desktop-full.png'), fullPage: true });

  // 2. Mobile Screenshot - Menu Fechado
  console.log('Mudando para versão Mobile...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await autoScroll(page);
  await new Promise(r => setTimeout(r, 2000));
  
  console.log('Tirando print da versão Mobile (Menu Fechado)...');
  await page.screenshot({ path: path.join(screenshotsDir, '2-mobile-menu-fechado-full.png'), fullPage: true });

  // 3. Mobile Screenshot - Menu Aberto
  console.log('Abrindo menu mobile...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  
  await page.click('.mobile-toggle');
  await new Promise(r => setTimeout(r, 1000)); 
  
  console.log('Tirando print da versão Mobile (Menu Aberto)...');
  await page.screenshot({ path: path.join(screenshotsDir, '3-mobile-menu-aberto-full.png'), fullPage: true });

  // 4. Mobile Screenshot - Menu Fechado Novamente
  console.log('Fechando menu mobile...');
  await page.click('.mobile-toggle');
  await new Promise(r => setTimeout(r, 1000)); 
  
  console.log('Tirando print da versão Mobile (Todas abas fechadas)...');
  await page.screenshot({ path: path.join(screenshotsDir, '4-mobile-todas-abas-fechadas-full.png'), fullPage: true });

  await browser.close();
  console.log('Concluído! Prints salvos na pasta "screenshots".');
})();
