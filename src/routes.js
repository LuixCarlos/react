//Dependencies
import React from 'react';
import {Route, Switch } from 'react-router-dom';

//Components
import App from './components/App';
import Home from './components/Home';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import Page404 from './components/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/contato" component={Contato}/>
            <Route exact path="/sobre" component={Sobre}/>
            <Route exact path="/" component={Home}/>
            <Route component={Page404}/>
        </Switch>  
    </App>;


export default AppRoutes;