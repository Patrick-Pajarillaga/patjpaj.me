var express = require('express');
var app = express();
var queue = require('express-queue');
var mysql = require('mysql');
const { json } = require('express');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Lm@0Rigt",
  database: "patjpajme"
});

app.use(express.json());
app.use(queue({ activeLimit: 2, queuedLimit: -1 }));

app.get('/', function (req, res) {
    res.json(res);
});

app.get("/:name", (req, res, next) => {
  pool.query(`SELECT * FROM ${req.params.name}`, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});


app.get("/:name/:id", (req, res, next) => {
  var sql_string = `SELECT * FROM ${req.params.name} WHERE id=${req.params.id}`;
  pool.query(sql_string, function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/:name", (req, res, next) => {
  res.send(req.body.metricName);
  var sql = `INSERT INTO ${req.params.name} (data, vitalScore) VALUES ('${JSON.stringify(req.body.data)}', '${req.body.vitalsScore}')`;
  if(req.body.metricName == "initialBrowserData") {
    sql = `INSERT INTO ${req.params.name} (vitalsScore, language, userAgent, innerWidth, outerWidth, innerHeight, outerHeight, cookieEnabled) VALUES ('${req.body.vitalsScore}', '${req.body.data.language}', '${req.body.data.userAgent}', '${req.body.data.innerWidth}', '${req.body.data.outerWidth}', '${req.body.data.innerHeight}', '${req.body.data.outerHeight}', '${req.body.data.cookieEnabled}')`;
  }
  pool.query(sql, function (err, result) {
    if (err) throw err;
  });
});

app.delete("/:name/:id", (req, res, next) => {
  var sql_string = `DELETE FROM ${req.params.name} WHERE id=${req.params.id}`;
  pool.query(sql_string, function (err, result, fields) {
    if (err) throw err;
    con.release();
    res.send('Deleted Entry');
  });
});

app.put("/:name/:id", (req, res, next) => {
  var sql_string = `UPDATE ${req.params.name} SET data='${JSON.stringify(req.body.data)}' WHERE id=${req.params.id}`;
  pool.query(sql_string, function (err, result, fields) {
    if (err) throw err;
    con.release();
    res.send('Updated Entry');
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
})