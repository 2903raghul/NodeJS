var request = require("request");
var fs = require("fs");

var data = {
  userFirstName: "Joe2",
  userLastName: "Jane2",
  myBuffer: new Buffer([1]),
  myFile: fs.createReadStream("C:\\Node\\httpModule\\httpPost\\temp\\temp.txt")
};
console.log("Before post");
console.log(__dirname + "\\temp.txt");
//request.post("http://localhost:3456").form(data);
//request.post("http://localhost:3456", { form: data });
//console.log("After post");
var callback = function(err, body, res) {
  if (err) {
    console.log(err);
  } else console.log(res);
  //console.log(res);
};
request.post(
  { url: "http://localhost:3456", form: data },
  function optionCallback(err, body, res) {
    if (err) console.log("Error");
    else console.log("File Posted");
  }
);
