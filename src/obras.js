import React from 'react';
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
                <div className="card-obras-container">
                    <h1>ILUMINACIÓN SOBRE BOULEVARD</h1>
                    <p>Panorama general de la zona iluminada del fraccionamiento sobre el camellón del boulevard</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/lucesBoulevard/Imagen9.jpg"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/lucesBoulevard/Imagen10.jpg"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/lucesBoulevard/Imagen11.jpg"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/lucesBoulevard/Imagen12.jpg"/>
                    </div>
                </div> 
                
                <div className="card-obras-container">
                    <h1>RENOVACIÓN DE PARQUE VEHICULAR</h1>
                    <p>Adquisición de vehículos Toyota Yaris</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/parqueVehicular/Imagen24.jpg"/>
                        <img onClick={handleOpen}src="http://puertadehierroac.mx/imagenes/parqueVehicular/Imagen170.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/parqueVehicular/Imagen25.jpg"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/parqueVehicular/Imagen173.png"/>
                    </div>
                </div>    
                
                <div className="card-obras-container">
                    <h1>MEJORA EN CENTRO DE MONITOREO</h1>
                    <p>Se adquirio nuevo equipo para el departamento de monitoreo entre monitores y mobiliario.</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/mejoraMonitoreo/Imagen38.jpg"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/mejoraMonitoreo/imagen1.PNG"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes//mejoraMonitoreo/imagen2.PNG"/>
                    </div>
                </div>  
                
                <div className="card-obras-container">
                    <h1>TRABAJOS DE TOTALPLAY</h1>
                    <p>Con el objetivo de mejorar la covertura del servicio se realizaron trabajos en la infraestructura de TotalPlay en los cotos de Barcelona, Sevilla, Galicia, León y Andalucía</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/trabajosTotalplay/Imagen34.jpg"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/trabajosTotalplay/Imagen35.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/trabajosTotalplay/Imagen36.jpg"/>
                    </div>
                </div> 

            </div>
            
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="obras-container">
            <div className="card-obras-container">
              <div>Tab Seguridad</div>
            </div>
          </div>

        </TabPanel>







        <TabPanel value={value} index={2}>
            <div className="obras-container">

                <div className="card-obras-container">
                    <h1>MANTENIMIENTO A PALMERAS</h1>
                    <p>Se realizaron diversos trabajos en las palmas del fraccionamiento para su optima conservación</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/mttoPalmeras/Imagen53.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/mttoPalmeras/Imagen54.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/mttoPalmeras/Imagen55.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/mttoPalmeras/Imagen56.png"/>
                    </div>
                </div>

                <div className="card-obras-container">
                    <h1>PODA DE ARBOLES SOBRE AV. ACUEDUCTO</h1>
                    <p>Se podaron los arboles que estan sobre la banqueta en av. Acueduto</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/podaArboles/Imagen62.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/podaArboles/Imagen63.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/podaArboles/Imagen64.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/podaArboles/Imagen65.png"/>
                    </div>
                </div>

                <div className="card-obras-container">
                    <h1>FERTILIZACIÓN A PLANTAS DE HORNATO</h1>
                    <p>Se agregó fertilizante a todas las plantas de hornato</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/plantasHornato/Imagen66.jpg"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/plantasHornato/Imagen67.jpg"/>
                    </div>
                </div>

                <div className="card-obras-container">
                    <h1>NUTRIENTES EN ÁRBOLES</h1>
                    <p>En el mes de junio se aplicaron nutrientes y fertilizantes a todos los árboles.</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/nutrientesArboles/Imagen68.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/nutrientesArboles/Imagen69.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/nutrientesArboles/Imagen70.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/nutrientesArboles/Imagen71.png"/>

                    </div>
                </div>

                <div className="card-obras-container">
                    <h1>PODAS A CASAS ABANDONADAS </h1>
                    <p>Se llevo a cabo la poda en casas abandonadas con cargo a sus cuotas de mantenimiento</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/podaCasasAbandonadas/Imagen84.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/podaCasasAbandonadas/Imagen85.png"/>
                    </div>
                </div>

                <div className="card-obras-container">
                    <h1>MANTENIMIENTO A CAÑADAS - CESPED - CETOS - ARRIATES</h1>
                    <p>En la zona de las cañadas, se llevo a cabo trabajo de jardineria y mantenimiento</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/mttoCanadas/Imagen79.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/mttoCanadas/Imagen80.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/mttoCanadas/Imagen81.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/mttoCanadas/Imagen82.png"/>

                    </div>
                </div>


                
            </div> 
        </TabPanel>
        <TabPanel value={value} index={3}>
            <div className="obras-container">


            <div className="card-obras-container">
                    <h1>REPARACIÓN DE LOSAS DE CONCRETO</h1>
                    <p>Sobre el boulevard se realizo la reparacion de algunas losas de concreto que se encontraban en mal estado </p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/losasConcreto/Imagen121.jpg"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/losasConcreto/Imagen122.jpg"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/losasConcreto/Imagen123.jpg"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/losasConcreto/Imagen124.jpg"/>
                    </div>
                </div>

                <div className="card-obras-container">
                    <h1>RESTAURACIÓN DE PIPA</h1>
                    <p>Se renovo y restauro la pipa de agua</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/restPipa/Imagen107.jpg"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/restPipa/Imagen108.png"/>
                    </div>
                </div>

                


                <div className="card-obras-container">
                    <h1>REPARACION DE BANQUETA DAÑADA</h1>
                    <p>La banqueta agrietada se termino de quitar y se coloco concreto nuevo</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/reparacionBanqueta/Imagen150.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/reparacionBanqueta/Imagen151.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/reparacionBanqueta/Imagen152.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/reparacionBanqueta/Imagen153.png"/>
                    </div>
                </div>

                <div className="card-obras-container">
                    <h1>FUMIGACIÓN CONTRA EL DENGUE</h1>
                    <p>En los meses de Agosto y Octubre se llevo a cabo una profunda fumigacion en contra del mosquito del dengue </p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/fumigacionDengue/Imagen86.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/fumigacionDengue/Imagen87.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/fumigacionDengue/Imagen88.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/fumigacionDengue/Imagen89.png"/>
                    </div>
                </div>

            </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
            <div className="obras-container">


                <div className="card-obras-container">
                    <h1>ENTREGA DE UNIFORMES</h1>
                    <p>En compromiso con todos nuestros trabajoders se les hizo entrega de nuevos uniformes.</p>
                    <div className="card-obras-images-container">
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/entregaUniformes/Imagen17.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/entregaUniformes/Imagen18.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/entregaUniformes/Imagen19.png"/>
                        <img onClick={handleOpen} src="http://puertadehierroac.mx/imagenes/entregaUniformes/Imagen20.png"/>
                    </div>
                </div>
            </div>     
        </TabPanel>
 
    </div>
  );
}
