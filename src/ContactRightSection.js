// RightSection.js
//Nombre del archivo : RightSection.js
//Versión :1.0.3
//Fecha de creación:13-08-2024
//Fecha de modificación:15-08-2024
//Descripción:Diseño de la parte de Right de contacto
import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

function ContactRightSection() {
  return (
    <div className="right-section">
      <h2>Contactanos</h2>
      <p className='p2'>Buscas saber mas sobre nosotros, por favor escribemos.</p>
      <ContactForm />
    </div>
  );
}

export default ContactRightSection;
