import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from 'semantic-ui-react'
import { push as Menu } from 'react-burger-menu'
import 'react-vertical-timeline-component/style.min.css';
import './App.css';





class Obras extends Component{
    render() {
        return (
            <div className="obrasContainer">

                <Menu>
                    <div>
                    <img className="logoMenu" src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/logoPuerta2.png?alt=media&token=ed22f2a2-5a78-4140-91f4-2adc401ab920"/>
                    </div>
                    <a id="home" className="menu-item" href="/">Inicio</a>
                    <a id="home" className="menu-item" href="/">Reglamentos</a>
                    <a id="about" className="menu-item" href="/">Portal de Residente</a>
                    <a id="contact" className="menu-item" href="/directorio">Directorio</a>
                    <a id="contact" className="menu-item" href="/">Galeria</a>
                    <a id="contact" className="menu-item" href="/obras">Obras terminadas</a>
                </Menu>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#926123', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #926123' }}
                        date="2020"
                        iconStyle={{ background: '#926123', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='clipboard' />}
                    >
                        <h3 className="vertical-timeline-element-title">ENTREGA DE UNIFORMES</h3>
                        <h4 className="vertical-timeline-element-subtitle">Administración</h4>
                        <p>
                            En compromiso con todos nuestros trabajoders se les hizo entrega de nuevos uniformes.
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/entregaUniformes/Imagen17.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/entregaUniformes/Imagen18.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/entregaUniformes/Imagen19.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/entregaUniformes/Imagen20.png"/>
                        </div>
                    </VerticalTimelineElement>






                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#964824', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #964824' }}
                        date="2020"
                        iconStyle= {{background: '#964824', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='chart bar outline' />}
                    >
                        <h3 className="vertical-timeline-element-title">ILUMINACIÓN SOBRE BOULEVARD</h3>
                        <h4 className="vertical-timeline-element-subtitle">Obras e Inversión</h4>
                        <p>
                            Panorama general de la zona iluminada del fraccionamiento sobre el camellón del boulevard
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/lucesBoulevard/Imagen9.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/lucesBoulevard/Imagen10.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/lucesBoulevard/Imagen11.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/lucesBoulevard/Imagen12.jpg"/>
                        </div>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#24962e', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #24962e' }}
                        date="2020"
                        iconStyle= {{background: '#24962e', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='tree' />}
                    >
                        <h3 className="vertical-timeline-element-title">MTTO. A PALMERAS</h3>
                        <h4 className="vertical-timeline-element-subtitle">Jardineria</h4>
                        <p>
                            Descripcion pendiente....
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/mttoPalmeras/Imagen53.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/mttoPalmeras/Imagen54.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/mttoPalmeras/Imagen55.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/mttoPalmeras/Imagen56.png"/>
                        </div>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#964824', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #964824' }}
                        date="2020"
                        iconStyle= {{background: '#964824', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='chart bar outline' />}
                    >
                        <h3 className="vertical-timeline-element-title">RENOVACIÓN DE PARQUE VEHICULAR</h3>
                        <h4 className="vertical-timeline-element-subtitle">Obras e Inversión</h4>
                        <p>
                            Adquisición de vehículos toyota yaris
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/parqueVehicular/Imagen24.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/parqueVehicular/Imagen170.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/parqueVehicular/Imagen25.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/parqueVehicular/Imagen173.png"/>
                        </div>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#24962e', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #24962e' }}
                        date="2020"
                        iconStyle= {{background: '#24962e', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='tree' />}
                    >
                        <h3 className="vertical-timeline-element-title">PODA DE ARBOLES SOBRE AV. ACUEDUCTO</h3>
                        <h4 className="vertical-timeline-element-subtitle">Jardineria</h4>
                        <p>
                            Descripcion pendiente....
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/podaArboles/Imagen62.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/podaArboles/Imagen63.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/podaArboles/Imagen64.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/podaArboles/Imagen65.png"/>
                        </div>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#964824', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #964824' }}
                        date="2020"
                        iconStyle= {{background: '#964824', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='chart bar outline' />}
                    >
                        <h3 className="vertical-timeline-element-title">MEJORA EN CENTRO DE MONITOREO</h3>
                        <h4 className="vertical-timeline-element-subtitle">Obras e Inversión</h4>
                        <p>
                            Se adquirio nuevo equipo para el departamento de monitoreo entre monitores y mobiliario.
                        </p>

                        
                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/mejoraMonitoreo/Imagen38.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/mejoraMonitoreo/imagen1.PNG"/>
                            <img className="" src="http://puertadehierroac.com/imagenes//mejoraMonitoreo/imagen2.PNG"/>
                            
                        </div>
                    </VerticalTimelineElement>




                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#24962e', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #24962e' }}
                        date="2020"
                        iconStyle= {{background: '#24962e', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='tree' />}
                    >
                        <h3 className="vertical-timeline-element-title">FERTILIZACIÓN A PLANTAS DE HORNATO</h3>
                        <h4 className="vertical-timeline-element-subtitle">Jardineria</h4>
                        <p>
                            Descripcion pendiente....
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/plantasHornato/Imagen66.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/plantasHornato/Imagen67.jpg"/>                            
                        </div>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#964824', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #964824' }}
                        date="2020"
                        iconStyle= {{background: '#964824', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='chart bar outline' />}
                    >
                        <h3 className="vertical-timeline-element-title">TRABAJOS DE TOTALPLAY</h3>
                        <h4 className="vertical-timeline-element-subtitle">Obras e Inversión</h4>
                        <p>
                            Con el objetivo de mejorar la covertura del servicio se realizaron trabajos en la infraestructura de TotalPlay en los cotos de Barcelona, Sevilla, Galicia, León y Andalucía 
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/trabajosTotalplay/Imagen34.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/trabajosTotalplay/Imagen35.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/trabajosTotalplay/Imagen36.jpg"/>

                        </div>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#24962e', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #24962e' }}
                        date="2020"
                        iconStyle= {{background: '#24962e', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='tree' />}
                    >
                        <h3 className="vertical-timeline-element-title">NUTRIENTES EN ÁRBOLES</h3>
                        <h4 className="vertical-timeline-element-subtitle">Jardineria</h4>
                        <p>
                            En el mes de junio se aplicaron nutrienes y fertilizantes a todos los árboles.
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/nutrientesArboles/Imagen68.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/nutrientesArboles/Imagen69.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/nutrientesArboles/Imagen70.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/nutrientesArboles/Imagen71.png"/>
                        </div>
                    </VerticalTimelineElement>


                </VerticalTimeline>
            </div>
        );
    }
}

export default Obras;