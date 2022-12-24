const productToCart = require('../models/producttocartmodel');



let getProductToCart = async (req, res, next) => {
    try {
        const data = await productToCart.find().lean();

        if (!data) {
            res.status(400).json({
                error: true,
                message: 'Producttocart data is not found',
                data: data
            })
        } else {
            res.status(200).json({
                error: false,
                message: 'Producttocart data get successfully',
                data: data
            })
        }
    } catch (err) {
        next(err)
    }
}


const add_to_cart = async (req, res, next) => {
    try {
        const { user_id, product_id, pName, pPrice, pImage } = req.body;
        console.log(product_id);

        const qty = 1;
        await productToCart.insertMany({
            user_id,
            product_id,
            pName,
            pImage,
            pPrice,
            qty
        });
        res.status(200).json({
            error: false,
            message: 'Product added to cart successfully',
            data: [{
                user_id,
                product_id,
                pName,
                pImage,
                pPrice,
                qty
            }]
        })

    } catch (error) {
        next(error)
    }
}

let editProductToCart = async (req, res, next) => {
    try {
        let { _id, user_id, product_id, pName, pPrice, pImage, qty } = req.body
        // let { _id } = req.query
        await productToCart.updateOne({ _id }, {
            $set: {
                user_id,
                product_id,
                pName,
                pPrice,
                pImage,
                qty
            }
        })
        res.status(200).json({
            error: false,
            message: 'Product update successfully',
            data: [{
                user_id,
                product_id,
                pName,
                pPrice,
                pImage,
                qty
            }]
        })
    } catch (err) {
        next(err)
    }
}


let deleteProductToCart = async (req, res, next) => {
    let { _id } = req.query
    try {
        await productToCart.deleteOne({ _id })
        res.status(200).json({
            error: false,
            message: 'Product Delete Successfully',

        })

    } catch (err) {
        next(err)
    }
}

module.exports = {
    getProductToCart,
    add_to_cart,
    editProductToCart,
    deleteProductToCart
}