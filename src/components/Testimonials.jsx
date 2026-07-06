import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana e o Thor (Golden Retriever)",
      text: "Eu tinha muito medo de deixar o Thor sozinho porque ele é muito ansioso. Desde que começou na Happy Play Dogs, ele volta pra casa cansado e super feliz. A equipe manda fotos o dia todo, me sinto muito segura!",
      rating: 5
    },
    {
      name: "Carlos e a Luna (Bulldog Francês)",
      text: "A melhor escolha que fiz. A Luna adora os dias de creche, aprendeu a socializar com outros cães e a estrutura é impecável. O banho deles também é maravilhoso, ela volta cheirosa que dá gosto.",
      rating: 5
    },
    {
      name: "Fernanda e o Max (Vira-lata)",
      text: "Eles tratam os cachorros como se fossem filhos deles. O cuidado, a atenção aos detalhes e o amor que a equipe tem é visível. Recomendo de olhos fechados para qualquer tutor.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-subtitle">Depoimentos</span>
          <h2>O que os tutores dizem sobre nós</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--secondary)" color="var(--secondary)" />
                ))}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {item.name.charAt(0)}
                </div>
                <strong>{item.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
