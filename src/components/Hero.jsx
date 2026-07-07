import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import heroImage from '../assets/logo apps/hero.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background"></div>
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="badge">
            <Heart size={16} fill="currentColor" />
            <span>O segundo lar do seu melhor amigo</span>
          </div>
          <h1>
            Amor, diversão e <span className="highlight">segurança</span> para o seu pet.
          </h1>
          <p>
            Na Happy Play Dog, oferecemos um ambiente preparado para garantir que o 
            seu cão passe o dia feliz, socializando e gastando energia enquanto você 
            trabalha tranquilo.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/5511991249837?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20o%20meu%20pet." target="_blank" rel="noreferrer" className="btn btn-accent">
              Agendar Avaliação
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn-outline">
              Conheça o Espaço
            </a>
          </div>
        </div>
        <div className="hero-visual" style={{ position: 'relative' }}>
          <div className="image-wrapper">
            <img src={heroImage} alt="Cães Felizes" className="hero-main-image" />
          </div>
          <div className="floating-card">
            <span className="emoji">🐾</span>
            <div className="card-text">
              <strong>+100</strong>
              <span>Cães Felizes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
