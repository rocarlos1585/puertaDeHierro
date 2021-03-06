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
  { field: 'id', headerName: 'ID de Pago', width: 150 },
  { field: 'folio', headerName: 'Folio', width: 130 },
  { field: 'fecha_pago', headerName: 'Fecha', width: 130 },
  { field: 'cuota_pagada', headerName: 'Cuota pagada', width: 130 },
  { field: 'recargos_pagados', headerName: 'Recargos pagados', width: 180 },
  { field: 'otroscargos_pagados', headerName: 'Otros Cargos', width: 180 },
  { field: 'total_pago', headerName: 'Total', width: 180 },
];

const rows = [];

function createDataPagos(id, folio, fecha_pago, cuota_pagada, recargos_pagados, otroscargos_pagados, total_pago){
  return{
    id,
    folio,
    fecha_pago,
    cuota_pagada,
    recargos_pagados,
    otroscargos_pagados,
    total_pago
  }
}


export default function CollapsibleTable() {
  const[contratos, setContratos] = useState([]);
  const[responseLocal, setResponseLocal] = useState([]);
  const[actualizaRender, setActualizaRender] = useState(false);
  let contadorForeach = 0;

  useEffect( () =>{  
    let noContrato = sessionStorage.getItem("usuario")
    
    axios.get(`https://sac14.com.mx/app/puertahierro/contratos/pagos/${noContrato}`, {
      headers: {
        'X-API-KEY': '1af0d480c2ad84891b106a057b130013'
      }
    })
    .then(function (response) {
        console.log("nueva consulta: ")
        console.log(response.data.pagos)
        var pagosArray = response.data.pagos

        pagosArray.forEach(function(it){
          contadorForeach = contadorForeach+1;

          rows.push(createDataPagos(it.id_pago, it.folio, it.fecha_pago, new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.cuota_pagada), new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.recargos_pagados), new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.otroscargos_pagados) , new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 8  }).format(it.total_pago)))  
          if(contadorForeach==pagosArray.length){
            setActualizaRender(true);
          }
        })
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      });
  }, [] );

    

  return (
    <div>

      {actualizaRender ?
        <div style={{ height: "75vh", width: '100%', backgroundColor:"white"}}>
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
