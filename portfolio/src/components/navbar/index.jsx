import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import "./styles.css";

const Navbar = () => {
  const [isMenuOpen, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const isMobile = useMediaQuery({
    query: "(max-width: 768px), (pointer: coarse)",
  });

  const toggleMenu = () => {
    setOpenMenu(!isMenuOpen);
  };

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
      {((isMobile && isMenuOpen) || !isMobile) && 
        <ul className={`nav-links  ${scrolled ? "scrolled" : ""} ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#banner">Início</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      }
        {isMobile && 
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;