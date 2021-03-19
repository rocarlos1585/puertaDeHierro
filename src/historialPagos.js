import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MenuLog from './menu.js'
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react'
import './App.css';
import CollapsibleTable from './tablaHistorial'





class HistorialPagos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contratos: [],
      selectedOption: "",
      detallesPagos: [],
      fechaActualizacion: "",
      titularContrato: "",
      domicilio: ""
    };
    this.prueba = this.prueba.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  prueba(e) {
    console.log(this.state.contratos)
  }

  onValueChange(event) {

    var self = this

    axios.get(`https://sac14.com.mx/app/puertahierro/contratos/pagos/${event.target.value}`, {
      headers: {
        'X-API-KEY': '1af0d480c2ad84891b106a057b130013'
      }
    })
      .then(function (response) {
        console.log(response.data)
        
        self.setState({
          detallesPagos: response.data.pagos,
          fechaActualizacion: response.data.fecha_sincronizacion,
          titularContrato: response.data.contrato.propietario,
          domicilio: response.data.contrato.ubicacion
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

  componentWillMount() {
    //alert(sessionStorage.getItem("contratos"))
    var contratosParse = JSON.parse(sessionStorage.getItem("contratos"))

    this.setState({
      contratos: contratosParse
    })

    //console.log("aqui imprimo el state: "+this.state.contratos)

  }

  render() {
    if (sessionStorage.getItem("auth") == "true") {
      return (

        <div className="consultaSaldoContainer">

          <MenuLog />
          <div>

            <div className="datosCondominoContainer">
              <h1>Historial de Pagos</h1>
            </div>


            <div className="tablaDatosContainer">

              <CollapsibleTable />

            </div>
          </div>


        </div>
      );
    } else {
      return (
        <Redirect to={'/'} />
      );
    }
  }

}

export default HistorialPagos;