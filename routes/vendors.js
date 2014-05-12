function download(url, cb) {
  var data = "";
  var request = require("http").get(url, function(res) {

    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      cb(data);
    })
  });

  request.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

exports.getList - function(req, res) {
  var location = req.params.location;
  var type = req.params.type;
}