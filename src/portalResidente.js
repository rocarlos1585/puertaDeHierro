import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import './App.css';





class PortalResidentes extends Component{


  render() {

    return (

      <div>

        <Menu>
            <div>
            <img className="logoMenu" src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/logoPuerta2.png?alt=media&token=ed22f2a2-5a78-4140-91f4-2adc401ab920"/>
            </div>
            <a id="home" className="menu-item" href="/">Inicio</a>
            <a id="home" className="menu-item" href="/reglamentos">Reglamentos</a>
            <a id="about" className="menu-item" href="/portalResidentes">Portal de Residente</a>
            <a id="contact" className="menu-item" href="/directorio">Directorio</a>
            <a id="contact" className="menu-item" href="/">Galeria</a>
            <a id="contact" className="menu-item" href="/obras">Obras terminadas</a>
        </Menu>

        <div>
            <br/>
            <h1>En construccion.....</h1>
        </div>


    </div>
  );
}

}

export default PortalResidentes;