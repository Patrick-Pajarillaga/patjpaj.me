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

app.get("/:name", (req, res, next) => {
  con.connect(function(err) {
    if (err) throw err;
    con.query(`SELECT * FROM ${req.params.name}`, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  });
});

app.get("/:name/:id", (req, res, next) => {
  con.connect(function(err) {
    if (err) throw err;
    var sql_string = `SELECT * FROM ${req.params.name} WHERE id=${req.params.id}`;
    con.query(sql_string, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  });
});

app.post("/:name", (req, res, next) => {
  res.send(req.body.metricName);
  con.connect(function(err) {
    if (err) throw err;
    var sql = `INSERT INTO ${req.params.name} (data, vitalScore) VALUES ('${JSON.stringify(req.body.data)}', 'null')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
  });
});

app.delete("/:name/:id", (req, res, next) => {
  con.connect(function(err) {
    if (err) throw err;
    var sql_string = `DELETE FROM ${req.params.name} WHERE id=${req.params.id}`;
    con.query(sql_string, function (err, result, fields) {
      if (err) throw err;
      res.send('Deleted Entry');
    });
  });
});

app.put("/:name/:id", (req, res, next) => {
  con.connect(function(err) {
    if (err) throw err;
    var sql_string = `UPDATE ${req.params.name} SET data='${JSON.stringify(req.body.data)}' WHERE id=${req.params.id}`;
    con.query(sql_string, function (err, result, fields) {
      if (err) throw err;
      res.send('Updated Entry');
    });
  });
});


var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
})