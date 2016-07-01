var bodyParser = require("body-parser"),
cors = require("cors"),
express = require("express"),
session = require("express-session"),
mongoose = require("mongoose");

var app = express();
mongoose.connect("mongodb://localhost:27017/wasddb");
var db = mongoose.connection;
db.once("open", function() {
  console.log("mongo connected")
});

app.use(cors());
app.use(session());
app.use(bodyParser.json());




app.listen(8888, function() {
  console.log("listening to port 8888")
})
