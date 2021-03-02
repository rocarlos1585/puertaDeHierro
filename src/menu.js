import React, { Component } from 'react';
import axios from 'axios';
import { push as Menu } from 'react-burger-menu'
import { Icon } from 'semantic-ui-react'
import './App.css'; 



class MenuLog extends Component{

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          loged:false,
          redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    login() {

        if(this.state.username && this.state.password){
        var formData = new FormData();
        var self = this;
        let usuario = this.state.username;
        let pass = this.state.password;
        var contratosString = "";
    
        //formData.append('userName', this.state.username);
        //formData.append('passWord', this.state.password);
    
        /*axios({
            method: 'get',
            
            url: `https://puertadehierroac.mx/app/usuarios/login/${usuario}/${pass}`,
            
            config: { headers: {'X-API-KEY': '1af0d480c2ad84891b106a057b130013' }}
        })*/
        axios.get(`https://sac14.com.mx/app/puertahierro/usuarios/login/${usuario}/${pass}`, {
            headers: {
                'X-API-KEY': '1af0d480c2ad84891b106a057b130013'
            }
        })
        .then(function (response) {
    
            console.log(response.data)
            
            if(response.data.mensaje == "Usuario cargado correctamente"){
                alert(response.data.usuario.contratos.length)

                contratosString=JSON.stringify(response.data.usuario.contratos)
                
                sessionStorage.setItem("auth", "true")
                sessionStorage.setItem("contratos", contratosString);

                self.setState({
                    loged:true
                })
            }else{
                alert("El Usuario o la Contraseña son incorrectos")
            }

    
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
        }
    }

    logout() {
                       
        sessionStorage.setItem("auth", "false")

        this.setState({
            loged:false
        })

    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }



    render() {

        if(sessionStorage.getItem("auth")=="true"){
            return(
                <div>
                    <Menu disableAutoFocus  burgerButtonClassName={ "menuLogin" }>
                        <div>
                            <img className="logoMenu" src="http://puertadehierroac.com/imagenes/iconos/logoBlancoLogin.png"/>
                        </div>
                        <a id="home" className="menu-item" href="/">Inicio</a>
                        <a id="home" className="menu-item" href="/reglamentos">Reglamentos</a>
                        <a id="about" className="menu-item" href="/consultaSaldo">Consulta de Saldo</a>
                        <a id="about" className="menu-item" href="/historialPagos">Historial de Pagos</a>
                        <a id="contact" className="menu-item" href="/directorio">Directorio Telefonico</a>
                        <a id="contact" className="menu-item" href="/galeria">Galeria</a>
                        <a id="contact" className="menu-item" href="/obras">Avances</a>
                        <a className="logout-link" onClick={this.logout} >Cerrar Sesion  <Icon size="large" name='log out' /> </a>
                    </Menu> 
                </div>
            );
        }else{
  
            return (
                <div>
                    <Menu disableAutoFocus  burgerButtonClassName={ "menuLogin" }>
                        <div className="loginForm">
                            <div className="inputsContainer">
                                <img className="logoPuertaLogin" src="http://puertadehierroac.com/imagenes/iconos/logoBlancoLogin.png"/>
                                
                                <input onChange={this.onChange} name="username" type="text" placeholder="usuario"/>
                                <input onChange={this.onChange} name="password" type="password" placeholder="contraseña"/>
                                <button onClick={this.login}>INGRESAR</button>
                            </div>
                        </div>
                    </Menu>
                </div>
            );
        }
    }
}

export default MenuLog;