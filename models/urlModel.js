const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    shortURL : {
        type: String,
        require : true,
        unique: true
    },
    redirectURL : {
        type : String,
        require : true,
    },
    visitedHistory : [{timestamp : {type : Number}}]
}, {timestamps : true});

const URL = new mongoose.model("url", schema);

module.exports = URL;