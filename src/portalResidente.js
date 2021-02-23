import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import  MenuLog  from './menu.js'
import { Dropdown } from 'semantic-ui-react'
import './App.css';





class PortalResidentes extends Component{

  constructor(props) {
    super(props);
    this.state = {
        contratos:[],
        selectedOption:"",
    };
    this.prueba = this.prueba.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
}

  prueba(e){
    console.log(this.state.contratos)
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });

    alert(this.state.selectedOption)
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

    return (

      <div className="consultaSaldoContainer">

        <MenuLog/>
        <div>
            
            <div className = "datosCondominoContainer">
              <p>Titular: [nombre de residendte aqui]</p>
              <p>No. de Contrato: [No. de contrato aqui]</p>
            </div>

            
              {this.state.contratos.length > 1 ? 
                <div className="noContratosContainer">

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

          
            <table className = "tablaDatos">
              
              <tr>
                <th>Periodo</th>
                <th>Concepto</th>
                <th>Importe</th>
                <th>Recargos</th>
                <th>Total</th>
              </tr>

              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>
            
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
}

}

export default PortalResidentes;