import React from "react";
import "./styles.css";

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <h2>Contato</h2>
      <form>
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contato;