var connect = require("connect");
var app = connect()
  .use(function(req, res) {
    if (req.url == "/hello") {
      console.log("Sending plain");
      res.end("Hello from APP");
    } else if (req.url == "/printHeaders") {
      var headers = req.headers;
      console.log(headers);
      res.end("Headers Printed");
    } else {
      res.end("Nothing Matched");
    }
  })
  .listen(3456);

console.log("Listening to Port 3456");
