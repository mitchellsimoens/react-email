/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

var React        = require('react'),
    RouteHandler = require('react-router').RouteHandler;

if (typeof process === 'object' && process + '' === '[object process]') {
} else {
    window['$'] = window.jQuery = require('jquery');
}

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <div className="container-fluid">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});
