let mongoose = require('mongoose');

const mobilesmsSchema = new mongoose.Schema({
    user_id: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: true
    },
    user_name: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: true
    },
    payment: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: true
    },
    address: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: true
    },
    number: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

const model = mongoose.model("smsmobile", mobilesmsSchema)

module.exports = model;