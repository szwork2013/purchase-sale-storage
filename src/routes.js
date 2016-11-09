import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router'

import { App } from './App'
import { Home } from './layouts'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
);