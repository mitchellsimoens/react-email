let mongoose    = require('mongoose'),
    GroceryItem = require('./models/GroceryItem.js');

mongoose.connection.db.dropDatabase();

var initial = [
    {
        name : 'Ice Cream'
    },
    {
        name : 'Waffles'
    },
    {
        name : 'Candy'
    },
    {
        name      : 'Hamburgers',
        purchased : true
    }
];

initial.forEach((item) => {
    new GroceryItem(item).save();
});
