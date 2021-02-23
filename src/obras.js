import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from 'semantic-ui-react'
import { push as Menu } from 'react-burger-menu'
import  MenuLog  from './menu.js'
import 'react-vertical-timeline-component/style.min.css';
import './App.css';





class Obras extends Component{
    render() {
        if(sessionStorage.getItem("auth")=="true"){
            return (
                <div className="obrasContainer">

                <MenuLog/>

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
                            Adquisición de vehículos Toyota Yaris
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
                            En el mes de junio se aplicaron nutrientes y fertilizantes a todos los árboles.
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/nutrientesArboles/Imagen68.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/nutrientesArboles/Imagen69.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/nutrientesArboles/Imagen70.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/nutrientesArboles/Imagen71.png"/>
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
                        <h3 className="vertical-timeline-element-title">PODAS A CASAS ABANDONADAS </h3>
                        <h4 className="vertical-timeline-element-subtitle">Jardineria</h4>
                        <p>
                            Se llevo a cabo la poda en casas abandonadas con cargo a sus cuotas de mantenimiento
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/podaCasasAbandonadas/Imagen84.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/podaCasasAbandonadas/Imagen85.png"/>
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
                        <h3 className="vertical-timeline-element-title">MTTO. CAÑADAS - CESPED - CETOS - ARRIATES</h3>
                        <h4 className="vertical-timeline-element-subtitle">Jardineria</h4>
                        <p>
                            
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/mttoCanadas/Imagen79.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/mttoCanadas/Imagen80.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/mttoCanadas/Imagen81.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/mttoCanadas/Imagen82.png"/>
                          
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#c4971a', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #c4971a' }}
                        date="2020"
                        iconStyle= {{background: '#c4971a', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='wrench' />}
                    >
                        <h3 className="vertical-timeline-element-title">RESTAURACIÓN DE PIPA</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mantenimiento</h4>
                        <p>
                            
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/restPipa/Imagen107.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/restPipa/Imagen108.png"/>

                          
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#c4971a', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #c4971a' }}
                        date="2020"
                        iconStyle= {{background: '#c4971a', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='wrench' />}
                    >
                        <h3 className="vertical-timeline-element-title">REPARACION DE BANQUETA DAÑADA</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mantenimiento</h4>
                        <p>
                            Se reparo una banqueta que presentaba un severo daño 
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/reparacionBanqueta/Imagen150.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/reparacionBanqueta/Imagen151.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/reparacionBanqueta/Imagen152.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/reparacionBanqueta/Imagen153.png"/>
                          
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#c4971a', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #c4971a' }}
                        date="2020"
                        iconStyle= {{background: '#c4971a', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='wrench' />}
                    >
                        <h3 className="vertical-timeline-element-title">FUMIGACIÓN CONTRA EL DENGUE</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mantenimiento</h4>
                        <p>
                            En los meses de Agosto y Octubre se llevo a cabo una profunda fumigacion en contra del mosquito del dengue 
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/fumigacionDengue/Imagen86.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/fumigacionDengue/Imagen87.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/fumigacionDengue/Imagen88.png"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/fumigacionDengue/Imagen89.png"/>
                          
                        </div>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#c4971a', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #c4971a' }}
                        date="2020"
                        iconStyle= {{background: '#c4971a', color: '#fff', textAlign:'center', paddingTop:'1%'}}
                        icon={<Icon size="big" name='wrench' />}
                    >
                        <h3 className="vertical-timeline-element-title">REPARACIÓN DE LOSAS DE CONCRETO</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mantenimiento</h4>
                        <p>
                            Sobre el boulevard se realizo la reparacion de algunas losas de concreto que se encontraban en mal estado 
                        </p>

                        <div className="imagesContainer">
                            <img className="" src="http://puertadehierroac.com/imagenes/losasConcreto/Imagen121.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/losasConcreto/Imagen122.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/losasConcreto/Imagen123.jpg"/>
                            <img className="" src="http://puertadehierroac.com/imagenes/losasConcreto/Imagen124.jpg"/>
                          
                        </div>
                    </VerticalTimelineElement>


                </VerticalTimeline>
            </div>
            );
        }else{
            return(
               <Redirect to={'/'}/> 
            ); 
        }
    }
}

export default Obras;