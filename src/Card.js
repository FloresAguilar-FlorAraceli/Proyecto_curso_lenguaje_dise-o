//Nombre del archivo : Card.js
//Versión :1.0.3
//Fecha de creación:12-08-2024
//Fecha de modificación:15-08-2024
//Descripción:Diseño de la tarjeta de inicio
import React from 'react';
import './Card.css'; // Asegúrate de que el archivo CSS para la tarjeta esté en el mismo directorio

const Card = ({ title, image, content }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;
