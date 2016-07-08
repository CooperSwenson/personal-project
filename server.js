var bodyParser = require("body-parser"),
cors = require("cors"),
express = require("express"),
session = require("express-session"),
mongoose = require("mongoose"),
productsCtrl = require("./controllers/productsCtrl.js")
app = express();
var Products = require("./schemas/product-schema.js")
var Cart = require("./schemas/cart-schema.js")

mongoose.connect("mongodb://localhost:27017/wasddb");
var db = mongoose.connection;
db.once("open", function() {
  console.log("mongo connected")
});

app.use(cors());
app.use(session({secret: "cool stuff"}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/Public"))


// function authUser(req, res, next) {
//   if (req.params.password === "PASSWORD") {
//     return next()
//   }
//     return next("Nope")
// }
//
// app.post("/products/:password", authUser, productsCtrl.addProduct)
app.get("/products", function(req, res) {
 Products.find({}, function(error, response) {
   if (error) return res.send(error);
   return res.send(response);
 })
})
app.post("/cartproducts", function(req, res) {
  console.log(req.session.id)
  Cart.find({sessionId: req.session.id}).exec(function (error, response){
    console.log(response)
    if (response.length === 0) {
      Cart.create({sessionId: req.session.id, products: [req.body.id]}, function(error, response){
        console.log(response)
        return res.send(response);
      })
    } else {
      var curCart = response[0]
      curCart.products.push(req.body.id)
      curCart.save(function(error, response){
        console.log(response)
        return res.send(response)
      })
    }
  })
})
app.get("/api/cart", function(req, res) {
  Cart.findOne({sessionId: req.session.id}).populate("products")
  .exec(function(err, response) {
    res.status(200).send(response)
  })
})
app.put("/api/removeproduct", function(req, res) {
  Cart.findOneAndUpdate({sessionId: req.session.id}, {$pull: { products: req.body.id}})
  .exec(function(err, response) {
    res.status(200).send(response)
  })
})

app.listen(8888, function() {
  console.log("listening to port 8888")
})
