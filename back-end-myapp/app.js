const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  getData(res);
});
app.get("/active", (req, res) => {
  getActiveData(res);
});
app.get("/completed", (req, res) => {
  getCompletedData(res);
});
app.delete("/:id", (req, res) => {
  deleteData(req, res);
});
app.post("/", bodyParser.urlencoded({ extend: true }), (req, res) => {
  postData(req, res);
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
function deleteData(req, res) {
  let id = req.params.id;
  const connection = mySqlConnection();

  connection.connect();
  const deleteTask = "DELETE from todo where id = " + id + "";
  connection.query(deleteTask, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });

  connection.end();
}
function postData(req, res) {
  const task = { task: req.body.task };
  const taskName = task.task;
  const taskDefault = false;
  const connection = mySqlConnection();
  const insertNewTask =
    "INSERT into todo(task, completed) VALUES ('" +
    taskName +
    "'," +
    taskDefault +
    ")";
  connection.query(insertNewTask, (err, rows) => {
    if (err) throw err;
    res.send(task);
    // console.log(rows);
  });

  connection.end();
}
