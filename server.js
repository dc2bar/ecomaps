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

app.get('/Property/Details/7298942/CO/80233/Thornton/5095-East-116th-Place', function(req, res) {
  res.render('house');
})

app.listen(process.env.PORT || 80);