import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const artsDir = path.join(process.cwd(), 'arts-portfolio');
const bgImagePath = 'file:///C:/Users/kauek/.gemini/antigravity/brain/69243d6f-e701-4ba6-a535-cfab6fff6002/rocks_background_1783482781097.png'.replace(/\\/g, '/');

const baseStyle = \`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;700;800&display=swap');
  body { margin:0; width:1080px; height:1350px; background-color:#050505; color:#fff; font-family:'Manrope', sans-serif; overflow:hidden; position:relative; }
  .bg-img { position:absolute; inset:0; background: url('\${bgImagePath}') center center/cover no-repeat; opacity:0.85; z-index:0; filter: contrast(1.1) saturate(1.2); }
  .overlay { position:absolute; inset:0; background: linear-gradient(180deg, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.95) 100%); z-index:1; }
  .glow { position:absolute; width:1200px; height:1200px; background:radial-gradient(circle, rgba(10,101,10,0.5) 0%, transparent 70%); z-index:2; top:50%; left:50%; transform:translate(-50%, -50%); filter:blur(100px); mix-blend-mode: screen; pointer-events:none;}
  .content { position:relative; z-index:10; width:100%; height:100%; display:flex; flex-direction:column; padding: 100px 80px; box-sizing:border-box; }
  .phone { background:#000; border-radius: 50px; border: 12px solid #1a1a1a; overflow:hidden; box-shadow: 0 30px 100px rgba(0,0,0,0.9); }
  .browser { background:#111; border: 1px solid rgba(255,255,255,0.15); border-radius: 24px 24px 0 0; overflow:hidden; box-shadow: 0 40px 120px rgba(0,0,0,0.9); }
  .b-top { height: 45px; border-bottom: 1px solid rgba(255,255,255,0.05); display:flex; align-items:center; padding: 0 25px; gap: 10px; background:#161616;}
  .dot { width: 14px; height: 14px; border-radius: 50%; }
  .d-r { background: #ff5f56; } .d-y { background: #ffbd2e; } .d-g { background: #27c93f; }
\`;

const slides = [
  {
    name: '01-capa',
    html: \`
      <!DOCTYPE html><html><head><style>
        \${baseStyle}
        .title-group { text-align:center; margin-top: 50px; margin-bottom: 150px;}
        .t-main { font-size: 150px; font-weight: 800; line-height: 0.9; letter-spacing: -6px; text-transform:lowercase; color: rgba(255,255,255,0.9); text-shadow: 0 0 50px rgba(255,255,255,0.4); }
        .t-sub { font-size: 120px; font-weight: 300; line-height: 0.9; letter-spacing: -4px; text-transform:lowercase; color: #ffc700; }
        .badge { display:inline-block; border: 1px solid rgba(255,255,255,0.3); padding: 12px 25px; border-radius: 40px; font-size: 18px; font-weight: 600; letter-spacing: 2px; margin-bottom: 30px; text-transform:uppercase; background: rgba(255,255,255,0.05); backdrop-filter:blur(10px);}
        .browser-mockup { width: 900px; height: 650px; margin: 0 auto; transform: perspective(1000px) rotateX(10deg); transform-origin: bottom; }
        .b-content { height: 605px; background: url('../../screenshots/1-desktop-full.png') top center/100% no-repeat; }
      </style></head><body>
      <div class="bg-img"></div><div class="overlay"></div><div class="glow"></div>
      <div class="content">
        <div class="title-group">
          <div class="badge">Projeto Recente • Happy Play Dogs</div>
          <div class="t-main">trabalhos</div>
          <div class="t-sub">recentes</div>
        </div>
        <div class="browser browser-mockup">
          <div class="b-top"><div class="dot d-r"></div><div class="dot d-y"></div><div class="dot d-g"></div></div>
          <div class="b-content"></div>
        </div>
      </div>
      </body></html>
    \`
  },
  {
    name: '02-objetivos',
    html: \`
      <!DOCTYPE html><html><head><style>
        \${baseStyle}
        .bg-img { filter: contrast(1.1) saturate(1.2) blur(5px); opacity:0.5;}
        .title { font-size: 140px; font-weight: 800; text-align:center; line-height: 0.9; margin-bottom: 50px; opacity: 0.1; position:absolute; top: 100px; width: 100%; left:0; z-index:0;}
        .phone-center { width: 380px; height: 800px; margin: 150px auto 0; position:relative; z-index:10; }
        .p-content { width:100%; height:100%; background: url('../../screenshots/2-mobile-menu-fechado-full.png') top center/100% no-repeat; }
        .glass-box { position:absolute; background: rgba(20,20,20,0.6); backdrop-filter: blur(30px); border: 1px solid rgba(10, 101, 10, 0.5); border-radius: 20px; padding: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); width: 320px; z-index:20;}
        .g-num { font-size: 28px; font-weight: 800; margin-bottom: 10px; color:#ffc700;}
        .g-title { font-size: 24px; font-weight: 700; margin-bottom: 10px; }
        .g-desc { font-size: 16px; font-weight: 300; color:rgba(255,255,255,0.7); line-height:1.4; }
        .gb-1 { top: 250px; left: -100px; }
        .gb-2 { top: 150px; right: -100px; }
        .gb-3 { bottom: 150px; left: -80px; }
        .gb-4 { bottom: 250px; right: -80px; }
      </style></head><body>
      <div class="bg-img"></div><div class="overlay"></div><div class="glow"></div>
      <div class="title">Project<br>Goals</div>
      <div class="content" style="position:relative;">
        <div class="phone phone-center">
          <div class="p-content"></div>
        </div>
        <div class="glass-box gb-1"><div class="g-num">01 —</div><div class="g-title">Identidade Visual</div><div class="g-desc">Criação de um visual amigável que reflete o cuidado com os pets.</div></div>
        <div class="glass-box gb-2"><div class="g-num">02 —</div><div class="g-title">UI/UX Design</div><div class="g-desc">Jornada do usuário focada em facilidade de uso e clareza.</div></div>
        <div class="glass-box gb-3"><div class="g-num">03 —</div><div class="g-title">Desenvolvimento</div><div class="g-desc">Código limpo e acessível, garantindo velocidade no carregamento.</div></div>
        <div class="glass-box gb-4"><div class="g-num">04 —</div><div class="g-title">Alta Conversão</div><div class="g-desc">CTAs posicionados estrategicamente para captação de leads.</div></div>
      </div>
      </body></html>
    \`
  },
  {
    name: '03-planejamento',
    html: \`
      <!DOCTYPE html><html><head><style>
        \${baseStyle}
        .header { margin-bottom: 80px; }
        .h-tag { font-size: 20px; font-weight: 700; color: #ffc700; letter-spacing: 4px; text-transform:uppercase; margin-bottom: 20px;}
        .h-title { font-size: 70px; font-weight: 800; line-height: 1.1; margin-bottom: 30px;}
        .h-desc { font-size: 26px; font-weight: 300; color:rgba(255,255,255,0.8); line-height: 1.6; max-width: 900px;}
        .phones { position:relative; width:100%; height:600px; margin-top: 50px; }
        .phone { position:absolute; width: 380px; height: 800px; }
        .p1 { left: 50%; transform: translateX(-50%) rotate(0deg); z-index:3; }
        .p2 { left: 10%; transform: rotate(-15deg); z-index:2; opacity:0.6; filter:blur(2px);}
        .p3 { right: 10%; transform: rotate(15deg); z-index:1; opacity:0.6; filter:blur(2px);}
        .p-c1 { background: url('../../screenshots/4-mobile-todas-abas-fechadas-full.png') top center/100% no-repeat; }
        .p-c2 { background: url('../../screenshots/3-mobile-menu-aberto-full.png') top center/100% no-repeat; }
        .p-c3 { background: url('../../screenshots/2-mobile-menu-fechado-full.png') top center/100% no-repeat; }
      </style></head><body>
      <div class="bg-img"></div><div class="overlay" style="background: linear-gradient(180deg, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.5) 100%);"></div><div class="glow"></div>
      <div class="content">
        <div class="header">
          <div class="h-tag">Ideia & Planejamento</div>
          <div class="h-title">A estratégia por trás do Layout</div>
          <div class="h-desc">Para o projeto da Happy Play Dogs, o objetivo central foi criar uma presença digital que transmitisse confiança, cuidado e alegria. Estruturamos a informação focando primeiro na experiência Mobile, garantindo fluidez e rápida conversão.</div>
        </div>
        <div class="phones">
          <div class="phone p2"><div class="p-c2" style="width:100%; height:100%;"></div></div>
          <div class="phone p3"><div class="p-c3" style="width:100%; height:100%;"></div></div>
          <div class="phone p1"><div class="p-c1" style="width:100%; height:100%;"></div></div>
        </div>
      </div>
      </body></html>
    \`
  },
  {
    name: '04-adaptacao',
    html: \`
      <!DOCTYPE html><html><head><style>
        \${baseStyle}
        .center-text { text-align:center; padding: 50px 0 100px; }
        .t-big { font-size: 80px; font-weight: 800; line-height: 1; margin-bottom:20px; }
        .t-big span { color: #0a650a; }
        .t-sub { font-size: 28px; font-weight: 300; color:rgba(255,255,255,0.7); }
        .mockups { display:flex; justify-content:center; align-items:flex-end; gap: -50px; position:relative; }
        .browser { width: 750px; height: 500px; z-index:1; }
        .phone { width: 280px; height: 600px; z-index:5; transform: translate(-80px, 50px); border-width:8px;}
        .b-content { height: 455px; background: url('../../screenshots/1-desktop-full.png') center center/cover; }
        .p-content { background: url('../../screenshots/3-mobile-menu-aberto-full.png') top center/100% no-repeat; width:100%; height:100%;}
      </style></head><body>
      <div class="bg-img"></div><div class="overlay"></div><div class="glow"></div>
      <div class="content">
        <div class="center-text">
          <div class="t-big">100% <span>Adaptável</span></div>
          <div class="t-sub">A versão mobile espelha o tom da marca com navegação imersiva e CTA forte. Performance intacta em qualquer tela.</div>
        </div>
        <div class="mockups">
          <div class="browser">
            <div class="b-top"><div class="dot d-r"></div><div class="dot d-y"></div><div class="dot d-g"></div></div>
            <div class="b-content"></div>
          </div>
          <div class="phone">
            <div class="p-content"></div>
          </div>
        </div>
      </div>
      </body></html>
    \`
  },
  {
    name: '05-decisoes',
    html: \`
      <!DOCTYPE html><html><head><style>
        \${baseStyle}
        .header { margin-bottom: 80px; text-align:center; }
        .h-tag { font-size: 20px; font-weight: 700; color: rgba(255,255,255,0.5); letter-spacing: 4px; text-transform:uppercase; margin-bottom: 20px;}
        .h-title { font-size: 70px; font-weight: 800; line-height: 1.1; margin-bottom: 30px;}
        .colors { display:flex; flex-direction:column; gap:30px; }
        .color-row { display:flex; gap:30px; align-items:center; background:rgba(255,255,255,0.03); padding:30px; border-radius:30px; border:1px solid rgba(255,255,255,0.05); backdrop-filter:blur(10px);}
        .c-circle { width:120px; height:120px; border-radius:50%; flex-shrink:0; box-shadow: 0 10px 30px rgba(0,0,0,0.5);}
        .c-info { flex:1; }
        .c-title { font-size: 32px; font-weight: 800; margin-bottom:10px; }
        .c-desc { font-size: 20px; font-weight: 300; color:rgba(255,255,255,0.7); line-height:1.5; }
        .bg-img { filter: contrast(1.1) saturate(1.2) blur(10px); opacity:0.4;}
      </style></head><body>
      <div class="bg-img"></div><div class="overlay"></div><div class="glow"></div>
      <div class="content">
        <div class="header">
          <div class="h-tag">Decisões de Design</div>
          <div class="h-title">Cores que Comunicam</div>
        </div>
        <div class="colors">
          <div class="color-row">
            <div class="c-circle" style="background:#0a650a;"></div>
            <div class="c-info"><div class="c-title">Natureza & Saúde (#0A650A)</div><div class="c-desc">Verde predominante para remeter a áreas externas, saúde veterinária e bem-estar animal.</div></div>
          </div>
          <div class="color-row">
            <div class="c-circle" style="background:#ffc700;"></div>
            <div class="c-info"><div class="c-title">Alegria & Destaque (#FFC700)</div><div class="c-desc">Amarelo vibrante usado estrategicamente em botões de conversão e pontos focais de atenção.</div></div>
          </div>
          <div class="color-row">
            <div class="c-circle" style="background:#004aad;"></div>
            <div class="c-info"><div class="c-title">Confiança (#004AAD)</div><div class="c-desc">Tom azul profundo para transmitir a seriedade estrutural e o cuidado médico.</div></div>
          </div>
        </div>
      </div>
      </body></html>
    \`
  },
  {
    name: '06-cta',
    html: \`
      <!DOCTYPE html><html><head><style>
        \${baseStyle}
        .center { display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; padding:100px; position:relative; z-index:10;}
        .super-title { font-size: 110px; font-weight: 800; line-height: 1.1; margin-bottom: 40px; letter-spacing:-4px;}
        .super-title span { color: #0a650a; }
        .super-sub { font-size: 32px; font-weight: 300; color: rgba(255,255,255,0.7); margin-bottom: 80px; max-width:800px; line-height:1.4;}
        .btn { background: #fff; color: #000; padding: 40px 90px; border-radius: 100px; font-size: 32px; font-weight: 800; text-decoration:none; display:inline-block; transition:0.3s; box-shadow: 0 20px 60px rgba(255,255,255,0.2);}
        .arrow { font-size: 40px; font-weight:300; margin-top:50px; opacity:0.5;}
      </style></head><body>
      <div class="bg-img"></div><div class="overlay"></div><div class="glow"></div>
      <div class="center">
        <div class="super-title">Quer um projeto<br><span>incrível assim?</span></div>
        <div class="super-sub">Se a sua empresa precisa transmitir autoridade e converter mais clientes, você precisa de um design estratégico.</div>
        <div class="btn">Solicite um Orçamento</div>
      </div>
      </body></html>
    \`
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
    await page.screenshot({ path: path.join(artsDir, slide.name + '.png') });
  }

  await browser.close();
  console.log('Artes de Portfolio geradas com sucesso!');
})();
