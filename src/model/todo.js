const mongoose = require("mongoose")

const todo = mongoose.Schema({
    type:String,
} )

module.exports =  mongoose.model("todo",todo);
