import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { push as Menu } from 'react-burger-menu'
import  MenuLog  from './menu.js'
import PDFViewer from 'pdf-viewer-reactjs'
import './App.css';





class Reglamentos extends Component{


    render() {
        if(sessionStorage.getItem("auth")=="true"){
            return (
                <div className="reglamentosContainer">

                    <MenuLog/>

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
        }else{
            return(
                <Redirect to={'/'}/>
            );
        }
    }

}

export default Reglamentos;