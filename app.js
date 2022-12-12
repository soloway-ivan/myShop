const express = require("express");
// const { Client } = require('pg')
require('dotenv').config();
const bodyParser = require("body-parser");
const typeorm = require("typeorm");
require("reflect-metadata")
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const authRoutes = require("./routes/auth");
const analyticsRoutes = require("./routes/analytics");
const categoryRoutes = require("./routes/category");
const orderRoutes = require("./routes/order");
const positionRoutes = require("./routes/position");
const connectionKeys = require("./config/connection-keys")
const app = express();
const userSchema = require("./models/User")

mongoose.connect(process.env.uri)
    .then(() => console.log('Connection to server mongoDB is successful!'))
    .catch(error => console.log(error))

 
// mongoose.connection.close()
// const connection = new Client(connectionKeys)
// let query="SELECT personid, firstname, lastname, city FROM users WHERE personid = 1;";
// connection.connect()
//     .then(() => console.log('Connection to server MySQL is successful!'))
//     .then(() => connection.query(query, (err, result) => {
//             console.log(err);
//             console.log(result.rows[0])
//             })
//         )
//     .catch(() => console.log(error))
///////////////////////////////////

app.use(require("morgan")("dev"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(require("cors")())


app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)


module.exports = app