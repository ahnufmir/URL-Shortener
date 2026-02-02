const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    shortURL : {
        type: String,
        required : true,
        unique: true
    },
    redirectURL : {
        type : String,
        required : true,
        unique: true
    },
    visitedHistory : [{timestamp : {type : String}}]
}, {timestamps : true});

const URL = new mongoose.model("url", schema);

module.exports = URL;