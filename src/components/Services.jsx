import React from 'react';
import { Home, Scissors, ShoppingBag, Moon, Stethoscope } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <ShoppingBag size={40} />,
      title: "Loja Pet",
      description: "Diversos produtos para cães e gatos, sempre buscando oferecer qualidade e as melhores opções para os tutores."
    },
    {
      icon: <Scissors size={40} />,
      title: "Centro Estético",
      description: "Banho, tosas específicas por raça, hidratações e revitalização de pelagem com atendimento personalizado."
    },
    {
      icon: <Home size={40} />,
      title: "Creche (Daycare)",
      description: "Destinada a cães de porte pequeno. Rotina com atividades, socialização, enriquecimento ambiental e monitores."
    },
    {
      icon: <Moon size={40} />,
      title: "Hotelzinho",
      description: "Oferecemos hospedagem garantindo conforto, segurança e muito carinho durante toda estadia do seu pet."
    },
    {
      icon: <Stethoscope size={40} />,
      title: "Clínica Veterinária",
      description: "Atendimento veterinário para consultas, vacinação e acompanhamento da saúde, no particular e convênio."
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
