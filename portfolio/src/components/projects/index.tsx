import React from "react";
import "./styles.css";

const Projetos = () => {
  return (
    <section id="projetos" className="projetos">
      <h2>Projetos</h2>
      <div className="carrossel">
        {/* Exemplo de card */}
        <div className="card">
          <img src="/assets/images/projeto1.png" alt="Projeto 1" />
          <h3>Título do Projeto</h3>
          <p>Descrição do projeto...</p>
          <p>Tecnologias: React, CSS, JavaScript</p>
          <a href="#" target="_blank" rel="noopener noreferrer">Ver repositório</a>
        </div>
      </div>
    </section>
  );
};

export default Projetos;