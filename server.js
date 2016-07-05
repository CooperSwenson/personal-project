var bodyParser = require("body-parser"),
cors = require("cors"),
express = require("express"),
session = require("express-session"),
mongoose = require("mongoose"),
productsCtrl = require("./controllers/productsCtrl.js")
app = express();


mongoose.connect("mongodb://localhost:27017/wasddb");
var db = mongoose.connection;
db.once("open", function() {
  console.log("mongo connected")
});

app.use(cors());
app.use(session({secret: "cool stuff"}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/Public"))


function authUser(req, res, next) {
  if (req.params.password === "PASSWORD") {
    return next()
  }
    return next("Nope")
}

app.post("/products/:password", authUser, productsCtrl.addProduct)


app.listen(8888, function() {
  console.log("listening to port 8888")
})
