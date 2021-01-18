import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from 'semantic-ui-react'
import 'react-vertical-timeline-component/style.min.css';
import './App.css';





class Obras extends Component{
    render() {
        return (
            <div className="obrasContainer">
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

                        <div>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                            
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
                        User Experience, Visual Design
                        </p>
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
                        User Experience, Visual Design
                        </p>
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
                        User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>







                </VerticalTimeline>
            </div>
        );
    }
}

export default Obras;