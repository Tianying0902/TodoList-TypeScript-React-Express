const mysql = require("mysql");
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
const queryPromise = async (query) => {
  const connection = mySqlConnection();
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query(query, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
module.exports = queryPromise;
