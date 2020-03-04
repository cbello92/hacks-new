import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../views/home/index';

export default () => (
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
);