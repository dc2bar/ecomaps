var express = require('express'),
    exphbs  = require('express3-handlebars'),
    vendors = require('./routes/vendors');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('map');
});

app.get('/getall', vendors.findAll);

app.listen(process.env.PORT || 80);