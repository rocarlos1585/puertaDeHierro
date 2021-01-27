import React, { Component } from 'react';
import axios from 'axios';
import { push as Menu } from 'react-burger-menu'
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
        this.onChange = this.onChange.bind(this);
    }
    
    login() {

        if(this.state.username && this.state.password){
        var formData = new FormData();
        var self = this;
    
        formData.append('userName', this.state.username);
        formData.append('passWord', this.state.password);
    
        axios({
            method: 'post',
            params:{action:"login"},
            url: 'http://puertadehierroac.com/login.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
    
            console.log(response.data)
    
            if(response.data != "El usuario no existe"){
                alert("Bienvenido")
                sessionStorage.setItem("auth", "true")

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

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        
    }



    render() {

        if(sessionStorage.getItem("auth")=="true"){
            return(
                <div>
                    <Menu>
                        <div>
                            <img className="logoMenu" src="http://puertadehierroac.com/imagenes/iconos/logoBlancoLogin.png"/>
                        </div>
                        <a id="home" className="menu-item" href="/">Inicio</a>
                        <a id="home" className="menu-item" href="/reglamentos">Reglamentos</a>
                        <a id="about" className="menu-item" href="/portalResidentes">Portal de Residente</a>
                        <a id="contact" className="menu-item" href="/directorio">Directorio</a>
                        <a id="contact" className="menu-item" href="/">Galeria</a>
                        <a id="contact" className="menu-item" href="/obras">Obras terminadas</a>
                    </Menu> 
                </div>
            );
        }else{
  
            return (
                <div>
                    <Menu>
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