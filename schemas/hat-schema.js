var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var hatSchema = new Schema({
  style: {
    type: String,
    enum: ["snapback", "beanie"]
  }
})

module.exports = hatSchema;
