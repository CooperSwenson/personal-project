var Products = require("../schemas/product-schema.js")


module.exports = {
  addProduct: function(req, res) {
    Products.create(req.body, function(error, product) {
      // if (error) return res.status(500).json(error)
      return error ? res.status(500).json(error) : res.status(200).json(product);
    })
  }
}
