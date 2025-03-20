import React from "react";
import "./styles.css";

const Banner = () => {
  return (
    <section id="banner" className="banner">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="content">
        <div className="text">
          <h1>Christian Oliveira</h1>
          <h2>Desenvolvedor de Software</h2>
        </div>
        <img src="images/retrato.png" alt="Christian Oliveira" className="retrato" />
      </div>
    </section>
  );
};

export default Banner;