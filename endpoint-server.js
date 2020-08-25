var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lm@0Rigt",
  database: "patjpajme"
});


app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get("/browser", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Gunga","Food"]);
});

app.post("/browser", (req, res, next) => {
  res.json(req.body);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
})