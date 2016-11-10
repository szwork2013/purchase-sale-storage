import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router'

import { App } from './App'
import { Home, NotFoundPage, Product, ProductDetail } from './layouts'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="product" component={Product} >
            <Route path=":id" component={ProductDetail} />
        </Route>
        <Route path="*" component={NotFoundPage} />
    </Route>
);