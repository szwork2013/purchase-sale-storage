import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import {Home,Tabs} from './routes/';

export default ({ history })=> {
  return (
    <Router history={history}>
      <Route path="/" component={Home} />
    </Router>
  );
};
