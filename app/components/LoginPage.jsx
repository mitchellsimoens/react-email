'use strict';

var React  = require('react'),
    Router = require('react-router'),
    Link   = Router.Link;

module.exports = React.createClass({
    render : function() {
        return (
            <div className="jumbotron">
                <h1>Login Page</h1>
                <p>Go ahead and login</p>
                <Link to="app" className="btn btn-primary btn-lg">Back to home</Link>
            </div>
        );
    }
});
