'use strict';

var React  = require('react'),
    Router = require('react-router'),
    Link   = Router.Link;

module.exports = React.createClass({
    render : function() {
        return (
            <div className="jumbotron">
                <h1>Home Page</h1>
                <p>Just the home page</p>
                <Link to="login" className="btn btn-primary btn-lg">Login</Link>
            </div>
        );
    }
});
