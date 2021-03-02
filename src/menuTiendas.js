import React, { Component } from 'react';
import axios from 'axios';
import { push as Menu } from 'react-burger-menu'
import { Icon } from 'semantic-ui-react'
import './App.css'; 



class MenuTiendas extends Component{

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

        
        return(
            <div>
                <Menu disableAutoFocus width={ '30%' } burgerButtonClassName={ "menuTiendas" }  right customBurgerIcon={ <p><i class="shopping basket icon"></i></p> }>
                    
                    <div className="menu-tiendas-item">                      
                        <img className="shop-icon" src="https://i.pinimg.com/originals/77/c3/66/77c366436d8bd35fe8b3ce5b8c66992e.png"/>
                        <div className="tiendas-item-description">
                            <h1>Titulo de la tienda</h1>
                            <p>breve descripcion de la tienda, actividad, productos en venta, etc</p>
                            <button>llamar</button>
                        </div>
                    </div>

                    <div className="menu-tiendas-item">                      
                        <img className="shop-icon" src="https://i.pinimg.com/originals/77/c3/66/77c366436d8bd35fe8b3ce5b8c66992e.png"/>
                        <div className="tiendas-item-description">
                            <h1>Titulo de la tienda</h1>
                            <p>breve descripcion de la tienda, actividad, productos en venta, etc</p>
                            <button>llamar</button>
                        </div>
                    </div>

                    <div className="menu-tiendas-item">                      
                        <img className="shop-icon" src="https://i.pinimg.com/originals/77/c3/66/77c366436d8bd35fe8b3ce5b8c66992e.png"/>
                        <div className="tiendas-item-description">
                            <h1>Titulo de la tienda</h1>
                            <p>breve descripcion de la tienda, actividad, productos en venta, etc</p>
                            <button>llamar</button>
                        </div>
                    </div>

                    <div className="menu-tiendas-item">                      
                        <img className="shop-icon" src="https://i.pinimg.com/originals/77/c3/66/77c366436d8bd35fe8b3ce5b8c66992e.png"/>
                        <div className="tiendas-item-description">
                            <h1>Titulo de la tienda</h1>
                            <p>breve descripcion de la tienda, actividad, productos en venta, etc</p>
                            <button>llamar</button>
                        </div>
                    </div>

                    <div className="menu-tiendas-item">                      
                        <img className="shop-icon" src="https://i.pinimg.com/originals/77/c3/66/77c366436d8bd35fe8b3ce5b8c66992e.png"/>
                        <div className="tiendas-item-description">
                            <h1>Titulo de la tienda</h1>
                            <p>breve descripcion de la tienda, actividad, productos en venta, etc</p>
                            <button>llamar</button>
                        </div>
                    </div>




                </Menu> 
            </div>
        );
    }
}


export default MenuTiendas;