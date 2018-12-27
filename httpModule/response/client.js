var request = require("request");
var fs = require("fs");

request("http://localhost:3456/printHeaders", function(error, req, body) {
  if (error) {
    console.log(error);
  }

  console.log(req.body);
  console.log(req.statusCode);
  console.log(req.headers);
}).pipe(fs.appendFile("PipeFile.txt"));
