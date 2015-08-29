'use strict';

let React  = require('react/addons'),
    Router = require('react-router'),
    routes = require('./routes.jsx');

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('mount'));
});
