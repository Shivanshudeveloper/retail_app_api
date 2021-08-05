const mongoose = require('mongoose');

const mobileProductSchema = new mongoose.Schema({
    pdId: {
        type: String,
        required: false
    },
    pdName: {
        type: String,
        required: false
    },
    pdQty: {
        type: String,
        required: false
    },
    pdPrice: {
        type: String,
        required: false
    },
    pdFile1: {
        type: String,
        required: false
    },
    pdFile2: {
        type: String,
        required: false
    },
    pdFile3: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const mobileProduct = mongoose.model('mobileProducts', mobileProductSchema)
module.exports = mobileProduct