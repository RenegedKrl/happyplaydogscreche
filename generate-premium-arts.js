import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const artsDir = path.join(process.cwd(), 'arts-premium');
if (!fs.existsSync(artsDir)) fs.mkdirSync(artsDir);

const baseStyle = \`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;800&display=swap');
  body { margin:0; width:1080px; height:1350px; background:#050505; color:#fff; font-family:'Manrope', sans-serif; overflow:hidden; position:relative; }
  .glow1 { position:absolute; width:1200px; height:1200px; background:radial-gradient(circle, rgba(10,101,10,0.3) 0%, transparent 60%); top:-300px; right:-300px; }
  .glow2 { position:absolute; width:1000px; height:1000px; background:radial-gradient(circle, rgba(255,199,0,0.1) 0%, transparent 60%); bottom:-200px; left:-300px; }
  .grid { position:absolute; inset:0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 50px 50px; }
\`;

const slides = [
  {
    name: '01-capa',
    html: \`
      <!DOCTYPE html>
      <html>
      <head>
      <style>
        \${baseStyle}
        .header { padding: 120px 100px; position:relative; z-index:10; }
        .badge { display:inline-block; border: 1px solid rgba(255,255,255,0.2); padding: 15px 30px; border-radius: 40px; font-size: 22px; font-weight: 600; letter-spacing: 4px; margin-bottom: 50px; text-transform:uppercase; color:#ffc700;}
        .title { font-size: 130px; font-weight: 800; line-height: 0.95; letter-spacing: -5px; margin-bottom: 30px;}
        .subtitle { font-size: 36px; font-weight: 200; color: rgba(255,255,255,0.6); max-width:800px; line-height:1.4;}
        
        .browser { position:absolute; bottom:0; left:100px; width:880px; height:650px; background:#111; border: 1px solid rgba(255,255,255,0.15); border-radius: 24px 24px 0 0; overflow:hidden; box-shadow: 0 -20px 100px rgba(0,0,0,1); z-index:10; }
        .b-top { height: 45px; border-bottom: 1px solid rgba(255,255,255,0.05); display:flex; align-items:center; padding: 0 25px; gap: 10px; background:#161616;}
        .dot { width: 14px; height: 14px; border-radius: 50%; }
        .d-r { background: #ff5f56; } .d-y { background: #ffbd2e; } .d-g { background: #27c93f; }
        .b-content { height:605px; background: url('../screenshots/1-desktop-full.png') top center/100% no-repeat; }
      </style>
      </head>
      <body>
      <div class="grid"></div><div class="glow1"></div><div class="glow2"></div>
      <div class="header">
        <div class="badge">Case Study</div>
        <div class="title">Happy Play<br>Dogs.</div>
        <div class="subtitle">Design minimalista e de alta conversão para pet shops e creches.</div>
      </div>
      <div class="browser">
        <div class="b-top"><div class="dot d-r"></div><div class="dot d-y"></div><div class="dot d-g"></div></div>
        <div class="b-content"></div>
      </div>
      </body>
      </html>
    \`
  },
  {
    name: '02-mobile',
    html: \`
      <!DOCTYPE html>
      <html>
      <head>
      <style>
        \${baseStyle}
        .title { font-size: 110px; font-weight: 800; line-height: 1; letter-spacing: -4px; text-align:center; margin-top: 150px; position:relative; z-index:10;}
        .title span { color: #ffc700; }
        .phones { position:absolute; top: 450px; left:0; width:100%; display:flex; justify-content:center; align-items:flex-start; z-index:5;}
        .phone { width: 420px; height: 850px; background:#000; border-radius: 50px; border: 12px solid #1a1a1a; overflow:hidden; box-shadow: 0 30px 100px rgba(0,0,0,0.9); }
        .p1 { transform: rotate(-4deg) translateY(40px); z-index:2; margin-right:-40px;}
        .p2 { transform: rotate(6deg); z-index:1; margin-left:-40px; border-color:#222;}
        .p-content { width:100%; height:100%; background: url('../screenshots/2-mobile-menu-fechado-full.png') top center/100% no-repeat; }
        .p2 .p-content { background-image: url('../screenshots/3-mobile-menu-aberto-full.png'); }
      </style>
      </head>
      <body>
      <div class="grid"></div><div class="glow1"></div>
      <div class="title">Design que<br><span>converte.</span></div>
      <div class="phones">
        <div class="phone p1"><div class="p-content"></div></div>
        <div class="phone p2"><div class="p-content"></div></div>
      </div>
      </body>
      </html>
    \`
  },
  {
    name: '03-identidade',
    html: \`
      <!DOCTYPE html>
      <html>
      <head>
      <style>
        \${baseStyle}
        .card-container { display:flex; flex-direction:column; gap:40px; padding: 0 100px; margin-top: 200px; position:relative; z-index:10;}
        .card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 40px; padding: 70px; backdrop-filter: blur(20px);}
        .section-title { font-size: 20px; font-weight: 600; color: rgba(255,255,255,0.4); text-transform:uppercase; letter-spacing: 6px; margin-bottom: 40px; }
        .typo { font-size: 150px; font-weight: 800; line-height:1; letter-spacing:-6px;}
        .typo-sub { font-size: 34px; font-weight: 200; color: rgba(255,255,255,0.6); margin-top: 20px;}
        .color-grid { display:flex; gap: 20px; }
        .color-swatch { flex:1; height: 220px; border-radius: 20px; padding: 25px; display:flex; flex-direction:column; justify-content:flex-end; }
        .c1 { background: #0a650a; } .c2 { background: #ffc700; color:#000;} .c3 { background: #004aad; } .c4 { background: #c61919; }
        .hex { font-size: 24px; font-weight: 800; font-family:monospace; margin-bottom:5px;}
        .c-name { font-size: 16px; font-weight: 600; opacity:0.8; text-transform:uppercase; letter-spacing:2px;}
      </style>
      </head>
      <body>
      <div class="grid"></div>
      <div class="card-container">
        <div class="card">
          <div class="section-title">Tipografia</div>
          <div class="typo">Manrope</div>
          <div class="typo-sub">A B C D E F G H I J K L M N O P</div>
        </div>
        <div class="card" style="padding: 50px;">
          <div class="section-title" style="margin-bottom: 30px; padding-left:20px;">Paleta de Cores</div>
          <div class="color-grid">
            <div class="color-swatch c1"><div class="hex">#0A650A</div><div class="c-name">Green</div></div>
            <div class="color-swatch c2"><div class="hex">#FFC700</div><div class="c-name">Yellow</div></div>
            <div class="color-swatch c3"><div class="hex">#004AAD</div><div class="c-name">Blue</div></div>
            <div class="color-swatch c4"><div class="hex">#C61919</div><div class="c-name">Red</div></div>
          </div>
        </div>
      </div>
      </body>
      </html>
    \`
  },
  {
    name: '04-grid',
    html: \`
      <!DOCTYPE html>
      <html>
      <head>
      <style>
        \${baseStyle}
        .layout { display:grid; grid-template-columns: 1fr 1fr; gap: 40px; padding: 100px; height: 100%; box-sizing:border-box; position:relative; z-index:10;}
        .col { display:flex; flex-direction:column; gap:40px; }
        .box { background: #111; border-radius: 40px; border: 1px solid rgba(255,255,255,0.05); overflow:hidden; }
        .b1 { height: 600px; background: url('../screenshots/1-desktop-full.png') center center/cover; }
        .b2 { height: 450px; padding: 60px; display:flex; flex-direction:column; justify-content:center; background:rgba(255,255,255,0.02); backdrop-filter:blur(20px);}
        .b3 { height: 450px; background: url('../screenshots/4-mobile-todas-abas-fechadas-full.png') bottom center/cover; }
        .b4 { height: 600px; background: url('../screenshots/1-desktop-full.png') bottom left/cover; }
        .t1 { font-size: 70px; font-weight: 800; line-height:1.1; margin-bottom:20px; letter-spacing:-2px;}
        .t2 { font-size: 26px; font-weight: 200; color: rgba(255,255,255,0.6); line-height:1.5;}
      </style>
      </head>
      <body>
      <div class="grid"></div><div class="glow2"></div>
      <div class="layout">
        <div class="col">
          <div class="box b1"></div>
          <div class="box b2">
            <div class="t1">Foco nos detalhes.</div>
            <div class="t2">Design elaborado para apresentar toda a estrutura e qualidade da marca de forma impecável.</div>
          </div>
        </div>
        <div class="col">
          <div class="box b3"></div>
          <div class="box b4"></div>
        </div>
      </div>
      </body>
      </html>
    \`
  },
  {
    name: '05-usabilidade',
    html: \`
      <!DOCTYPE html>
      <html>
      <head>
      <style>
        \${baseStyle}
        .title-big { font-size: 160px; font-weight: 800; line-height:0.9; padding: 120px 100px; position:relative; z-index:10; letter-spacing:-6px;}
        .title-big span { color: transparent; -webkit-text-stroke: 2px rgba(255,255,255,0.3); }
        .floating-img { position:absolute; bottom: -50px; right: -50px; width: 750px; height: 950px; background: url('../screenshots/4-mobile-todas-abas-fechadas-full.png') bottom center/100% no-repeat; border-radius: 60px; box-shadow: -30px -30px 100px rgba(0,0,0,0.9); border: 12px solid #1a1a1a; transform: rotate(-5deg); z-index:5;}
        .glass-card { position:absolute; top: 650px; left: 80px; width: 480px; background: rgba(20,20,20,0.8); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.1); border-radius: 40px; padding: 60px; z-index:20; box-shadow: 0 40px 80px rgba(0,0,0,0.5);}
        .g-icon { font-size: 50px; margin-bottom: 30px; }
        .g-title { font-size: 40px; font-weight: 800; margin-bottom: 20px; line-height:1.1; letter-spacing:-1px;}
        .g-text { font-size: 24px; font-weight: 200; color: rgba(255,255,255,0.7); line-height:1.6;}
      </style>
      </head>
      <body>
      <div class="grid"></div><div class="glow1"></div>
      <div class="title-big">UX / UI<br><span>Estratégico</span></div>
      <div class="floating-img"></div>
      <div class="glass-card">
        <div class="g-icon">🚀</div>
        <div class="g-title">Captura de Leads Inteligente</div>
        <div class="g-text">Botões de WhatsApp flutuantes e CTAs visíveis durante toda a jornada do usuário.</div>
      </div>
      </body>
      </html>
    \`
  },
  {
    name: '06-cta',
    html: \`
      <!DOCTYPE html>
      <html>
      <head>
      <style>
        \${baseStyle}
        .center { display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding:100px; position:relative; z-index:10;}
        .super-title { font-size: 130px; font-weight: 800; line-height: 1; margin-bottom: 40px; letter-spacing:-5px;}
        .super-title span { color: #0a650a; }
        .super-sub { font-size: 36px; font-weight: 200; color: rgba(255,255,255,0.6); margin-bottom: 80px; }
        .btn { background: #fff; color: #000; padding: 40px 90px; border-radius: 100px; font-size: 36px; font-weight: 800; letter-spacing: 0px; text-decoration:none; display:inline-block; transition:0.3s; box-shadow: 0 20px 60px rgba(255,255,255,0.2);}
        .glow-center { position:absolute; width:1200px; height:1200px; background:radial-gradient(circle, rgba(10,101,10,0.3) 0%, transparent 60%); top:50%; left:50%; transform:translate(-50%, -50%); z-index:1;}
      </style>
      </head>
      <body>
      <div class="grid"></div><div class="glow-center"></div>
      <div class="center">
        <div class="super-title">Pronto para<br><span>evoluir?</span></div>
        <div class="super-sub">Eleve o nível do seu negócio na internet com um site profissional.</div>
        <div class="btn">Solicite um Orçamento</div>
      </div>
      </body>
      </html>
    \`
  }
];

(async () => {
  console.log('Iniciando Puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 }); // Retina resolution

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const htmlPath = path.join(artsDir, slide.name + '.html');
    fs.writeFileSync(htmlPath, slide.html);
    
    console.log('Gerando ' + slide.name + '...');
    const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(artsDir, slide.name + '.png') });
  }

  await browser.close();
  console.log('Artes Premium geradas com sucesso!');
})();
