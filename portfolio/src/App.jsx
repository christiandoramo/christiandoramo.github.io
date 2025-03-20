import React, { useState } from "react";
import "./index.css";
import Navbar from './components/navbar'
import Experiencia from './components/experience'
import Projetos from './components/projects'
import Contato from './components/contact'
import Banner from './components/banner'
import Footer from './components/footer'


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={(darkMode ? "dark-mode" : "")}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Banner />
      <Experiencia />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
};

export default App;