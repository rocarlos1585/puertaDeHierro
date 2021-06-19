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
import AvancesCard from './avancesCard'

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


              <div className="cardsRow-container">
                <AvancesCard
                  title="NUEVO INGRESO PEATONAL ACUEDUCTO"
                  date="Marzo, 2021"
                  image="http://puertadehierroac.mx/imagenes/torniquetes/tor-2.JPG"
                  image2="http://puertadehierroac.mx/imagenes/torniquetes/tor-4.JPG"
                  image3="http://puertadehierroac.mx/imagenes/torniquetes/tor-3.JPG"
                  description="Con el objetivo de mejorar la seguridad y velocidad del ingreso de personal en el accceso de acueducto, fueron instalados 3 torniquetes con lectoras de credenciales."
                />

                <AvancesCard
                  title="ILUMINACIÓN SOBRE BOULEVARD"
                  date="2020"
                  image="http://puertadehierroac.mx/imagenes/lucesBoulevard/Imagen9.jpg"
                  image2="http://puertadehierroac.mx/imagenes/lucesBoulevard/Imagen10.jpg"
                  image3="http://puertadehierroac.mx/imagenes/lucesBoulevard/Imagen11.jpg"
                  description="Panorama general de la zona iluminada del fraccionamiento sobre el camellón del boulevard"
                />
              </div>  

              <div className="cardsRow-container">
                <AvancesCard
                  title="TRABAJOS DE TOTALPLAY"
                  date="2020"
                  image="http://puertadehierroac.mx/imagenes/trabajosTotalplay/Imagen34.jpg"
                  image2="http://puertadehierroac.mx/imagenes/trabajosTotalplay/Imagen35.png"
                  image3="http://puertadehierroac.mx/imagenes/trabajosTotalplay/Imagen36.jpg"
                  description="Con el objetivo de mejorar la covertura del servicio se realizaron trabajos en la infraestructura de TotalPlay en los cotos de Barcelona, Sevilla, Galicia, León y Andalucía"
                />

              </div> 
            </div>
            
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="obras-container">

              <div className="cardsRow-container">
                <AvancesCard
                  title="RENOVACIÓN DE PARQUE VEHICULAR"
                  date="2020"
                  image="http://puertadehierroac.mx/imagenes/parqueVehicular/Imagen170.png"
                  image2="http://puertadehierroac.mx/imagenes/parqueVehicular/Imagen25.jpg"
                  image3="http://puertadehierroac.mx/imagenes/parqueVehicular/Imagen173.png"
                  description="Adquisición de vehículos Toyota Yaris"
                />

                <AvancesCard
                  title="MEJORA EN CENTRO DE MONITOREO"
                  date="2020"
                  image="http://puertadehierroac.mx/imagenes/mejoraMonitoreo/Imagen38.jpg"
                  image2="http://puertadehierroac.mx/imagenes/mejoraMonitoreo/imagen1.PNG"
                  image3="http://puertadehierroac.mx/imagenes//mejoraMonitoreo/imagen2.PNG"
                  description="Se adquirio nuevo equipo para el departamento de monitoreo entre monitores y mobiliario."
                />
              </div> 
          </div>

        </TabPanel>







        <TabPanel value={value} index={2}>
            <div className="obras-container">





              <div className="cardsRow-container">
                  <AvancesCard
                    title="MANTENIMIENTO A PALMERAS"
                    date="2020"
                    image="http://puertadehierroac.mx/imagenes/mttoPalmeras/Imagen53.png"
                    image2="http://puertadehierroac.mx/imagenes/mttoPalmeras/Imagen54.png"
                    image3="http://puertadehierroac.mx/imagenes/mttoPalmeras/Imagen55.png"
                    description="Se realizaron diversos trabajos en las palmas del fraccionamiento para su optima conservación"
                  />

                  <AvancesCard
                    title="PODA DE ARBOLES SOBRE AV. ACUEDUCTO"
                    date="2020"
                    image="http://puertadehierroac.mx/imagenes/podaArboles/Imagen62.png"
                    image2="http://puertadehierroac.mx/imagenes/podaArboles/Imagen63.png"
                    image3="http://puertadehierroac.mx/imagenes/podaArboles/Imagen64.png"
                    description="Se podaron los arboles que estan sobre la banqueta en av. Acueduto"
                  />
              </div> 



              <div className="cardsRow-container">
                  <AvancesCard
                    title="FERTILIZACIÓN A PLANTAS DE HORNATO"
                    date="2020"
                    image="http://puertadehierroac.mx/imagenes/plantasHornato/Imagen66.jpg"
                    image2="http://puertadehierroac.mx/imagenes/plantasHornato/Imagen67.jpg"
                    image3="http://puertadehierroac.mx/imagenes/plantasHornato/Imagen67.jpg"
                    description="Se agregó fertilizante a todas las plantas de hornato"
                  />

                  <AvancesCard
                    title="NUTRIENTES EN ÁRBOLES"
                    date="2020"
                    image="http://puertadehierroac.mx/imagenes/nutrientesArboles/Imagen68.png"
                    image2="http://puertadehierroac.mx/imagenes/nutrientesArboles/Imagen69.png"
                    image3="http://puertadehierroac.mx/imagenes/nutrientesArboles/Imagen70.png"
                    description="En el mes de junio se aplicaron nutrientes y fertilizantes a todos los árboles."
                  />
              </div> 


              <div className="cardsRow-container">
                  <AvancesCard
                    title="PODAS A CASAS ABANDONADAS"
                    date="2020"
                    image="http://puertadehierroac.mx/imagenes/podaCasasAbandonadas/Imagen84.png"
                    image2="http://puertadehierroac.mx/imagenes/podaCasasAbandonadas/Imagen85.png"
                    image3="http://puertadehierroac.mx/imagenes/podaCasasAbandonadas/Imagen85.png"
                    description="Se llevo a cabo la poda en casas abandonadas con cargo a sus cuotas de mantenimiento"
                  />

                  <AvancesCard
                    title="MANTENIMIENTO A CAÑADAS - CESPED - CETOS - ARRIATES"
                    date="2020"
                    image="http://puertadehierroac.mx/imagenes/mttoCanadas/Imagen79.png"
                    image2="http://puertadehierroac.mx/imagenes/mttoCanadas/Imagen80.png"
                    image3="http://puertadehierroac.mx/imagenes/mttoCanadas/Imagen81.png"
                    description="En la zona de las cañadas, se llevo a cabo trabajo de jardineria y mantenimiento"
                  />
              </div>                 
            </div> 
        </TabPanel>


        <TabPanel value={value} index={3}>
            <div className="obras-container">


              <div className="cardsRow-container">
                  <AvancesCard
                    title="REPARACIÓN DE LOSAS DE CONCRETO"
                    date="2020"
                    image="http://puertadehierroac.mx/imagenes/losasConcreto/Imagen121.jpg"
                    image2="http://puertadehierroac.mx/imagenes/losasConcreto/Imagen122.jpg"
                    image3="http://puertadehierroac.mx/imagenes/losasConcreto/Imagen123.jpg"
                    description="Sobre el boulevard se realizo la reparacion de algunas losas de concreto que se encontraban en mal estado "
                  />

                  <AvancesCard
                    title="RESTAURACIÓN DE PIPA"
                    date="2020"
                    image="http://puertadehierroac.mx/imagenes/restPipa/Imagen107.jpg"
                    image2="http://puertadehierroac.mx/imagenes/restPipa/Imagen108.png"
                    image3="http://puertadehierroac.mx/imagenes/restPipa/Imagen108.png"
                    description="Se renovo y restauro la pipa de agua"
                  />
              </div> 


              <div className="cardsRow-container">
                  <AvancesCard
                    title="REPARACION DE BANQUETA DAÑADA"
                    date="2020"
                    image="http://puertadehierroac.mx/imagenes/reparacionBanqueta/Imagen150.png"
                    image2="http://puertadehierroac.mx/imagenes/reparacionBanqueta/Imagen151.png"
                    image3="http://puertadehierroac.mx/imagenes/reparacionBanqueta/Imagen152.png"
                    description="La banqueta agrietada se termino de quitar y se coloco concreto nuevo "
                  />

                  <AvancesCard
                    title="FUMIGACIÓN CONTRA EL DENGUE"
                    date="2020"
                    image="http://puertadehierroac.mx/imagenes/fumigacionDengue/Imagen86.png"
                    image2="http://puertadehierroac.mx/imagenes/fumigacionDengue/Imagen87.png"
                    image3="http://puertadehierroac.mx/imagenes/fumigacionDengue/Imagen88.png"
                    description="En los meses de Agosto y Octubre se llevo a cabo una profunda fumigacion en contra del mosquito del dengue "
                  />
              </div> 
            </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
            <div className="obras-container">
                <div className="cardsRow-container">


                    <AvancesCard
                      title="ENTREGA DE UNIFORMES"
                      date="2020"
                      image="http://puertadehierroac.mx/imagenes/entregaUniformes/Imagen17.png"
                      image2="http://puertadehierroac.mx/imagenes/entregaUniformes/Imagen18.png"
                      image3="http://puertadehierroac.mx/imagenes/entregaUniformes/Imagen19.png"
                      description="En compromiso con todos nuestros trabajadores se les hizo entrega de nuevos uniformes."
                    />
                </div> 
            </div>     
        </TabPanel>
 
    </div>
  );
}
