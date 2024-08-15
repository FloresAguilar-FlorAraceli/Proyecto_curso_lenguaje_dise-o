//Nombre del archivo : Apps.js
//Versión :1.0.0
//Fecha de creación:12-08-2024
//Fecha de modificación:12-08-2024
//Descripción:Archivo que presenta la pagina y que la conecta con los demas archivos y el menu.

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TabLink from './TabLink';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Acceder from './Acceder';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import './Card.css'; // Asegúrate de que tus estilos estén importados
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Logo en la parte izquierda */}
          <div className="logo">MyLogo</div>
          
          {/* Menú de navegación en la parte derecha */}
          <nav>
            <ul className="tabs">
              <TabLink to="/" path="/">Inicio</TabLink>
              <TabLink to="/about" path="/about">Actividades</TabLink>
              <TabLink to="/contact" path="/contact">Contacto</TabLink>
              <TabLink to="/acceder" path="/acceder">Acceder</TabLink>
            </ul>
          </nav>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/acceder" element={<Acceder />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
