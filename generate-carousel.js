import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const artsDir = path.join(process.cwd(), 'arts');
if (!fs.existsSync(artsDir)) fs.mkdirSync(artsDir);

const slides = [
  {
    name: 'slide-1-capa',
    html: `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
      <style>
        body { margin: 0; padding: 0; width: 1080px; height: 1350px; background: #EAEFF5; font-family: 'Inter', sans-serif; overflow: hidden; position: relative; }
        .bg-text { position: absolute; font-size: 200px; font-weight: 900; color: rgba(10, 101, 10, 0.05); top: 50px; left: -20px; line-height: 0.8; letter-spacing: -5px; }
        .header { position: absolute; top: 120px; left: 80px; z-index: 10; }
        .tag { font-size: 24px; font-weight: 700; color: #fff; background: #0a650a; padding: 10px 25px; border-radius: 50px; display: inline-block; margin-bottom: 20px; }
        .title { font-size: 85px; font-weight: 900; color: #212121; line-height: 1; letter-spacing: -3px; }
        .title span { color: #0a650a; }
        .laptop { position: absolute; bottom: 100px; left: 50%; transform: translateX(-50%); width: 900px; }
        .screen { width: 100%; height: 580px; background: #000; border-radius: 20px 20px 0 0; padding: 20px; box-sizing: border-box; box-shadow: 0 40px 80px rgba(0,0,0,0.2); }
        .content { width: 100%; height: 100%; background-image: url('../screenshots/1-desktop-full.png'); background-size: 100% auto; background-position: top center; border-radius: 4px; }
        .base { width: 1000px; height: 25px; background: #ccc; border-radius: 0 0 20px 20px; margin-left: -50px; position: relative; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .base::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 150px; height: 8px; background: #aaa; border-radius: 0 0 10px 10px; }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap" rel="stylesheet">
      </head>
      <body>
      <div class="bg-text">WEB<br>DESIGN<br>PRO</div>
      <div class="header">
        <div class="tag">Projeto 2026</div>
        <div class="title">Criação de<br><span>Landing Page</span><br>Alta Conversão.</div>
      </div>
      <div class="laptop">
        <div class="screen"><div class="content"></div></div>
        <div class="base"></div>
      </div>
      </body>
      </html>
    `
  },
  {
    name: 'slide-2-mobile',
    html: `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
      <style>
        body { margin: 0; padding: 0; width: 1080px; height: 1350px; background: #111; font-family: 'Inter', sans-serif; overflow: hidden; position: relative; color: white; }
        .bg-glow { position: absolute; width: 800px; height: 800px; background: #0a650a; filter: blur(200px); opacity: 0.25; top: 10%; left: -200px; border-radius: 50%; }
        .header { padding: 100px 80px; position: relative; z-index: 10; }
        .title { font-size: 80px; font-weight: 900; line-height: 1; letter-spacing: -3px; margin-bottom: 20px; }
        .title span { color: #ffc700; }
        .subtitle { font-size: 30px; color: #aaa; max-width: 600px; line-height: 1.4; }
        .phones { position: absolute; top: 450px; left: 50%; width: 100%; transform: translateX(-50%); display: flex; justify-content: center; gap: 40px; perspective: 2000px; z-index: 5; }
        .phone { width: 340px; height: 720px; background: #000; border-radius: 40px; border: 12px solid #222; box-shadow: -20px 30px 50px rgba(0,0,0,0.8); position: relative; overflow: hidden; transform-style: preserve-3d; }
        .phone.left { transform: rotateY(15deg) rotateX(10deg) translateZ(-50px) translateY(50px); }
        .phone.right { transform: rotateY(-15deg) rotateX(10deg) translateZ(50px) translateY(-20px); }
        .notch { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 140px; height: 30px; background: #222; border-radius: 0 0 15px 15px; z-index: 20; }
        .screen { width: 100%; height: 100%; background-size: 100% auto; background-position: top center; }
        .badge { position: absolute; bottom: 150px; left: 80px; background: rgba(0,0,0,0.85); backdrop-filter: blur(20px); padding: 40px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); z-index: 30; max-width: 400px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
        .badge-title { font-size: 60px; font-weight: 900; color: #ffc700; margin-bottom: 15px; line-height: 1; }
        .badge-text { font-size: 24px; color: #eee; line-height: 1.5; font-weight: 500; }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap" rel="stylesheet">
      </head>
      <body>
      <div class="bg-glow"></div>
      <div class="header">
        <div class="title">Design<br><span>Responsivo.</span></div>
        <div class="subtitle">A experiência perfeita em qualquer dispositivo. Telas pensadas para converter.</div>
      </div>
      <div class="phones">
        <div class="phone left"><div class="notch"></div><div class="screen" style="background-image: url('../screenshots/2-mobile-menu-fechado-full.png')"></div></div>
        <div class="phone right"><div class="notch"></div><div class="screen" style="background-image: url('../screenshots/3-mobile-menu-aberto-full.png')"></div></div>
      </div>
      <div class="badge">
        <div class="badge-title">100%</div>
        <div class="badge-text">Otimizado para atrair e converter clientes direto no WhatsApp.</div>
      </div>
      </body>
      </html>
    `
  },
  {
    name: 'slide-3-cores',
    html: `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
      <style>
        body { margin: 0; padding: 0; width: 1080px; height: 1350px; background: #fff; font-family: 'Inter', sans-serif; overflow: hidden; }
        .header { padding: 100px 80px; border-bottom: 1px solid #eee; }
        .title { font-size: 60px; font-weight: 900; color: #212121; letter-spacing: -2px; }
        .subtitle { font-size: 30px; color: #666; font-weight: 300; }
        .content { padding: 80px; }
        .typo-box { margin-bottom: 100px; }
        .typo-title { font-size: 24px; color: #888; text-transform: uppercase; letter-spacing: 4px; margin-bottom: 20px; font-weight: 700;}
        .typo-main { font-size: 140px; font-weight: 900; color: #111; line-height: 1; letter-spacing: -5px; }
        .typo-weights { font-size: 40px; color: #555; margin-top: 20px; font-weight: 300; }
        .typo-weights span { font-weight: 900; color: #0a650a; }
        .colors { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .color-card { height: 250px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); display: flex; flex-direction: column; overflow: hidden; border: 1px solid #eee; }
        .color-fill { flex: 1; }
        .color-info { padding: 20px; background: #fff; display: flex; justify-content: space-between; align-items: center;}
        .color-hex { font-size: 24px; font-weight: 900; color: #111; }
        .color-name { font-size: 18px; color: #888; }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap" rel="stylesheet">
      </head>
      <body>
      <div class="header">
        <div class="title">Identidade Visual</div>
        <div class="subtitle">Tipografia & Paleta de Cores</div>
      </div>
      <div class="content">
        <div class="typo-box">
          <div class="typo-title">Tipografia Principal</div>
          <div class="typo-main">Inter Font</div>
          <div class="typo-weights">A B C D E F G H I J K <span>L M N</span></div>
        </div>
        <div class="typo-title">Paleta de Cores</div>
        <div class="colors">
          <div class="color-card"><div class="color-fill" style="background: #0a650a;"></div><div class="color-info"><div class="color-hex">#0A650A</div><div class="color-name">Green</div></div></div>
          <div class="color-card"><div class="color-fill" style="background: #ffc700;"></div><div class="color-info"><div class="color-hex">#FFC700</div><div class="color-name">Yellow</div></div></div>
          <div class="color-card"><div class="color-fill" style="background: #004aad;"></div><div class="color-info"><div class="color-hex">#004AAD</div><div class="color-name">Blue</div></div></div>
          <div class="color-card"><div class="color-fill" style="background: #c61919;"></div><div class="color-info"><div class="color-hex">#C61919</div><div class="color-name">Red</div></div></div>
        </div>
      </div>
      </body>
      </html>
    `
  },
  {
    name: 'slide-4-galeria',
    html: `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
      <style>
        body { margin: 0; padding: 0; width: 1080px; height: 1350px; background: #0a650a; font-family: 'Inter', sans-serif; overflow: hidden; position: relative; color: white; }
        .header { padding: 100px 80px; position: relative; z-index: 10; }
        .title { font-size: 85px; font-weight: 900; line-height: 1; letter-spacing: -3px; }
        .title span { color: #ffc700; }
        .subtitle { font-size: 30px; color: rgba(255,255,255,0.8); margin-top: 20px; font-weight: 300; }
        .mockup-container { position: absolute; top: 350px; right: -100px; width: 1100px; height: 900px; transform: rotate(-5deg); box-shadow: -30px 40px 80px rgba(0,0,0,0.5); border-radius: 30px; overflow: hidden; border: 12px solid #fff; }
        .mockup-img { width: 100%; height: 100%; background-image: url('../screenshots/1-desktop-full.png'); background-size: 100% auto; background-position: center 25%; }
        .badge { position: absolute; bottom: 120px; left: 80px; background: #ffc700; color: #111; padding: 35px 45px; border-radius: 20px; font-size: 35px; font-weight: 900; z-index: 20; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap" rel="stylesheet">
      </head>
      <body>
      <div class="header">
        <div class="title">Visual limpo.<br><span>Design Atraente.</span></div>
        <div class="subtitle">Apresentação imersiva da estrutura e galeria de fotos.</div>
      </div>
      <div class="mockup-container">
        <div class="mockup-img"></div>
      </div>
      <div class="badge">Estratégia visual para encantar</div>
      </body>
      </html>
    `
  },
  {
    name: 'slide-5-conversao',
    html: `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
      <style>
        body { margin: 0; padding: 0; width: 1080px; height: 1350px; background: #111; font-family: 'Inter', sans-serif; overflow: hidden; position: relative; color: white; }
        .bg-glow { position: absolute; width: 800px; height: 800px; background: #ffc700; filter: blur(250px); opacity: 0.15; bottom: -200px; right: -200px; border-radius: 50%; }
        .header { padding: 100px 80px; position: relative; z-index: 10; }
        .title { font-size: 85px; font-weight: 900; line-height: 1; letter-spacing: -3px; }
        .title span { color: #0a650a; }
        .subtitle { font-size: 30px; color: rgba(255,255,255,0.7); margin-top: 20px; font-weight: 300; max-width: 600px; }
        .phone-zoom { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 700px; height: 800px; background: #000; border-radius: 60px 60px 0 0; border: 20px solid #222; border-bottom: none; box-shadow: 0 -20px 80px rgba(0,0,0,0.8); overflow: hidden; }
        .screen { width: 100%; height: 100%; background-image: url('../screenshots/4-mobile-todas-abas-fechadas-full.png'); background-size: 100% auto; background-position: bottom center; }
        .notch { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 220px; height: 40px; background: #222; border-radius: 0 0 20px 20px; z-index: 20; }
        .floating-card { position: absolute; top: 480px; left: 80px; background: #fff; color: #111; padding: 35px 45px; border-radius: 20px; display: flex; align-items: center; gap: 20px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); z-index: 30; }
        .icon { width: 70px; height: 70px; background: #0a650a; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: white; font-size: 35px; font-weight: bold; }
        .card-text { font-size: 28px; font-weight: 900; }
        .card-sub { font-size: 20px; color: #666; font-weight: 500; }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap" rel="stylesheet">
      </head>
      <body>
      <div class="bg-glow"></div>
      <div class="header">
        <div class="title">Geração<br>de <span>Leads.</span></div>
        <div class="subtitle">CTAs estratégicos para maximizar o contato via WhatsApp.</div>
      </div>
      <div class="floating-card">
        <div class="icon">✓</div>
        <div>
          <div class="card-text">Alta Conversão</div>
          <div class="card-sub">Botões persuasivos no layout</div>
        </div>
      </div>
      <div class="phone-zoom">
        <div class="notch"></div>
        <div class="screen"></div>
      </div>
      </body>
      </html>
    `
  },
  {
    name: 'slide-6-cta',
    html: `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
      <style>
        body { margin: 0; padding: 0; width: 1080px; height: 1350px; background: #EAEFF5; font-family: 'Inter', sans-serif; overflow: hidden; position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        .grid-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.05; background-image: linear-gradient(#0a650a 2px, transparent 2px), linear-gradient(90deg, #0a650a 2px, transparent 2px); background-size: 100px 100px; }
        .content { position: relative; z-index: 10; padding: 80px; display: flex; flex-direction: column; align-items: center; }
        .title { font-size: 90px; font-weight: 900; color: #212121; line-height: 1.1; letter-spacing: -3px; margin-bottom: 30px; }
        .title span { color: #0a650a; }
        .subtitle { font-size: 32px; color: #555; font-weight: 500; margin-bottom: 80px; }
        .btn { display: inline-block; background: #212121; color: #fff; font-size: 30px; font-weight: 800; padding: 35px 70px; border-radius: 60px; text-transform: uppercase; letter-spacing: 2px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        .images { display: flex; justify-content: center; margin-bottom: 60px; }
        .img-circle { width: 220px; height: 220px; border-radius: 50%; border: 10px solid #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.1); background-size: cover; background-position: top; }
        .img-1 { background-image: url('../screenshots/1-desktop-full.png'); z-index: 3; transform: rotate(-10deg); }
        .img-2 { background-image: url('../screenshots/2-mobile-menu-fechado-full.png'); z-index: 2; margin-left: -50px; transform: rotate(5deg); }
        .img-3 { background-image: url('../screenshots/3-mobile-menu-aberto-full.png'); z-index: 1; margin-left: -50px; transform: rotate(15deg); }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap" rel="stylesheet">
      </head>
      <body>
      <div class="grid-bg"></div>
      <div class="content">
        <div class="images">
          <div class="img-circle img-1"></div>
          <div class="img-circle img-2"></div>
          <div class="img-circle img-3"></div>
        </div>
        <div class="title">Pronto para ter<br>um <span>site incrível?</span></div>
        <div class="subtitle">Aumente sua autoridade e suas vendas.</div>
        <div class="btn">Solicite um Orçamento</div>
      </div>
      </body>
      </html>
    `
  }
];

(async () => {
  console.log('Iniciando Puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const htmlPath = path.join(artsDir, slide.name + '.html');
    fs.writeFileSync(htmlPath, slide.html);
    
    console.log('Gerando ' + slide.name + '...');
    const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(artsDir, (i + 1) + '-' + slide.name + '.png') });
  }

  await browser.close();
  console.log('Concluído! O carrossel completo está na pasta "arts".');
})();
