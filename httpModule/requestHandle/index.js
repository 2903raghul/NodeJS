var http = require("http");

var connect = require("connect");

var bodyParser = require("body-parser");

var app = connect()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(function(req, res) {
    var parsedInfo = [];
    parsedInfo.firstName = req.body.userFirstName;
    parsedInfo.lastName = req.body.userLastName;
    res.end(
      "User info parsed:" + parsedInfo.firstName + " " + parsedInfo.lastName
    );
  });
http.createServer(app).listen(3456);
console.log("Listening to Port 3456.....");
