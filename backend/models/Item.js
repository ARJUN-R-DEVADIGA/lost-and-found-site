const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({

    name: String,

    type: String,

    cat: String,

    loc: String,

    date: String,

    image:{
  type:String,
  default:""
},

    emoji: String,

    color: String,

    brand: String,

    desc: String,

    marks: String,

    inside: String,

    posted: String,

    contact: String

});

module.exports = mongoose.model("Item", itemSchema);