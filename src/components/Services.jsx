import React from 'react';
import { Home, Camera, Scissors, Award } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: "Creche & Daycare",
      description: "Um dia inteiro de atividades recreativas, gasto de energia e interação controlada com outros cães."
    },
    {
      icon: <Award size={40} />,
      title: "Hotelzinho",
      description: "Hospedagem confortável e segura para quando você precisar viajar, com a rotina que seu pet já está acostumado."
    },
    {
      icon: <Scissors size={40} />,
      title: "Estética & Banho",
      description: "Serviços de banho relaxante e tosa para deixar seu melhor amigo limpinho e cheiroso após um dia de diversão."
    },
    {
      icon: <Camera size={40} />,
      title: "Acompanhamento",
      description: "Fotos e vídeos diários para você matar a saudade e acompanhar a rotina de diversão do seu pet."
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">O que oferecemos</span>
          <h2>Estrutura & Serviços</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
