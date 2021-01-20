import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import PDFViewer from 'pdf-viewer-reactjs'
import './App.css';





class Reglamentos extends Component{


    render() {

        return (

            <div className="reglamentosContainer">

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

                <div className="documentsContainer">

                    <div className="documentContainer">
                        <img src="http://puertadehierroac.com/imagenes/iconos/pdfIcon.png"/>
                        <h1>Reglamento de Construccion del Fraccionmiento Puerta de Hierro</h1>
                        <a target="_blank" href="http://puertadehierroac.com/documentos/reglamento-de-construccion.pdf"> <i aria-hidden="true" class="eye icon"></i> Visualizar</a>
                        <a href="http://puertadehierroac.com/documentos/reglamento-de-construccion.pdf" download> <i aria-hidden="true" class="download icon"></i>Descargar</a>
                    </div>

                    <div className="documentContainer">
                        <img src="http://puertadehierroac.com/imagenes/iconos/pdfIcon.png"/>
                        <h1>Reglamento del Condominio "Residencial Puerta de Hierro"</h1>
                        <a target="_blank" href="http://puertadehierroac.com/documentos/reglamento-general.pdf"> <i aria-hidden="true" class="eye icon"></i> Visualizar</a>
                        <a href="http://puertadehierroac.com/documentos/reglamento-general.pdf" download> <i aria-hidden="true" class="download icon"></i>Descargar</a>
                    </div>

                </div>

            </div>
        );
    }

}

export default Reglamentos;