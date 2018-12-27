var request = require("request");
request("http://localhost:3456/hello", function(error, res, body) {
  if (!error && res.statusCode == 200) {
    console.log(body);
  }
  if (error) {
    console.log(error);
  }
});
