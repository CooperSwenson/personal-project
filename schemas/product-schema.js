var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var hatSchema = require("./hat-schema.js");
var shirtSchema = require("./shirt-schema.js");

var productSchema = new Schema({
  description: String,
  price: Number,
  image: String,
  size: shirtSchema,
  style: hatSchema,
  type: {type:String, enum: ['hat', 'shirt']}
})


module.exports = mongoose.model("Products", productSchema)
