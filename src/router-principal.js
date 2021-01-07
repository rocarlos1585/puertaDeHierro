import React, { Component } from 'react';
import {Route, HashRouter, BrowserRouter, Switch,Router} from 'react-router-dom'

import App from './App.js';
import Directorio from './directorio.js'



class RouterPrincipal extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/directorio" component={Directorio}/>
            <Route path="/reglamentos" component={App}/>
            <Route path="/portalResidentes" component={App}/>
            <Route path="/obras" component={App}/>
            <Route path="/galeria" component={App}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default RouterPrincipal;