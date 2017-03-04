import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
// import Simple from './containers/Simple/'

import Dashboard from './views/Dashboard/'
import NewPromotion from './views/promotion/new_promotion'
import ListPromotion from './views/promotion/list_promotion'

export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard} />
      <Route path="promotions/new" name="New Promotion" component={NewPromotion} />
      <Route path="promotions" name="List Promotions" component={ListPromotion} />
    </Route>
  </Router>
);
