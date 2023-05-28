const mongoose = require('mongoose');
// create product table

const product = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    quantity: Number,
    imageUrl: String,
    price: Number,
    description: {
        type: String
    }
});
module.exports = Product = mongoose.model('Product', product);