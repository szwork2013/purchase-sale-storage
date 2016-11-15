import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router'

import { App } from './App'
import { Home, NotFoundPage, Product, ProductDetail, Order, OrderDetail, Account,Cart } from './layouts'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="product" >
            <IndexRoute component={Product} />
            <Route path=":id" component={ProductDetail} />
        </Route>
        <Route path="cart">
            <IndexRoute component={Cart} />
        </Route>
        <Route path="order">
            <IndexRoute component={Order} />
            <Route path=":id" component={OrderDetail} />
        </Route>
        <Route path="account" component={Account} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);