import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/catalog" component={Catalog} />
      </Switch>
    </BrowserRouter>
  );
}
