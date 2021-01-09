import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import './App.css';
import 'semantic-ui-css/semantic.min.css'




class Directorio extends Component {
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
          
          <div className="directorioContainer">
            <div class="ui relaxed items">
              
              <div class="item">
                <div class="ui small image">
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/andaluciaCard.jpg?alt=media&token=8ef46322-ca7d-4939-9008-63fb772a5a9d"/>
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/aragonCard.jpg?alt=media&token=a2c89a41-68e2-40c1-bd39-09923e51d47a"/>
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/asturiasCard.jpg?alt=media&token=42d1d69b-4c2c-4c47-bf71-533c01124ba1"/>
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
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png"/>
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/castillaViejaCard.jpg?alt=media&token=00f8967f-d554-4a4d-8f4a-0a992cad9d06"/>
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/castillaNuevaCard.jpg?alt=media&token=3005048b-a89f-4cf6-be5b-c2c50ab2d4bd"/>
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/catalunaCard.jpg?alt=media&token=0cab0f30-afa2-4706-8264-d8c847604bab                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "/>
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/extremaduraCard.jpg?alt=media&token=118cbb71-b1a3-47bc-8bf5-f146cf884bd9"/>
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
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png"/>
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/leonCard.jpg?alt=media&token=1a945689-a54c-435b-9f5a-a6c85e45aa01"/>
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/mallorcaCard.jpg?alt=media&token=ca2512e3-26af-481f-a170-4c4177ff9ee3"/>
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/murciaCard.jpg?alt=media&token=a0fba2fc-cf0b-465e-9c55-9e5b7267e3da"/>
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/navarraCard.jpg?alt=media&token=a0816791-25c2-46d5-9b37-aa7af394061e"/>
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
                  <img src="https://firebasestorage.googleapis.com/v0/b/puertahierro-67dce.appspot.com/o/valenciaTenerifeCard.jpg?alt=media&token=1c0e3be8-f7ae-4a26-9642-fdab9c38455f"/>
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
  }
}

export default Directorio;