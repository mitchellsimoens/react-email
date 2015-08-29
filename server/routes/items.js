module.exports = function(app) {
    let GroceryItem = require('./../models/GroceryItem.js');

    app.route('/api/items')
        .get(function(req, res) {
            GroceryItem.find(function(error, doc) {
                if (error || !doc) {
                    res.status(404).send();
                } else {
                    res.status(200).send(doc);
                }
            })
        })
        .post(function(req, res) {
            let groceryItem = new GroceryItem(req.body);

            groceryItem.save(function(err,data) {
                if (err) {
                    res.status(501).send();
                } else {
                    res.status(200).send(data);
                }
            });
        });

    app.route('/api/items/:id')
        .get(function(req, res) {
            GroceryItem.find(
                {
                    _id : req.params.id
                },
                function(error, doc) {
                    if (error) {
                        res.status(404).send();
                    } else {
                        res.status(200).send(doc);
                    }
                }
            );
        })
        .delete(function(req, res) {
            GroceryItem.find({
                    _id : req.params.id
                })
                .remove(function() {
                    res.status(202).send();
                });
        })
        .patch(function(req, res){
            GroceryItem.findOne(
                {
                    _id : req.body._id
                },
                function(err, doc) {
                    if (doc) {
                        let key;

                        for (key in req.body) {
                            doc[key] = req.body[key];
                        };

                        doc.save();

                        res.status(200).send(doc);
                    } else {
                        res.status(404).send();
                    }
                }
            );
        });

}
