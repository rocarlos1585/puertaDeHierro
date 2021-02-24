import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import  MenuLog  from './menu.js'
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react'
import './App.css';





class PortalResidentes extends Component{

  constructor(props) {
    super(props);
    this.state = {
        contratos:[],
        selectedOption:"",
        detallesSaldo:[],
        fechaActualizacion:"",
    };
    this.prueba = this.prueba.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  prueba(e){
    console.log(this.state.contratos)
  }

  onValueChange(event) {

    var self=this

    axios.get(`https://puertadehierroac.mx/app/contratos/saldos/${event.target.value}`, {
      headers: {
          'X-API-KEY': '1af0d480c2ad84891b106a057b130013'
      } 
    })
    .then(function (response) {
      console.log(response.data)

      self.setState({
        detallesSaldo:response.data.detalles_saldo,
        fechaActualizacion:response.data.fecha_sincronizacion,
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
      return (

        <div className="consultaSaldoContainer">

          <MenuLog/>
          <div>

            <div className = "datosCondominoContainer">
            <p>Titular: [nombre de residente aqui]</p>
            <p>No. de Contrato: [No. de contrato aqui]</p>
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


          <table className="tablaDatos">
            <thead>
              <tr>
                <th>Periodo</th>
                <th>Concepto</th>
                <th>Importe</th>
                <th>Recargos</th>
                <th>Total</th>
              </tr>
            </thead>
            
            {this.state.detallesSaldo.length != 0 ? 

              <tbody>
                {this.state.detallesSaldo.map((it)=>(
                  <tr>
                    <td>{it.periodo}</td>
                    <td>{it.concepto}</td>
                    <td>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.cuotas)}</td>           
                    <td>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.recgos)}</td>
                    <td>$0.00</td>
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
                  <td>$0.00</td>
                </tr>

              </tbody>
            }
          </table>

          <div className = "datosTotalContainer">
            <p>Cuotas de Mantenimiento: $0.00</p>
            <p>Cuotas de Agua: $0.00</p>
            <p>Recargos: $0.00</p>
            <p>Gastos: $0.00</p>
            <p>Otros Cargos: $0.00</p>
            <p>Saldo a Favor(-): $0.00</p>
            <p>Total: $0.00</p>
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

export default PortalResidentes;