const mongoose = require('mongoose');

const fileschema = mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    fileName: String,
    metadata: Object,
})

module.exports = mongoose.model("file", fileschema)
