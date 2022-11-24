const app = require("./app");
const { Client } = require('pg')
require('dotenv').config()

const conn = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
  })

let query="SELECT personid, firstname, lastname, city FROM users WHERE personid = 1;";
conn.connect(function (err) {
    if (err) {
        return console.error("ERROR: " + err);
    }
    else {
        console.log("Connection to server MySQL is successful!");
    }
      conn.query(query, (err, result, field) =>{
        console.log(err);
        console.log(result.rows[0]);
    });
  });
const port = 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));