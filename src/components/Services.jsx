import React from 'react';
import { Home, Scissors, ShoppingBag, Moon, Stethoscope } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <ShoppingBag size={40} />,
      title: "Loja Pet",
    },
    {
      icon: <Scissors size={40} />,
      title: "Centro Estético",
    },
    {
      icon: <Home size={40} />,
      title: "Creche",
    },
    {
      icon: <Moon size={40} />,
      title: "Hotelzinho",
    },
    {
      icon: <Stethoscope size={40} />,
      title: "Clínica Veterinária",
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Serviços</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
