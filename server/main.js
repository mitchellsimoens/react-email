var express     = require('express'),
    parser      = require('body-parser'),
    rewrite     = require('express-urlrewrite'),
    GroceryItem = require('./models/GroceryItem.js'),
    React       = require('react/addons'),
    app         = new express();

require('babel/register');
require('./database.js');

app
    .use(parser.urlencoded({
        extended : true
    }))
    .use(parser.json())
    .use(express.static(__dirname + '/../dist'))
    .use(require('./routes/routes.jsx')(app))
    .listen(7777);

module.exports = app;
