var React = require('react'),
    { DefaultRoute, Route, NotFoundRoute } = require('react-router');

module.exports = () => {
    return [
        <Route name="app" path="/" handler={require('./../../app/components/App.jsx')}>
            <DefaultRoute handler={require('./../../app/components/HomePage.jsx')} />
        </Route>
    ];
};
