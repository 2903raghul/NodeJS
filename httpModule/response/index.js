var http = require("http");
var connect = require("connect");
var app = connect()
  .use(function(req, res) {
    if (req.url == "/hello") {
      res.end("Hello APP");
    } else if (req.url == "/hello.json") {
      var data = "Hello App";
      var result = JSON.stringify(data);
      res.setHeader("Content-Type", "application/json");
      res.end(result);
    } else if (req.url == "/statusCode") {
      console.log("Sending 404");
      res.statusCode = 404;
      res.end("Nothing Found");
    } else if (req.url == "/status") {
      res.end("Hello APP");
    }
  })
  .listen(3456);

//http.createServer(app).listen(3456);
console.log("Listening to port 3456...");
