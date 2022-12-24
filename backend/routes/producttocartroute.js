let express = require('express');
let auth = require('../middleware/auth')

let productToCart = require('../controllers/producttocart')

let productTocartRouter = express.Router();

// Body-parser middleware
productTocartRouter.use(express.urlencoded({
    extended: true
}))

// Json middleware
productTocartRouter.use(express.json());


productTocartRouter.get('/get-add-to-cart-product', auth.authorizeUserAndAdmin, productToCart.getProductToCart);
productTocartRouter.post('/add-to-cart', auth.authorizeUserAndAdmin, productToCart.add_to_cart);
productTocartRouter.put('/update-to-cart', auth.authorizeUserAndAdmin, productToCart.editProductToCart);
productTocartRouter.delete('/delete-add-to-cart', auth.authorizeUserAndAdmin, productToCart.deleteProductToCart);

module.exports = productTocartRouter;