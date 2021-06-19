import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { DataGrid } from '@material-ui/data-grid';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const columns = [
  { field: 'id', headerName: 'No.', width: 80 },
  { field: 'periodo', headerName: 'Periodo', width: 150 },
  { field: 'tipo_cuota', headerName: 'Concepto', width: 130 },
  { field: 'cuotas', headerName: 'Cuota', width: 130 },
  { field: 'desc_cuotas', headerName: 'Descuentos en Cuotas', width: 130 },
  { field: 'recgos', headerName: 'Recargos', width: 180 },
  { field: 'desc_recgos', headerName: 'Descuentos en Recargos', width: 180 },

];

const rows = [];


function createDataPagos(id, periodo, tipo_cuota, cuotas, desc_cuotas, recgos, desc_recgos){
  return{
    id,
    periodo,
    tipo_cuota,
    cuotas,
    desc_cuotas,
    recgos,
    desc_recgos
  }
}





export default function CollapsibleTable() {
  const[contratos, setContratos] = useState([]);
  const[responseLocal, setResponseLocal] = useState([]);
  const[actualizaRender, setActualizaRender] = useState(false);
  let contadorForeach = 0;

  useEffect( () =>{
    let noContrato = sessionStorage.getItem("usuario")
    


    axios.get(`https://sac14.com.mx/app/puertahierro/contratos/saldos/${noContrato}`, {
      headers: {
        'X-API-KEY': '1af0d480c2ad84891b106a057b130013'
      }
    })
      .then(function (response) {
        var saldosArray = response.data.detalles_saldo
        console.log(saldosArray)
        if(saldosArray.length>0){
          saldosArray.forEach(function(it){
            contadorForeach = contadorForeach+1;

            rows.push(createDataPagos(contadorForeach, it.periodo, it.tipo_cuota, new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.cuotas), new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.desc_cuotas), new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.recgos) , new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.desc_recgos)))  
            if(contadorForeach==saldosArray.length){
              setActualizaRender(true);
            }
          })
        }else{
          rows.push(createDataPagos(1, "N/A", "N/A", new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(0), new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(0), new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(0) , new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(0)))
          setActualizaRender(true)
        }
      })


      .catch(function (response) {
        //handle error
        console.log(response)
      });
  }, [] );

    

  return (
    <div>

      {actualizaRender ?
        <div style={{ height: "50vh", width: '100%', backgroundColor:"white"}}>
          <DataGrid rows={rows} columns={columns} pageSize={6} />
        </div>
      : 
        <div>
          <div class="ui active transition visible dimmer">      
            <div class="ui text loader">Cargando</div> 
          </div>
        </div>
      }
    </div>
  );
}
