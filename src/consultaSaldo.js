import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import  MenuLog  from './menu.js'
import axios from 'axios';
import CollapsibleTable from './tablaSaldos'
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
        domicilio:"",

        cuotasTotal:"",
        recargosTotal:"",
        otrosRecargosTotal:"",
        saldoFavorTotal:"",
        total:"",

    };

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
    let noContrato = sessionStorage.getItem("usuario")
    var self = this

    axios.get(`https://sac14.com.mx/app/puertahierro/contratos/saldos/${noContrato}`, {
      headers: {
          'X-API-KEY': '1af0d480c2ad84891b106a057b130013'
      } 
    })
    .then(function (response) {
      self.setState({
        detallesPagos: response.data.pagos,
        fechaActualizacion: response.data.fecha_sincronizacion,
        titularContrato: response.data.contrato.propietario,
        domicilio: response.data.contrato.ubicacion,

        cuotasTotal: response.data.saldos.cuotas,
        recargosTotal: response.data.saldos.recargos,
        otrosRecargosTotal: response.data.saldos.otros_cargos,
        saldoFavorTotal:response.data.saldos.saldo_favor,
        total: response.data.saldos.saldo_total
      })

    })
    .catch(function (response) {
      //handle error
      console.log(response)
    });
    
  }

  render(){
    if(sessionStorage.getItem("auth")=="true"){
      return (

        <div className="consultaSaldoContainer">

          <MenuLog />
          <div>

            <div className="datosCondominoContainer">
              <h1>Saldos</h1>

              <div className="datosCondomino">
                <h1>Titular: {this.state.titularContrato} &nbsp; |  &nbsp;</h1>
                <h2>Domicilio: {this.state.domicilio} &nbsp; |  &nbsp; </h2>
                <h3>Ultima Actualizacion: {this.state.fechaActualizacion} </h3>
              </div>
            </div>


            <div className="tablaDatosContainer">
              <CollapsibleTable />
            </div>

            <div className="totalSaldosContainer">
              <h3>Cuotas: <a>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(this.state.cuotasTotal)}</a></h3>
              <h3>Recargos: <a>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(this.state.recargosTotal) }</a></h3>
              <h3>Otros Recargos: <a>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(this.state.otrosRecargosTotal)}</a></h3>
              <h3>Saldo a Favor: <a>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(this.state.saldoFavorTotal)}</a></h3>
              <h3>Total: <a>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(this.state.total)}</a></h3> 
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

export default ConsultaSaldo;