var express = require('express');
var app = express();

var path = require('path');
const bodyParser= require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/upload', (req, res) =>{
  res.send(req.body);
} );
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
