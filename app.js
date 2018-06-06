var express = require('express');
var app = express();
var getPixels = require("get-pixels");
var jimp = require('jimp');
var quantize = require('quantize');

var path = require('path');
app.use(express.static(__dirname + '/images'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
console.log("hello world")
var array=[];
var 
// let pixels = (a) => {
//
// }

getPixels("images/wood.jpg", function(err, pixels) {
  console.log("HI");
  if(err) {
    console.log("Bad image path");
    return;
  }
  console.log("got pixels", pixels.shape.slice());
})
