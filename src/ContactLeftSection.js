// LeftSection.js
//Nombre del archivo : LeftSection.js
//Versión :1.0.3
//Fecha de creación:13-08-2024
//Fecha de modificación:15-08-2024
//Descripción:Diseño de la parte de Left de contacto
import React from 'react';
import './Contact.css';

function ContactLeftSection() {
  return (
    <div className="left-section">
      <div className="content">
        <h1>Curso de Lenguaje de Señas</h1>
        <p className="p">Aprenderás aplicar los fundamentos de la lengua de señas dentro del contexto mexicano, con el fin de fomentar la inclusión, la comunicación y la interacción con las personas que posean alguna discapacidad auditiva. Es fácil de aprender y solo se requiere tener conocimientos elementales. </p>
        <button className="learn-more">Mas Info...</button>
      </div>
    </div>
  );
}

export default ContactLeftSection;
