import React, { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import whatsappIcon from '../assets/logo apps/image copy 2.png';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="floating-whatsapp-container">
      {/* Desktop Floating Button */}
      <div className="desktop-floating-action">
        {showMessage && (
          <div className="whatsapp-tooltip animate-fade-in">
            <span>Vamos marcar um dia na creche?</span>
            <button className="close-tooltip" onClick={(e) => { e.stopPropagation(); setShowMessage(false); }}>
              <X size={14} />
            </button>
          </div>
        )}
        <a 
          href="https://wa.me/5511991249837?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20creche%20para%20meu%20cachorro." 
          target="_blank" 
          rel="noreferrer" 
          className="floating-whatsapp-btn pulse-animation"
        >
          <img src={whatsappIcon} alt="WhatsApp" style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
        </a>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className="mobile-bottom-bar">
        <a href="tel:+551133333333" className="mobile-bar-btn btn-call">
          <Phone size={20} />
          Ligar
        </a>
        <a 
          href="https://wa.me/5511991249837?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20creche%20para%20meu%20cachorro." 
          target="_blank" 
          rel="noreferrer" 
          className="mobile-bar-btn btn-whatsapp"
        >
          <img src={whatsappIcon} alt="WhatsApp" style={{ width: '20px', height: '20px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
