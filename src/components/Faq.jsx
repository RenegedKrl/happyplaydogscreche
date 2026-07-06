import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Faq.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quais vacinas meu cachorro precisa ter para frequentar a creche?",
      answer: "Para a segurança de todos os cães, exigimos que a carteirinha de vacinação esteja em dia com as vacinas V8/V10, Raiva, Gripe e Giárdia. Além disso, controle de pulgas, carrapatos e vermífugo precisam estar atualizados."
    },
    {
      question: "Vocês aceitam qualquer raça e tamanho?",
      answer: "Sim! Aceitamos todos os portes e raças. No entanto, todos os cães passam por uma avaliação comportamental obrigatória antes de começarem, para garantirmos que eles se sentem confortáveis e não apresentam agressividade no convívio com outros pets."
    },
    {
      question: "O que acontece se meu cachorro não se adaptar ou brigar?",
      answer: "Nossos monitores são treinados em comportamento animal para identificar qualquer sinal de estresse antes que uma briga ocorra. Caso seu cão precise de um tempo, temos áreas de descanso individuais. Se ele definitivamente não se adaptar à rotina de creche (o que é normal para alguns cães), conversaremos com você com toda transparência."
    },
    {
      question: "Como funciona a alimentação na creche?",
      answer: "A alimentação é fornecida pelo tutor. Você deve trazer a porção diária do seu pet (ração ou alimentação natural). Nós servimos nos horários combinados em baias individuais, para evitar qualquer tipo de disputa por comida entre os cães."
    },
    {
      question: "Vou receber notícias do meu pet durante o dia?",
      answer: "Com certeza! Sabemos que a saudade aperta, por isso enviamos fotos e vídeos através do WhatsApp durante as atividades diárias, para que você acompanhe a rotina de diversão e relaxe no trabalho."
    }
  ];

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-subtitle">Tire suas dúvidas</span>
          <h2>Perguntas Frequentes</h2>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="faq-icon" size={24} />
                ) : (
                  <ChevronDown className="faq-icon" size={24} />
                )}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
