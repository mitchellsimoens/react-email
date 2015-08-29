var mongoose          = require('mongoose'),
    GroceryItemSchema = {
        name      : String,
        id        : String,
        cost      : Number,
        purchased : Boolean
    };

module.exports = mongoose.model('GroceryItem', GroceryItemSchema, 'groceryItems');
