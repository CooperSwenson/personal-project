var Products = require("../schemas/product-schema.js")
var CartProducts = require("../schemas/cart-schema.js")

module.exports = {
  addProduct: function(req, res) {
    Products.create(req.body, function(error, product) {
      // if (error) return res.status(500).json(error)
      return error ? res.status(500).json(error) : res.status(200).json(product);
    })
  },
  createCart: function(req, res) {
    CartProducts.create(req.body, function(error, cart){
      return error ? res.status(500).json(error) : res.status(200).json(cart);
    })
  }
//   getProduct: function(req, res) {
//   Products.find({}, function(error, product) {
//
// })
//  }
}
