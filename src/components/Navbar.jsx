import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamically load logo if it exists in the folder
  useEffect(() => {
    const logos = import.meta.glob('../assets/logo/*.(png|jpg|jpeg|svg)', { eager: true });
    const logoPaths = Object.values(logos).map(mod => mod.default);
    if (logoPaths.length > 0) {
      setLogo(logoPaths[0]);
    }
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Estrutura & Serviços', href: '#services' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Localização', href: '#location' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo">
          {logo ? (
            <img src={logo} alt="Happy Play Dog Logo" className="logo-img" />
          ) : (
            <span className="logo-text">Happy Play Dog</span>
          )}
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/5511991249837?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas." target="_blank" rel="noreferrer" className="btn btn-primary nav-btn">
            <Phone size={18} />
            Contato
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="https://wa.me/5511991249837?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
