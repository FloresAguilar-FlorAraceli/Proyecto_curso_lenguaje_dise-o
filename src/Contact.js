//Nombre del archivo : Contact.js
//Versión :1.0.3
//Fecha de creación:13-08-2024
//Fecha de modificación:15-08-2024
//Descripción:Archivo que conecta a los demas archivos para la parte de contacto
import React from 'react';
import LeftSection from './ContactLeftSection';
import RightSection from './ContactRightSection';

function Contact() {
  return (
    <div className="Contact">
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default Contact;
