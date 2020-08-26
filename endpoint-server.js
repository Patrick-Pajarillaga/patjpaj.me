var express = require('express');
var app = express();
var mysql = require('mysql');
const { json } = require('express');

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
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM initialBrowserData", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  });
});

app.post("/browser", (req, res, next) => {
  res.send(req.body.metricName);
  con.connect(function(err) {
    if (err) throw err;
    var sql = `INSERT INTO initialBrowserData (data, vitalScore) VALUES ('${JSON.stringify(req.body.data)}', 'null')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
})