import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { push as Menu } from 'react-burger-menu'
import  MenuLog  from './menu.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css'




class Directorio extends Component {
  render() {
    if(sessionStorage.getItem("auth")=="true"){
      return (
        <div>

            <MenuLog/>
            
            <div className="directorioContainer">
              <div class="ui relaxed items">

              <div class="item">
                  <div class="ui small image">
                    <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/logoPuerta2.png?alt=media&token=ed22f2a2-5a78-4140-91f4-2adc401ab920"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">GERENCIA</div>
                    <div class="description">
                      <p>Caja: <a href="tel:3323019805"> <i aria-hidden="true" class="call icon"></i> (33)23-01-98-05</a> ext:102</p>
                      <p>Asistente de Gerencia: <a href="tel:3323019803"> <i aria-hidden="true" class="call icon"></i> (33)23-01-98-03</a> ext:100</p>
                    </div>

                  </div>
                </div>

                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/acueductoCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">INGRESO ACUEDUCTO</div>
                    <div class="description">
                      <p>peatonal: <a href="tel:3323019815"> <i aria-hidden="true" class="call icon"></i> (33)23-01-98-15</a> ext:208</p>
                      <p>vehicular 1: <a href="tel:3323019812"> <i aria-hidden="true" class="call icon"></i> (33)23-01-98-12</a> ext:205</p>
                      <p>vehicular 2: <a href="tel:3323019813"> <i aria-hidden="true" class="call icon"></i> (33)23-01-98-13</a> ext:206</p>
                    </div>

                  </div>
                </div>


                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/patriaCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">INGRESO PATRIA</div>
                    <div class="description">
                      <p>peatonal: <a href="tel:3323019825"> <i aria-hidden="true" class="call icon"></i> (33)23-01-98-25</a> ext:218</p>
                      <p>vehicular 1: <a href="tel:3323019822"> <i aria-hidden="true" class="call icon"></i> (33)23-01-98-22</a> ext:215</p>
                      <p>vehicular 2: <a href="tel:3323019823"> <i aria-hidden="true" class="call icon"></i> (33)23-01-98-23</a> ext:216</p>
                    </div>

                  </div>
                </div>
                
                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/andaluciaCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">ANDALUCIA</div>
                    <div class="description">
                      <p>(33) 23-01-98-11</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019811"> <i aria-hidden="true" class="call icon"></i> llamar </a> 
                      </button>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/aragonCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">ARAGON</div>
                    <div class="description">
                      <p>(33) 23-01-98-17</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019817"> <i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/asturiasCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">ASTURIAS</div>
                    <div class="description">
                      <p>(33) 23-01-98-18</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019818"> <i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/canariasCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">CANARIAS</div>
                    <div class="description">
                      <p>(33) 23-01-98-19</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019819"><i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/castillaViejaCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">CASTILLA LA VIEJA</div>
                    <div class="description">
                      <p>(33) 23-01-98-20</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019820"> <i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/castillaNuevaCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">CASTILLA LA NUEVA</div>
                    <div class="description">
                      <p>(33) 23-01-98-21</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="3323019821"><i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/catalunaCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">CATALUÑA</div>
                    <div class="description">
                      <p>(33) 23-01-98-26</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019826"> <i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>


                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/extremaduraCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">EXTREMADURA</div>
                    <div class="description">                                                             
                      <p>(33) 23-01-98-27</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019827"><i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>


                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/galiciaCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">GALICIA</div>
                    <div class="description">
                      <p>(33) 23-01-98-28</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019828"><i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>


                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/leonCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">LEON</div>
                    <div class="description">
                      <p>(33) 23-01-98-29</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019829"><i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>


                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/mallorcaCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">MALLORCA</div>
                    <div class="description">
                      <p>(33) 23-01-98-30</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019830"><i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/murciaCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">MURCIA</div>
                    <div class="description">
                      <p>(33) 23-01-98-31</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019831"><i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/navarraCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">NAVARRA</div>
                    <div class="description">
                      <p>(33) 23-01-98-32</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019832"><i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ui small image">
                    <img src="http://puertadehierroac.com/imagenes/cotos/valenciaTenerifeCard.jpg"/>
                  </div>
                  <div class="middle aligned content">
                    <div class="header">VALENCIA / TENERIFE</div>
                    <div class="description">
                      <p>(33) 23-01-98-33</p>
                    </div>
                    <div class="extra">
                      <button class="ui right floated button"> 
                        <a href="tel:3323019833"><i aria-hidden="true" class="call icon"></i> llamar</a>
                      </button>
                    </div>
                  </div>
                </div> 


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

export default Directorio;