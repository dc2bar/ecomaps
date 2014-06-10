var express = require('express');
var app = express();

var vendors = require('./routes/vendors');

app.get('/getall', vendors.findAll);

app.get('/', function(req, res) {
  res.type('text/plain'); // set content-type
  res.send('ecomaps - your source for everything green'); // send text response
});

app.listen(process.env.PORT || 4204);