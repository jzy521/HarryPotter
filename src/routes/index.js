import React from 'react';
import { Router, Route, Switch,Link } from 'react-router-dom';
import history from './history';

import Harrypotter from '../containers/harrypotter';
import {Home, Characters, Theories, AboutUs} from '../components';

export const Nav = () => (
  <Router history={history}>
     
  <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/harrypotter' component={Harrypotter} />
      <Route exact path='/characters' component={Characters} />
      <Route exact path='/theories' component={Theories} />
      <Route exact path='/aboutUs' component={AboutUs} />
      
    </Switch>
  </Router>
);

export default Nav;
