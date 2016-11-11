import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router'

import { App } from './App'
import { Home, NotFoundPage, Product, ProductDetail, Order, OrderDetail, Account } from './layouts'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="p" >
            <IndexRoute component={Product} />
            <Route path=":id" component={ProductDetail} />
        </Route>
        <Route path="order">
            <IndexRoute component={Order} />
            <Route path=":id" component={OrderDetail} />
        </Route>
        <Route path="account" component={Account} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);