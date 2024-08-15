//Nombre del archivo : Footer.js
//Versión :1.0.0
//Fecha de creación:12-08-2024
//Fecha de modificación:12-08-2024
//Descripción:Diseño footer de la pagina con informacion de las redes, etc.
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#" className="social-icon">Facebook</a>
        <a href="#" className="social-icon">Twitter</a>
        <a href="#" className="social-icon">Instagram</a>
      </div>
      <div className="footer-menu">
      <a href="./Inicio" className="footer-link">Inicio</a>
        <a href="./About" className="footer-link">Actividades</a>
        <a href="./Contact" className="footer-link">Contacto</a>
        <a href="./Acceder" className="footer-link">Acceder</a>
      </div>
      <div className="footer-info">
        <img src="/path/to/logo.png" alt="Logo" className="footer-logo" />
        <p className="footer-text">© 2024 Curso de Lenguaje de Señas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
