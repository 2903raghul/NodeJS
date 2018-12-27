var express = require("express");
var formidable = require("formidable");
var app = express();

app.use(function(req, res) {
  if (req.method.toLowerCase() == "post") {
    var form = new formidable.IncomingForm();
    console.log("Inside post");
    form.uploadDir = __dirname + "/uploads";
    form.keepExtensions = true;
    form.type = "multipart";
    console.log(form.uploadDir);

    form.parse(req, function(err, fields, files) {
      console.log("Inside parse");
      var firstName = fields.userFirstName;
      var lastName = fields.userLastName;
      console.log("User Info parsed" + firstName + " and " + lastName);

      res.writeHead(200, { "content-type": "text/plain" });
      res.end("Form data received");
    });
    return;
  }
});
app.listen(3456);
console.log("Listening to 3456");
