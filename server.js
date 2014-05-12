var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain'); // set content-type
  res.send('ecomaps - your source for everything green'); // send text response
});

app.listen(process.env.PORT || 4204);