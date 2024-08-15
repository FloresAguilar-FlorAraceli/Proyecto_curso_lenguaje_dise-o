//Nombre del archivo : Home.js
//Versión :1.0.3
//Fecha de creación:12-08-2024
//Fecha de modificación:15-08-2024
//Descripción:Inicio de la pagina con imformacion del curso y lenguaje de señas
import React from 'react';
import './Home.css';
import Card from './Card'; // Importa Card correctamente
import InfoSection from './InfoSection';
import { Carousel } from 'react-responsive-carousel'; // Asegúrate de importar el Carousel si usas esta librería
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import './HomeCarousel.css';

function Home() {
  const text = "Lenguaje de Señas";

  return (
    <div className="container">
      <header className="header">
        <img
          src="https://fondosmil.co/fondo/70482.jpg" // Reemplaza con la URL de tu imagen
          alt="Header"
          className="header-image"
        />
        <div className="animation-container">
          <h1 className="animated-text">
            {text.split('').map((char, index) => (
              <span key={index} style={{ '--i': index }}>{char}</span>
            ))}
          </h1>
        </div>
      </header>
      <div className="title">Aprende con mayor facilidad y entreteniemiento, nuestro curso...</div>
      <div className="cards-container">
        <Card 
        title="MODAVILIDAD 100% VIRTUAL"
        image="https://cdn-icons-png.flaticon.com/512/9913/9913563.png "
        content="El contenido está disponible las 24/7 horas del día para que puedas estudiar en tu propio horario." />

        <Card 
        title="INTEGRACION IA"
        image="https://cdn-icons-png.flaticon.com/512/11048/11048212.png"
        content="Se busca que los cursos sean mas flexibles y interactivos." />

        <Card 
        title="TITULO A CERTIFICAR"
        image="https://cdn-icons-png.flaticon.com/512/201/201614.png"
        content="Interprete de lengua de señas Mexicana." />
      </div>
      <InfoSection 
        title="Lenguaje de Señas" 
        content="Es una herramienta vital para garantizar la igualdad, la inclusión, y la comunicación efectiva para millones de personas en todo el mundo. Promueve una sociedad más justa y accesible para todos.." 
        image="https://images.contentstack.io/v3/assets/blt3db103350eb1264b/blt5977edcb68bfdb18/5e2086b3e3340f1154e33f64/iStock-536655532_copy.jpg?auto=webp&format=pjpg&quality=80&width=1200&height=769&fit=crop" 
      />

     <div className="title">¿Pórque es importante?</div>

      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000} // Cambia el slide cada 7 segundos
        transitionTime={1500} // Duración de la transición en 1.5 segundos
        stopOnHover
      >
        <div className="carousel-slide">
          <div className="carousel-content">
            <img src="https://st5.depositphotos.com/1001599/63448/v/450/depositphotos_634482558-stock-illustration-sign-language-tutor-isolated-cartoon.jpg" />
            <p>Comprender los principios de la comunicación en lengua de señas.</p>
          </div>
          <div className="carousel-content">
            <img src="https://lensebiobio.cl/wp-content/uploads/2021/09/LENSE-banner-1-1024x640.png" />
            <p>Enseñar y aprender lenguaje de señas promueve la igualdad de oportunidades.</p>
          </div>
          <div className="carousel-content">
            <img src="https://www.shutterstock.com/image-vector/international-day-sign-languages-pair-260nw-2453198587.jpg" />
            <p>Asimilar el vocabulario básico e intermedio del lengua de señas mexicana.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-content">
            <img src="https://is8.com.ar/wp-content/uploads/2024/02/8608652-1024x1024.jpg" />
            <p>Puede mejorar habilidades cognitivas como la memoria, la percepción visual, y la atención.</p>
          </div>
          <div className="carousel-content">
            <img src="https://cdn.dribbble.com/users/3962867/screenshots/16794198/media/1f891a7c58c124a56c467ad363d4321e.gif" />
            <p>Conocer las reglas léxicas del lengua de señas.</p>
          </div>
          <div className="carousel-content">
            <img src="https://static.vecteezy.com/system/resources/previews/004/801/727/non_2x/deaf-people-join-virtual-meeting-with-sign-language-free-vector.jpg" />
            <p>Desarrollarán habilidades para comprensión de expresiones en el lenguaje.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-content">
            <img src="https://usjeducacionvirtual.com/pluginfile.php/532/course/overviewfiles/Capacitacion_y_gestion_del_conocimiento.gif" />
            <p>Comprender el vocabulario sobre los tiempos en lengua de señas.</p>
          </div>
          <div className="carousel-content">
            <img src="https://www.shutterstock.com/image-vector/international-day-sign-languages-pair-260nw-2453198587.jpg"/>
            <p>Aplicar la comunicación en los momentos especiales.</p>
          </div>
          <div className="carousel-content">
            <img src="https://static.vecteezy.com/system/resources/previews/003/226/045/non_2x/sign-language-concept-free-vector.jpg" />
            <p>Aplicar la comunicación en situaciones comunes.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
