import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import  MenuLog  from './menu.js'
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react'
import './App.css';





class HistorialPagos extends Component{

  constructor(props) {
    super(props);
    this.state = {
        contratos:[],
        selectedOption:"",
        detallesPagos:[],
        fechaActualizacion:"",
        titularContrato:"",
        domicilio:""
    };
    this.prueba = this.prueba.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  prueba(e){
    console.log(this.state.contratos)
  }

  onValueChange(event) {

    var self=this

    axios.get(`https://sac14.com.mx/app/puertahierro/contratos/pagos/${event.target.value}`, {
      headers: {
          'X-API-KEY': '1af0d480c2ad84891b106a057b130013'
      } 
    })
    .then(function (response) {
      console.log(response.data)

      self.setState({
        detallesPagos:response.data.pagos,
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

  render(){
    if(sessionStorage.getItem("auth")=="true"){
      return (

        <div className="consultaSaldoContainer">

          <MenuLog/>
          <div>

            <div className = "datosCondominoContainer">
            <p>Titular: {this.state.titularContrato} </p>
            <p>Domicilio: {this.state.domicilio}</p>
          </div>


          {this.state.contratos.length > 1 ? 
            <div className="noContratosContainer">
              Seleccione un numero de contrato:
              {this.state.contratos.map((it)=>(
                <label>
                  <input type="radio" value={it.contrato} checked={this.state.selectedOption === it.contrato} onChange={this.onValueChange} />
                  {it.contrato}
                </label>

              ))}

            </div>

          :

            <h1>numero de contrato</h1>
          }

          <div className="tablaDatosContainer">
          <table className="tablaDatos">
            <thead>
              <tr>
                <th>Fecha de Pago</th>
                <th>ID de Pago</th>
                <th>Folio</th>
                <th>Cuota Pagada</th>
                <th>Recargos</th>
                <th>Gastos Pagados</th>
                <th>Otros Cargos</th>
                <th>Saldo a Favor</th>
                <th>IVA</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            
            {this.state.detallesPagos.length != 0 ? 

              <tbody>
                {this.state.detallesPagos.map((it)=>(
                  <tr>
                    <td>{it.fecha_pago}</td>
                    <td>{it.id_pago}</td>
                    <td>{it.folio}</td>
                    <td>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.cuota_pagada)}</td>
                    <td>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.recargos_pagados)}</td>
                    <td>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.gastos_pagados)}</td>
                    <td>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.otroscargos_pagados)}</td>
                    <td>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.saldofavor_aplicado)}</td>
                    <td>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.iva_pagado)}</td>
                    <td>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.total_pago)}</td>
                    {/*<td>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.cuotas)}</td>           
                    <td>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.recgos)}</td>*/}
                  </tr>
                ))}
              </tbody>
            :
              
              <tbody>
                <tr>
                  <td>Este contrato no presenta adeudo</td>
                  <td>---</td>
                  <td>$0.00</td>
                  <td>$0.00</td>

                </tr>

              </tbody>
            }
          </table>
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

export default HistorialPagos;