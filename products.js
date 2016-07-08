var productSchema = require("./schemas/product-schema.js")
var mongoose = require('mongoose')



var products = [
  {
    "price": "$25",
    "description": "Maroon & Black WASD Keys Snapback",
    "image": "./images/1_35a1550-2.png",
    "type": "hat"
  },
  {
    "price": "$25",
    "description": "Navy & White WASD Keys Snapback",
    "image": "./images/1_35A1547-2.png",
    "type": "hat"
  },
  {
    "price": "$25",
    "description": "Black & Latte WASD Keys Snapback",
    "image": "./images/1_35A1557-2.png",
    "type": "hat"
  },
  {
    "price": "$25",
    "description": "Green & Surplus  WASD Keys Snapback",
    "image": "./images/WASDgreen.jpg",
    "type": "hat"
  },
  {
    "price": "$25",
    "description": "Red & Gold WASD Keys Snapback",
    "image": "./images/WASDred.jpg",
    "type": "hat"
  },
  {
    "price": "$25",
    "description": "Pink & Lime WASD Keys Snapback",
    "image": "./images/WASDpink.jpg",
    "type": "hat"
  },
  {
    "price": "$15",
    "description": "Maroon Reversible WASD Tag Beanie",
    "image": "./images/maroonbeanie.jpg",
    "type": "hat"
  },
  {
    "price": "$15",
    "description": "Green reversible WASD Tag Beanie",
    "image": "./images/greenbeanie.jpg",
    "type": "hat"
  },
  {
    "price": "$15",
    "description": "Teal Reversible WASD Tag Beanie",
    "image": "./images/tealbeanie.jpg",
    "type": "hat"
  },
  {
    "price": "$15",
    "description": "Black Reversible WASD Tag Beanie",
    "image": "./images/blackbeanie.jpg",
    "type": "hat"
  },
  {
    "price": "$15",
    "description": "Thick Knit Maroon Reversible WASD Tag Beanie",
    "image": "./images/thickknitmaroon.jpg",
    "type": "hat"
  },
  {
    "price": "$25",
    "description": "Black Retro WASD T-Shirt",
    "image": "./images/blackretro.png",
    "type": "shirt"
  },
  {
    "price": "$25",
    "description": "Fucia Retro WASD T-Shirt",
    "image": "./images/pinkretro.png",
    "type": "shirt"
  },
  {
    "price": "$25",
    "description": "Turquoise & Black Bear VS Lumberjack",
    "image": "./images/turqbear.png",
    "type": "shirt"
  },
  {
    "price": "$25",
    "description": "Blue & Gray Bear VS Lumberjack",
    "image": "./images/graybear.png",
    "type": "shirt"
  },
  {
    "price": "$25",
    "description": "Charcoal & Black Bear VS Lumberjack",
    "image": "./images/charcoalbear.png",
    "type": "shirt"
  },
  {
    "price": "$25",
    "description": "Turquoise & Black 1920's Boxer",
    "image": "./images/turqboxer.png",
    "type": "shirt"
  },
  {
    "price": "$25",
    "description": "Blue & Gray 1920's Boxer",
    "image": "./images/grayboxer.png",
    "type": "shirt"
  },
  {
    "price": "$25",
    "description": "Charcoal & Black 1920's Boxer",
    "image": "./images/charcoalboxer.png",
    "type": "shirt"
  },
  {
    "price": "$15",
    "description": "Black & Gray WASD Circuit",
    "image": "./images/grayWASD.png",
    "type": "shirt"
  },
  {
    "price": "$15",
    "description": "Black & Maroon WASD Circuit",
    "image": "./images/maroonWASD.png",
    "type": "shirt"
  },
  {
    "price": "$15",
    "description": "Black & Blue WASD Circuit",
    "image": "./images/blueWASD.png",
    "type": "shirt"
  },
  {
    "price": "$15",
    "description": "Black & White WASD Circuit",
    "image": "./images/whiteWASD.png",
    "type": "shirt"
  }
];

mongoose.connect('mongodb://localhost:27017/wasddb')

mongoose.connection.once('open', function(resolve, reject) {
  productSchema.insertMany(products, function(error, res){
    if (error) console.log(error);
    else console.log(res);
    console.log('done')
    process.exit();
  })
})
