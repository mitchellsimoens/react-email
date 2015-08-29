var React  = require('react'),
    Router = require('react-router');

module.exports = function(app) {
    require('./items')(app);

    app.use(function(req, res, next) {
        var router = Router.create({
            location : req.url,
            routes   : require('./../../app/routes.jsx')
        });

        router.run(function(Handler, state) {
            var html = React.renderToString(<Handler/>);

            return res.render(
                __dirname + '/../../app/index.ejs',
                {
                    reactOutput : html
                }
            );
        });
    });

    return function(req, res, next) {
        next();
    };
};
