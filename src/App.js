import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Fade from 'react-reveal/Fade';
import { push as Menu } from 'react-burger-menu'
import './App.css';
import video from './video/videoWeb.mp4';




class App extends Component{


render() {

  return (

    <div>

      <Menu>
        <a id="home" className="menu-item" href="/">Inicio</a>
        <a id="home" className="menu-item" href="/">Reglamentos</a>
        <a id="about" className="menu-item" href="/">Portal de Residente</a>
        <a id="contact" className="menu-item" href="/directorio">Directorio</a>
        <a id="contact" className="menu-item" href="/">Galeria</a>
        <a id="contact" className="menu-item" href="/">Obras terminadas</a>
      </Menu>

      <div className="logoContainer">
        <img className="logoPuerta" src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/logoPuerta2.png?alt=media&token=ed22f2a2-5a78-4140-91f4-2adc401ab920" />
        <img className="scrollGif" src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/scroll-gif-1.gif?alt=media&token=29475b5a-9526-4b05-988b-df9020b72066"/>
      </div>

      <div className="videoContainer">
        <video autoPlay muted loop src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/videoWeb.mp4?alt=media&token=eef02aa8-6520-40be-a954-cc53340676c2" type="video/mp4"/>
      </div>

      <div className="misionVision">

        <div className="misionContainer">
          <Fade right>
            <h1>Misión</h1>
          </Fade>
          <p>Buscar la mejora continua en la calidad de vida de los residentes de Puerta de Hierro.</p>
        </div>

        <div className="visionContainer">
          <Fade left>
            <h1>Visión</h1>
          </Fade>
          <p>Ser un referente para los Fraccionamientos a nivel Nacional en Seguridad, Mantenimiento y Jardineria. Desarrollar proyectos innovadores y prestar servicios de calidad. Construir una organizacion eficiente y transparente formada por profesionales y buscar la mejora continua de nuestros servicios.</p>
        </div>

      </div>

      <div className="servicios">
        <h1>Servicios</h1>

        <div className="serviciosGridContainer">
          <div class="img__wrap">
            <img class="img__img" src="http://placehold.it/257x200.jpg" />
            <div class="img__description_layer">
              <p class="img__description">Plaza Comercial</p>
            </div>
          </div>

          <div class="img__wrap">
            <img class="img__img" src="http://placehold.it/257x200.jpg" />
            <div class="img__description_layer">
              <p class="img__description">Mantenimiento</p>
            </div>
          </div>

          <div class="img__wrap">
            <img class="img__img" src="http://placehold.it/257x200.jpg" />
            <div class="img__description_layer">
              <p class="img__description">Vigilancia</p>
            </div>
          </div>

          <div class="img__wrap">
            <img class="img__img" src="http://placehold.it/257x200.jpg" />
            <div class="img__description_layer">
              <p class="img__description">Recreación</p>
            </div>
          </div>

          <div class="img__wrap">
            <img class="img__img" src="http://placehold.it/257x200.jpg" />
            <div class="img__description_layer">
              <p class="img__description">This image looks super neat.</p>
            </div>
          </div>

          <div class="img__wrap">
            <img class="img__img" src="http://placehold.it/257x200.jpg" />
            <div class="img__description_layer">
              <p class="img__description">This image looks super neat.</p>
            </div>
          </div>


        </div>
        

      </div>


    </div>
  );
}

}

export default App;