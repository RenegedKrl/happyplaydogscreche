import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CtaBanner from './components/CtaBanner';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CtaBanner />
        <Testimonials />
        <Gallery />
        <Faq />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
