//Nombre del archivo : AboutCard.js
//Versión :1.0.2
//Fecha de creación:12-08-2024
//Fecha de modificación:14-08-2024
//Descripción:Creacion de los tarjetas que presenta las actividades 

import React, { useState } from 'react'; // Importar useState
import './Abouttable.css';
import PropTypes from 'prop-types';

// Componente StackIcons
const StackIcons = ({ data }) => {
    if (!Array.isArray(data)) {
      console.error('Expected an array for stack data');
      return null;
    }
  
    const icons = data.map((item) => (
      <div key={item} className="stack-item">
        {item}
      </div>
    ));
    return <div className="stack-icons">{icons}</div>;
  };
  
// Componente Card
const AboutCard = ({
  Titulo,
  image,
  stack,
  descripcion,
  button
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  const style = {
    img: {
      maxWidth: "400px"
    }
  };

  return (
    <div className="card-item">
      <div className="card hoverable">
        <div className="card-image waves-effect waves-block waves-light">
          <img style={style.img} className="activator" src={image} alt={Titulo} />
        </div>
        <div className="card-content">
          <div>
            <StackIcons data={stack} />
          </div>
          <span className="card-title grey-text text-darken-4">
            {Titulo}
          </span>
          <p className={`card-description ${isOpen ? 'open' : ''}`}>{descripcion}</p>
          <a href="./Acceder" target="_blank" rel="noopener noreferrer" className="more-info">
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};

AboutCard.propTypes = {
  Titulo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  descripcion: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

// Datos adicionales para las tarjetas
const additionalData = [
    {
        Titulo: "Tutorial",
        stack: ["Introducción"],
        descripcion:
          "Aprende con: Videos, contenido de ejercicios y mas... ",
        button: "More Info",
        image:
          "https://img.freepik.com/vector-premium/personas-que-usan-lenguaje-senas-comunicarse_697837-842.jpg",
      },
      {
        Titulo: "Actividad 1",
        stack: ["A", "B", "C"],
        descripcion:
          "Aprende con: Videos, contenido de ejercicios y interactua con IA para aprender mas.. ",
        button: "More Info",
        image:
          "https://img.freepik.com/vector-premium/personas-que-usan-lenguaje-senas-comunicarse_697837-842.jpg",
      },
      {
        Titulo: "Actividad 2",
        stack: ["D", "E"],
        descripcion:
          "Aprende con: Videos, contenido de ejercicios y interactua con IA para aprender mas.. ",
        button: "More Info",
        image:
          "https://img.freepik.com/vector-premium/personas-que-usan-lenguaje-senas-comunicarse_697837-842.jpg",
      },
      {
        Titulo: "Actividad 4",
        stack: ["F", "G"],
        descripcion:
          "Aprende con: Videos, contenido de ejercicios y interactua con IA para aprender mas.. ",
        button: "More Info",
        image:
          "https://img.freepik.com/vector-premium/personas-que-usan-lenguaje-senas-comunicarse_697837-842.jpg",
      },
      {
        Titulo: "Actividad 5",
        stack: ["H", "I", "J"],
        descripcion:
          "Aprende con: Videos, contenido de ejercicios y interactua con IA para aprender mas.. ",
        button: "More Info",
        image:
          "https://img.freepik.com/vector-premium/personas-que-usan-lenguaje-senas-comunicarse_697837-842.jpg",
      },
      {
        Titulo: "Actividad 6",
        stack: ["K", "M", "L"],
        descripcion:
          "Aprende con: Videos, contenido de ejercicios y interactua con IA para aprender mas.. ",
        button: "More Info",
        image:
          "https://img.freepik.com/vector-premium/personas-que-usan-lenguaje-senas-comunicarse_697837-842.jpg",
      }
];

const App = () => {
  return (
    <div className="card-container">
      {additionalData.map((item, idx) => <AboutCard key={idx} {...item} />)}
    </div>
  );
};

export default App;
