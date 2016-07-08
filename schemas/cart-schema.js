var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cartSchema = new Schema({
  sessionId: String,
  products: [{type: mongoose.Schema.Types.ObjectId, ref: "Products"}],
})

module.exports = mongoose.model("Cart", cartSchema)
