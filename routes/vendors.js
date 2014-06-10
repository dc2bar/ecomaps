exports.getList - function(req, res) {
  var location = req.params.location;
  var type = req.params.type;
}

var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('licenses', server);

db.open(function(err, db) {
  console.log('connecting');
  if(!err) {
    console.log("Connected to 'licenses' database");
    db.collection('vendors', {strict:true}, function(err, collection) {
      if (err) {
        console.log("The 'licenses' collection doesn't exist. Creating it with sample data...");
        populateDB();
      }
    });
  }else {
    console.log(err);
  }
});

exports.findById = function(req, res) {
  var id = req.params.id;
  console.log('Retrieving license: ' + id);
  db.collection('vendors', function(err, collection) {
    collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
      res.send(item);
    });
  });
};

//DONT FUCKING USE THIS. SHIT WILL PULL WAYYYY TOO MUCH DATA!
exports.findAll = function(req, res) {
  db.collection('vendors', function(err, collection) {
    collection.find().toArray(function(err, items) {
      res.send(items);
    });
  });
};

//DONT USE THIS EITHER...SHOULD BE PULLED THROUGH STATE OFFICIAL DB ONLY!
exports.addLicense = function(req, res) {
  var license = req.body;
  console.log('Adding license: ' + JSON.stringify(wine));
  db.collection('vendors', function(err, collection) {
    collection.insert(license, {safe:true}, function(err, result) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        console.log('Success: ' + JSON.stringify(result[0]));
        res.send(result[0]);
      }
    });
  });
}

//AGAIN, DONT FUCK WITH THIS YET. IMPORT WILL BLOW OUT YOUR CHANGES ANYWAY!
exports.updateLicense = function(req, res) {
  var id = req.params.id;
  var license = req.body;
  console.log('Updating license: ' + id);
  console.log(JSON.stringify(license));
  db.collection('vendors', function(err, collection) {
    collection.update({'_id':new BSON.ObjectID(id)}, wine, {safe:true}, function(err, result) {
      if (err) {
        console.log('Error updating license: ' + err);
        res.send({'error':'An error has occurred'});
      } else {
        console.log('' + result + ' document(s) updated');
        res.send(license);
      }
    });
  });
}

//DEFINITELY, DEFINITELY DON'T FUCK WITH THIS YET.
exports.deleteLicense = function(req, res) {
  var id = req.params.id;
  console.log('Deleting license: ' + id);
  db.collection('vendors', function(err, collection) {
    collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
      if (err) {
        res.send({'error':'An error has occurred - ' + err});
      } else {
        console.log('' + result + ' document(s) deleted');
        res.send(req.body);
      }
    });
  });
}

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

  var wines = [
    {
      name: "CHATEAU DE SAINT COSME",
      dba: "2009",
      street: "Grenache / Syrah",
      city: "France",
      state: "CO",
      zip: "Southern Rhone",
      gridX: "The aromas of fruit and spice...",
      gridY: "saint_cosme.jpg"
    },
    {
      name: "CHATEAU DE SAINT COSME",
      dba: "2009",
      street: "Grenache / Syrah",
      city: "France",
      state: "CO",
      zip: "Southern Rhone",
      gridX: "The aromas of fruit and spice...",
      gridY: "saint_cosme.jpg"
    }];

  db.collection('vendors', function(err, collection) {
    collection.insert(locations, {safe:true}, function(err, result) {});
  });

};