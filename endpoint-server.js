var express = require('express');
var bodyParser = require('bodyParser');
var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get("/browser", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Gunga","Food"]);
});

app.post("/browser", (req, res, next) => {
  res.send("Browser Data Recieved!");
  res.json(req.body);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
})