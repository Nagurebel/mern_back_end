let mongoose = require('mongoose');

let productToCartSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    pName: {
        type: String,
        required: true
    },
    pImage: {
        type: String,
        required: true
    },
    pPrice: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

let model = mongoose.model('productsToCartData', productToCartSchema)

module.exports = model;