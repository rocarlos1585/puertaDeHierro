import React, { Component } from 'react';
import {Route, HashRouter, BrowserRouter, Switch,Router} from 'react-router-dom'

import App2 from './App.js';
import Directorio from './directorio.js'
import App from './landing.js'
import Obras from './obras.js';
import Reglamentos from './reglamentos.js';
import PortalResidentes from './portalResidente.js';



class RouterPrincipal extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App2}/>
            <Route path="/directorio" component={Directorio}/>
            <Route path="/reglamentos" component={Reglamentos}/>
            <Route path="/portalResidentes" component={PortalResidentes}/>
            <Route path="/obras" component={Obras}/>
            <Route path="/galeria" component={App2}/>
            <Route path="/landing" component={App}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default RouterPrincipal;