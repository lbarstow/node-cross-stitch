const express = require('express');
const app = express();

const path = require('path');
const bodyParser= require('body-parser');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function (req, res) {
  res.render('index');
});
app.post('/upload', (req, res) =>{
  res.send(req.body);
} );
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
