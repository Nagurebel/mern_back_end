let mobilesmsModel = require('../models/mobilesms')

let getMobilesms = async (req, res, next) => {
    try {
        const data = await mobilesmsModel.find().lean()
        res.status(200).json({
            error: false,
            message: 'Your payment is successfully done',
            data: data
        })

    } catch (error) {
        next(error)
    }
}

let postMobilesms = async (req, res, next) => {
    try {
        const { user_id, user_name, payment, number, address } = req.body
        await mobilesmsModel.insertMany({
            user_id,
            user_name,
            payment,
            number,
            address
        })

        res.status(200).json({
            error: false,
            message: "sent mobilesms done",
            data: [{
                user_id,
                user_name,
                payment,
                number,
                address,
            }]
        })
    } catch (error) {
        next(error)
    }
}

const deleteMobilesms = async (req, res, next) => {
    const { _id } = req.query
    await mobilesmsModel.deleteOne({ _id })
    res.status(200).json({
        error: false,
        message: 'deleted successfully'
    })
}

module.exports = {
    getMobilesms,
    postMobilesms,
    deleteMobilesms
} 