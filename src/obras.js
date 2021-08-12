import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from 'semantic-ui-react'
import MenuLog from './menu';
import AvancesCard from './avancesCard'
import axios from 'axios';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#373a47",
    display: 'flex',
    height: "100vh",
    backgroundImage: "url('http://puertadehierroac.mx/imagenes/iconos/fondoWeb.png')",
    backgroundPosition:"bottom",
    backgroundSize:"cover",
    
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop:"5%",
    fontSize:"5px"
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function Obras() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [imgModal, setImgModal] = React.useState("")
  const [loaded, setLoaded] = React.useState(false);
  const [obrasInversion, setObrasInversion] = React.useState([])
  const [obrasSeguridad, setObrasSeguridad] = React.useState([])
  const [obrasJardineria, setObrasJardineria] = React.useState([])
  const [obrasMantenimiento, setObrasMantenimiento] = React.useState([])
  const [obrasAdministracion, setObrasAdministracion] = React.useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = (e) => {
    setOpen(true);
    setImgModal(e.target.currentSrc)
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    const url = 'https://dashboard.puertadehierroac.mx/dashboardScript.php'
    axios.get(url, {params:{action:"getAvances"}}).then(response => response.data)
    .then((data) => {
      //console.log(data)

      
        var obrasInversionLocal = data.filter((obra) => obra.area === '1')
        var obrasSeguridadLocal = data.filter((obra) => obra.area === '2')
        var obrasJardineriaLocal = data.filter((obra) => obra.area === '3')
        var obrasMantenimientoLocal = data.filter((obra) => obra.area === '4')
        var obrasAdministracionLocal = data.filter((obra) => obra.area === '5')

        setObrasInversion(obrasInversionLocal)
        setObrasSeguridad(obrasSeguridadLocal)
        setObrasJardineria(obrasJardineriaLocal)
        setObrasMantenimiento(obrasMantenimientoLocal)
        setObrasAdministracion(obrasAdministracionLocal)

        setLoaded(true)
        
        console.log('obrasInversion: ', obrasInversionLocal)
        console.log('obrasSeguridad: ', obrasSeguridadLocal)
        console.log('obrasJardineria: ', obrasJardineriaLocal)
        console.log('obrasMantenimiento: ', obrasMantenimientoLocal)
        console.log('obrasAdministracion: ', obrasAdministracionLocal)

    

      // for(var i=data.length-1; i>=0;){

      //   noticiasFinal.push(data[i])

      //   this.setState({ noticiasArray: noticiasFinal })

      //   i--
      // }

      // console.log(noticiasFinal)

    })
  }, [])  

  

  return (
    <div className={classes.root}>
        <MenuLog/>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title"></h2>
            <img style={{"maxWidth":"600px" }} src={imgModal}/>
          </div>
        </Fade>
      </Modal>





        <>
        {loaded?(
          <>
          <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
          >
              <Tab style={{"font-size":"3vh", "color":"#926123"}} label="Inversión" {...a11yProps(0)} />
              <Tab style={{"font-size":"3vh", "color":"#926123"}} label="Seguridad" {...a11yProps(1)} />
              <Tab style={{"font-size":"3vh", "color":"#926123"}} label="Jardineria" {...a11yProps(2)} />
              <Tab style={{"font-size":"3vh", "color":"#926123"}} label="Mantenimiento" {...a11yProps(3)} />
              <Tab style={{"font-size":"3vh", "color":"#926123"}} label="Administración" {...a11yProps(4)} />

          </Tabs>
          <TabPanel value={value} index={0}>


            
              <div className="obras-container">


                
                  <div className="row">
                  {obrasInversion.map(function(item){   
                    
                     return<AvancesCard
                        title={item.titulo}
                        date={item.fecha}
                        image={item.imagen1}
                        image2={item.imagen2}
                        image3={item.imagen3}
                        description={item.descripcion}
                      />
                      
                    }) 
                  
                  
                  }
                </div>
              </div>
              
          </TabPanel>



          <TabPanel value={value} index={1}>
            <div className="obras-container">


                              
              <div className="row">
              {obrasSeguridad.map(function(item){   
                
                return<AvancesCard
                    title={item.titulo}
                    date={item.fecha}
                    image={item.imagen1}
                    image2={item.imagen2}
                    image3={item.imagen3}
                    description={item.descripcion}
                  />
                  
                }) 


              }
              </div>
            </div>

          </TabPanel>







          <TabPanel value={value} index={2}>
            <div className="obras-container">


                                            
              <div className="row">
              {obrasJardineria.map(function(item){   
                
                return<AvancesCard
                    title={item.titulo}
                    date={item.fecha}
                    image={item.imagen1}
                    image2={item.imagen2}
                    image3={item.imagen3}
                    description={item.descripcion}
                  />
                  
                }) 


              }
              </div>
            </div>
          </TabPanel>


          <TabPanel value={value} index={3}>
            <div className="obras-container">


                                                        
              <div className="row">
              {obrasMantenimiento.map(function(item){   
                
                return<AvancesCard
                    title={item.titulo}
                    date={item.fecha}
                    image={item.imagen1}
                    image2={item.imagen2}
                    image3={item.imagen3}
                    description={item.descripcion}
                  />
                  
                }) 


              }
              </div>
            </div>
          </TabPanel>


          <TabPanel value={value} index={4}>
            <div className="obras-container">


                                                          
              <div className="row">
              {obrasAdministracion.map(function(item){   
                
                return<AvancesCard
                    title={item.titulo}
                    date={item.fecha}
                    image={item.imagen1}
                    image2={item.imagen2}
                    image3={item.imagen3}
                    description={item.descripcion}
                  />
                  
                }) 


              }
              </div>
            </div>
    
          </TabPanel>
          </>


        ):(
          <h1>data no cargada</h1>
        )}
        </>

 
    </div>
  );
}
