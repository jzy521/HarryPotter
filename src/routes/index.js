import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import Harrypotter from '../containers/foo';
import Home from '../components/home';


export const Nav = () => (
  <Router history={history}>
  <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/harrypotter' component={Harrypotter} />
    </Switch>
  </Router>
);

export default Nav;
