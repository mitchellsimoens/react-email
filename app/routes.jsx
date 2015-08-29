'use strict';

let React        = require('react'),
    Router       = require('react-router'),
    Route        = Router.Route,
    DefaultRoute = Router.DefaultRoute;

module.exports = (
  <Route name="app" path="/" handler={require('./components/App.jsx')}>
    <DefaultRoute handler={require('./components/HomePage.jsx')} />
    <Route name="login" handler={require('./components/LoginPage.jsx')} />
  </Route>
);
