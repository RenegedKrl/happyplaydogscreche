import React, { useState, useRef, useCallback } from 'react';
import antes from '../assets/antes e dpois/ANTES.jpeg';
import depois from '../assets/antes e dpois/DEPOIS.jpeg';
import './BeforeAfter.css';

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e) => { if (isDragging.current) updateSlider(e.clientX); };

  const handleTouchStart = () => { isDragging.current = true; };
  const handleTouchEnd = () => { isDragging.current = false; };
  const handleTouchMove = (e) => { if (isDragging.current) updateSlider(e.touches[0].clientX); };

  return (
    <section id="transformacoes" className="section">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">Resultados Reais</span>
          <h2>Antes &amp; Depois</h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            Arraste o controle para ver a transformação do nosso trabalho.
          </p>
        </div>

        <div className="before-after-wrapper">
          <div
            className="before-after-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
          >
            {/* Imagem DEPOIS (fundo completo) */}
            <div className="ba-after">
              <img src={depois} alt="Depois" draggable={false} />
              <span className="ba-label ba-label-after">DEPOIS</span>
            </div>

            {/* Imagem ANTES (cortada pelo slider) */}
            <div className="ba-before" style={{ width: `${sliderPos}%` }}>
              <img src={antes} alt="Antes" draggable={false} />
              <span className="ba-label ba-label-before">ANTES</span>
            </div>

            {/* Handle do slider */}
            <div className="ba-slider" style={{ left: `${sliderPos}%` }}>
              <div className="ba-slider-line" />
              <div className="ba-slider-handle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
