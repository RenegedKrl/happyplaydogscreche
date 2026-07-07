import React from 'react';
import { ShieldCheck, Clock, Smile } from 'lucide-react';
import aboutImage from '../assets/gallery/WhatsApp Image 2026-07-06 at 14.45.21.jpeg';
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
             <img src={aboutImage} alt="Nossa Equipe e Espaço" className="about-main-image" />
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
              A <strong>Happy Play Dogs</strong> é um espaço completo voltado ao bem-estar e à qualidade de vida dos
              pets, oferecendo diversos serviços em um só lugar. Nosso propósito é proporcionar uma experiência completa 
              para os tutores e seus pets, reunindo cuidado, saúde e diversão em um único lugar!
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
