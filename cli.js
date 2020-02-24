const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleT = require("console.table");


let connection = mysql.createConnection({
  host: "localhost",

  port: 3306,
  user: "root",
  password: "root",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});