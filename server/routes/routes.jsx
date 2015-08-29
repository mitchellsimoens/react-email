let React  = require('react'),
    Router = require('react-router');

module.exports = function(app) {
    //add server side routes here

    app.use(function(req, res, next) {
        let router = Router.create({
            location : req.url,
            routes   : require('./../../app/routes.jsx') //use routes from client side!
        });

        router.run(function(Handler, state) {
            let html = React.renderToString(<Handler/>);

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
