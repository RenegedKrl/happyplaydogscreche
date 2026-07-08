import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="section">
      <div className="container">
        <div className="location-grid">
          <div className="location-content">
            <div className="section-title" style={{ alignItems: 'flex-start', marginBottom: '2rem' }}>
              <span className="section-subtitle">Onde Estamos</span>
              <h2>Fácil acesso e excelente infraestrutura.</h2>
            </div>
            
            <p className="location-description">
              Estamos localizados em um ponto estratégico, com fácil acesso para 
              deixar e buscar o seu pet no caminho do trabalho.
            </p>
            
            <div className="address-card">
              <div className="address-icon">
                <MapPin size={24} />
              </div>
              <div className="address-text">
                <h4>Happy Play Dogs</h4>
                <p>R. Salete, 294 - Santana</p>
                <p>São Paulo - SP, 02016-001</p>
              </div>
            </div>
            
            <a href="https://maps.app.goo.gl/t7PzNXhH9xvmPq1B8" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '2rem' }}>
              <Navigation size={18} />
              Como Chegar
            </a>
          </div>
          
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8684703323984!2d-46.6269845!3d-23.501246599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7fcdec6fab7%3A0xf64bdf4984788ee5!2sHappy%20Play%20Dogs!5e0!3m2!1spt-BR!2sbr!4v1783297960769!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
