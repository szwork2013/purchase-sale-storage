import './public/styles/normalize.scss'

import React, { Component } from 'react'
import { Router } from 'react-router'

import routes from  './routes'


export default class App extends Component {
    render() {
        const { history } = this.props;
        return (
            <Router history={history} routes={routes} />
        )
    }
}