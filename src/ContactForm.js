// ContactForm.js
//Nombre del archivo : ContactForm.js
//Versión :1.0.3
//Fecha de creación:13-08-2024
//Fecha de modificación:15-08-2024
//Descripción:Formulario para la parte de contacto de la pagina

import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="Nombre"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
      />
      
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="Asunto"
        placeholder="Asunto"
        value={formData.subject}
        onChange={handleChange}
      />
      <textarea
        name="Mensaje"
        placeholder="Mensaje"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
