import React from 'react';
import { ShieldCheck, Clock, Smile } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Ambiente Seguro",
      description: "Monitoramento 24h e espaços adaptados para evitar qualquer risco ao seu pet."
    },
    {
      icon: <Clock size={32} />,
      title: "Rotina Estruturada",
      description: "Equilíbrio perfeito entre brincadeiras, socialização e momentos de descanso."
    },
    {
      icon: <Smile size={32} />,
      title: "Profissionais Capacitados",
      description: "Nossa equipe é treinada para entender a linguagem canina e garantir bem-estar."
    }
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
             <div className="placeholder-image-square">
               <span>Foto da Equipe/Espaço</span>
             </div>
             <div className="experience-badge">
                <span className="years">5+</span>
                <span className="text">Anos de<br/>Experiência</span>
             </div>
          </div>
          
          <div className="about-content">
            <div className="section-title" style={{ alignItems: 'flex-start', marginBottom: '2rem' }}>
              <span className="section-subtitle">Sobre Nós</span>
              <h2>Muito mais que uma creche, um segundo lar.</h2>
            </div>
            
            <p className="about-description">
              A <strong>Happy Play Dog</strong> nasceu da paixão por cães e da necessidade 
              de proporcionar um ambiente onde eles pudessem ser eles mesmos. 
              Sabemos o quão difícil é deixar seu melhor amigo em casa sozinho o dia todo. 
              Aqui, ele terá atenção, cuidado e muita diversão.
            </p>
            
            <div className="features-list">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
