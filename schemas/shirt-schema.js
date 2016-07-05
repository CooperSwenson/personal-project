var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var shirtSchema = new Schema({
  size: {
    type: String,
    enum: ["XS", "Small", "Medium", "Large", "XL", "XXL"]
  }
})

module.exports = shirtSchema;
