import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    // Vite specific way to import multiple files dynamically
    const loadImages = async () => {
      try {
        const imageFiles = import.meta.glob('../assets/gallery/*.(png|jpg|jpeg|webp)', { eager: true });
        const loadedImages = Object.values(imageFiles).map(mod => mod.default);
        
        // If the folder is empty, use placeholders for visual representation
        if (loadedImages.length === 0) {
          setImages([null, null, null, null, null, null]);
        } else {
          setImages(loadedImages);
        }
      } catch (error) {
        console.error("Error loading gallery images:", error);
        setImages([null, null, null, null, null, null]);
      }
    };

    loadImages();
  }, []);

  const openLightbox = (index) => {
    // Only open if the image is not a placeholder
    if (images[index]) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">Momentos de Alegria</span>
          <h2>Galeria de Fotos</h2>
          <p style={{marginTop: '1rem', color: 'var(--text-muted)'}}>
            Confira a estrutura que preparamos com tanto carinho. (Adicione fotos na pasta <code>src/assets/gallery</code>)
          </p>
        </div>
        
        <div className="gallery-grid">
          {images.map((imgSrc, index) => (
            <div className="gallery-item" key={index} onClick={() => openLightbox(index)}>
              {imgSrc ? (
                <img src={imgSrc} alt={`Galeria ${index + 1}`} loading="lazy" />
              ) : (
                <div className="gallery-placeholder">
                  <span>Foto {index + 1}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          
          <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
            <ChevronLeft size={48} />
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightboxIndex]} alt={`Galeria Ampliada ${lightboxIndex + 1}`} />
          </div>
          
          <button className="lightbox-nav lightbox-next" onClick={nextImage}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
