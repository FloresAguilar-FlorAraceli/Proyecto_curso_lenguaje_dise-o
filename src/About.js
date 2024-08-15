// src/About.js
//Nombre del archivo : About.js
//Versión :1.0.3
//Fecha de creación:12-08-2024
//Fecha de modificación:15-08-2024
//Descripción:Es uno archivo para la vista de las actividades del curso del lenguaje.

import React from 'react';
import Aboutheader from './Aboutheader';
import AboutCard from './AboutCard';

const About = () => {
  const data = [
    {
      id: 0,
      header: 'Integración con IA',
      body: 'Reconocimiento de Lenguaje de Señas mediante IA, analiza los gestos realizados por camara. ',
      colour: '#242846',
      img: 'https://www.uninorte.edu.co/documents/14120459/35987607/charla-lenguaje-de-senas.png/a65a6126-dfbb-5222-6b32-6e4b29c1713f?t=1687275926392'
    },
    {
      id: 1,
      header: 'Material Educativo',
      body: 'Material educativo adaptado a las necesidades personas, haciendo el proceso más eficiente.',
      colour: '#ba9077',
      img: 'https://noticias.unsam.edu.ar/wp-content/uploads/2018/03/lsa-01-1070x660.jpg'
    },
    {
      id: 2,
      header: 'Práctica Repetitiva y Exacta',
      body: 'Los estudiantes pueden practicar signos repetidamente con una guía precisa, mejorando la exactitud y fluidez del lenguaje de señas.',
      colour: '#1ABC9C',
      img: 'https://www.uv.mx/edu-cont/files/2023/11/Entrada-de-la-Caratula_Taller-Lengua-de-Senas-Mexicana.png'
    },
    {
      id: 3,
      header: 'Visualización Clara',
      body: 'Pueden ver ejemplos claros y precisos de los signos, ayudando a comprender mejor el lenguaje de señas.',
      colour: '#C0392B',
      img: 'https://conecta.tec.mx/sites/default/files/styles/header_full/public/2020-06/ban%CC%83uelos_1.jpg.webp?itok=4Di_581A'
    },
    {
      id: 4,
      header: 'Preparación para el Futuro',
      body: 'Prepara a los estudiantes para el uso de tecnologías emergentes en el campo del lenguaje de señas y la comunicación en general.',
      colour: '#513B56',
      img: 'https://crehana-blog.imgix.net/media/filer_public/2b/5d/2b5d71e0-1f3c-4528-8d37-50d2dc7a5d80/taller-de-lenguaje-de-signos.jpg?auto=format&q=50'
    }
  ];

  return (
    <div>
      <Aboutheader data={data} />
      <AboutCard data={data} />
    </div>
  );
};

export default About;
