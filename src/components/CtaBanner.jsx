import React from 'react';
import whatsappIcon from '../assets/logo apps/image copy 2.png';
import './CtaBanner.css';

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-content">
          <h2>Seu pet merece esse cuidado!</h2>
          <p>Fale com a nossa equipe no WhatsApp e garanta a vaga do seu melhor amigo.</p>
          <a href="https://wa.me/5511991249837?text=Ol%C3%A1!%20Vi%20no%20site%20que%20meu%20pet%20merece%20esse%20cuidado%20e%20quero%20falar%20com%20a%20equipe." target="_blank" rel="noreferrer" className="btn btn-accent btn-large">
            <img src={whatsappIcon} alt="WhatsApp" style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
