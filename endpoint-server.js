var express = require('express');
var app = express();
var queue = require('express-queue');
var mysql = require('mysql');
const { json } = require('express');
const bcrypt = require('bcrypt');

var pool = mysql.createPool({
  /*
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Lm@0Rigt",
  database: "patjpajme"
  */
  connectionLimit: 10,
  host: "db-mysql-patjpajme-do-user-7851401-0.a.db.ondigitalocean.com",
  user: "pjp",
  password: "Lm@0Rigt",
  database: "patjpajme",
  port: "25060"
});

app.use(express.json());
app.use(queue({ activeLimit: 2, queuedLimit: -1 }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

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
  console.log(req.params.name == "accounts");
  var sql = "";
  if(req.body.metricName == "initialBrowserData") {
    sql = `INSERT INTO ${req.params.name} (vitalsScore, language, userAgent, innerWidth, outerWidth, innerHeight, outerHeight, cookieEnabled) VALUES ('${req.body.vitalsScore}', '${req.body.data.language}', '${req.body.data.userAgent}', '${req.body.data.innerWidth}', '${req.body.data.outerWidth}', '${req.body.data.innerHeight}', '${req.body.data.outerHeight}', '${req.body.data.cookieEnabled}')`;
  }
  else if (req.params.name == "accounts") {
    let saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      sql = `INSERT INTO ${req.params.name} (username, password, email, admin) VALUES ('${req.body.username}', '${hash}', '${req.body.email}', '${req.body.admin}')`;
    });
    //sql = `INSERT INTO ${req.params.name} (username, password, email, admin) VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.admin}')`;
  }
  else {
    sql = `INSERT INTO ${req.params.name} (data, vitalScore) VALUES ('${JSON.stringify(req.body.data)}', '${req.body.vitalsScore}')`;
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
  if(req.params.name == "accounts") {
    sql_string = `UPDATE ${req.params.name} SET username='${req.body.username}', password='${req.body.password}', email='${req.body.email}', admin='${req.body.admin}' WHERE id=${req.params.id}`;
  }
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