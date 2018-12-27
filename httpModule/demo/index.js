console.log("Basic HTTP Server");
var http = require("http");
var handlerMethod = function(req, res) {
  res.end("A sample response from web server");
};
http.createServer(handlerMethod).listen(3456, "localhost");
console.log("Listening to 1005 Website1...");
