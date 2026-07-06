import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import './Contact.css';
import whatsappIcon from '../assets/logo apps/image copy 2.png';
import instagramIcon from '../assets/logo apps/image copy 3.png';

const Contact = () => {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="contact-card">
          <div className="contact-info">
            <div className="section-title" style={{ alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <span className="section-subtitle">Fale Conosco</span>
              <h2 style={{ color: 'var(--text-light)' }}>Agende uma avaliação hoje mesmo.</h2>
            </div>
            
            <p className="contact-text">
              Estamos prontos para receber o seu melhor amigo. Entre em contato 
              agora e tire todas as suas dúvidas com a nossa equipe.
            </p>
            
            <div className="contact-methods">
              <a href="https://wa.me/5511991249837" target="_blank" rel="noreferrer" className="contact-link">
                <img src={whatsappIcon} alt="WhatsApp" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                (11) 99124-9837
              </a>
              <a href="tel:+551133333333" className="contact-link">
                <Phone size={24} />
                (11) 3333-3333
              </a>
              <a href="mailto:contato@happyplaydog.com.br" className="contact-link">
                <Mail size={24} />
                contato@happyplaydog.com.br
              </a>
              <a href="https://www.instagram.com/happyplaydogs/" target="_blank" rel="noreferrer" className="contact-link">
                <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                @happyplaydogs
              </a>
            </div>
          </div>
          
          <div className="contact-form-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.75rem' }}>Pronto para falar conosco?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Nossa equipe está disponível no WhatsApp para tirar todas as suas dúvidas e agendar uma avaliação.
            </p>
            <a href="https://wa.me/5511991249837?text=Ol%C3%A1!%20Estou%20pronto%20para%20falar%20com%20a%20equipe%20da%20Happy%20Play%20Dogs." target="_blank" rel="noreferrer" className="btn btn-accent w-full" style={{ padding: '1.5rem', fontSize: '1.2rem', marginBottom: '1rem' }}>
              <img src={whatsappIcon} alt="WhatsApp" style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              Chamar no WhatsApp
            </a>
            <a href="https://wa.me/5511991249837?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20a%20avalia%C3%A7%C3%A3o%20do%20meu%20pet%20hoje%20mesmo!" target="_blank" rel="noreferrer" className="btn btn-outline w-full" style={{ padding: '1.5rem', fontSize: '1.2rem' }}>
              Agendar Avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
