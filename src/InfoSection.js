//Nombre del archivo : InfoSection.js
//Versión :1.0.3
//Fecha de creación:12-08-2024
//Fecha de modificación:15-08-2024
//Descripción:Diseño que se implementa en el Inicio
import React from 'react';
import './InfoSection.css';

function InfoSection({ title, content, image }) {
  return (
    <section className="info-section">
      <div className="image-container">
        <img src={image} alt="Descripción de la imagen" />
      </div>
      <div className="text-container">
        <h3>{title}</h3>
        <p>{content}</p>
        <a href='./Contact'>Empieza Ahora...</a>
      </div>
    </section>
  );
}

export default InfoSection;
