import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Fade from 'react-reveal/Fade';
import  MenuLog  from './menu.js'
import  MenuTiendas  from './menuTiendas.js'
import './App.css';





class App2 extends Component{


  render() {

    return(
        <div>
          <MenuLog/>

          <MenuTiendas/>
          <div className="logoContainer">
            <video className="videoContainer" src="http://puertadehierroac.mx/imagenes/video.mp4" autoPlay muted loop type="video/mp4"></video>
            <img className="logoPuerta" src="http://puertadehierroac.mx/imagenes/iconos/logoBlanco.png" />
          </div>
        </div>
    );
  }

}

export default App2;