import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import  MenuLog  from './menu.js'
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react'
import './App.css';

class ConsultaSaldo extends Component{

  constructor(props) {
    super(props);
    this.state = {
        contratos:[],
        selectedOption:"",
        detallesSaldo:[],
        fechaActualizacion:"",
        titularContrato:"",
        domicilio:""
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {

    var self=this

    axios.get(`https://sac14.com.mx/app/puertahierro/contratos/saldos/${event.target.value}`, {
      headers: {
          'X-API-KEY': '1af0d480c2ad84891b106a057b130013'
      } 
    })
    .then(function (response) {
      console.log(response.data)

      self.setState({
        detallesSaldo:response.data.detalles_saldo,
        fechaActualizacion:response.data.fecha_sincronizacion,
        titularContrato:response.data.contrato.propietario,
        domicilio:response.data.contrato.ubicacion
      })


    })
    .catch(function (response) {
      //handle error
      console.log(response)
    });

    this.setState({
      selectedOption: event.target.value
    });

    
  }

  componentWillMount(){
    //alert(sessionStorage.getItem("contratos"))
    var contratosParse=JSON.parse(sessionStorage.getItem("contratos"))

    this.setState({
      contratos : contratosParse
    })

    console.log("aqui imprimo el state: "+this.state.contratos)
    
  }

    render() {
        if(sessionStorage.getItem("auth")=="true"){
            return(
                <div>
                    <h1>Historial de pagos</h1>
                </div>
            );
        }else{
            return(
                <Redirect to={'/'}/> 
            ); 
        }
    }
}

export default ConsultaSaldo;