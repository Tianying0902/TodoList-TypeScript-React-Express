const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.get("/", (req, res) => {
  getData(res);
});
app.get("/active", (req, res) => {
  getActiveData(res);
});
app.get("/completed", (req, res) => {
  getCompletedData(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
function mySqlConnection() {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root12345",
    database: "nodeSql",
  });
  return connection;
}
function getData(res) {
  const connection = mySqlConnection();

  connection.connect();

  const selectAllTasks = "SELECT * from todo";
  connection.query(selectAllTasks, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });

  connection.end();
}
function getActiveData(res) {
  const connection = mySqlConnection();

  connection.connect();

  const selectActiveTask = "SELECT * from todo where completed = 0";
  connection.query(selectActiveTask, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });

  connection.end();
}
function getCompletedData(res) {
  const connection = mySqlConnection();

  connection.connect();

  const selectActiveTask = "SELECT * from todo where completed = 1";
  connection.query(selectActiveTask, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });

  connection.end();
}
