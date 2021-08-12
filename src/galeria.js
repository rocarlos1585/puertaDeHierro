import React, { Component } from 'react';
import  MenuLog  from './menu.js'
import './App.css'; 
import Gallery from 'react-grid-gallery';



class Galeria extends Component{
    
    render() {
        const IMAGES = [
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/1.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/1.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: "Cañada Puerta de Hierro"
            },

            {
                src: "http://puertadehierroac.mx/imagenes/galeria/2.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/2.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: "Cañada Puerta de Hierro"
            },


            {
                src: "http://puertadehierroac.mx/imagenes/galeria/9.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/9.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 1365,
                caption: "Entrada de Av. Patria de Puerta de Hierro"
            },


            {
                src: "http://puertadehierroac.mx/imagenes/galeria/3.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/3.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },

            {
                src: "http://puertadehierroac.mx/imagenes/galeria/4.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/4.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },

            {
                src: "http://puertadehierroac.mx/imagenes/galeria/5.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/5.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },

            {
                src: "http://puertadehierroac.mx/imagenes/galeria/6.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/6.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },

            {
                src: "http://puertadehierroac.mx/imagenes/galeria/7.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/7.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },


            {
                src: "http://puertadehierroac.mx/imagenes/galeria/10.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/10.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },

            {
                src: "http://puertadehierroac.mx/imagenes/galeria/11.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/11.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },

            {
                src: "http://puertadehierroac.mx/imagenes/galeria/8.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/8.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 1365,
                caption: ""
            },

            {
                src: "http://puertadehierroac.mx/imagenes/galeria/12.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/12.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
        
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/13.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/13.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },


            {
                src: "http://puertadehierroac.mx/imagenes/galeria/14.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/14.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/15.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/15.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/16.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/16.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/17.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/17.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/18.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/18.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/19.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/19.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/20.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/20.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/21.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/21.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/22.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/22.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/23.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/23.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/24.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/24.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/25.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/25.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/26.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/26.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/27.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/27.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },
            {
                src: "http://puertadehierroac.mx/imagenes/galeria/28.JPG",
                thumbnail: "http://puertadehierroac.mx/imagenes/galeria/28.JPG",
                thumbnailWidth: 1024,
                thumbnailHeight: 768,
                caption: ""
            },

        ]
        return(
            <div className="galeriaContainer">
                <MenuLog/>
                <div className="imagenesContainer">
                    <h1>Galeria</h1>
                    <Gallery images={IMAGES}/>,
                </div>
            </div>
        );
    }
}

export default Galeria;