import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import  MenuLog  from './menu.js'
import './App.css';





class PortalResidentes extends Component{


  render() {

    return (

      <div className="consultaSaldoContainer">

        <MenuLog/>
        <div>
            
            <div className = "datosCondominoContainer">
              <p>Titular: [nombre de residendte aqui]</p>
              <p>No. de Contrato: [No. de contrato aqui]</p>
            </div>

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