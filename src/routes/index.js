import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Frame from '../layouts/Frame';

const routes = (
    <Switch>
      <Route path='/' component={Frame} />
    </Switch>
)

export default routes
