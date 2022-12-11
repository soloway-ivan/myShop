const express = require("express");
const { Client } = require('pg')
require('dotenv').config();
const bodyParser = require("body-parser");
const typeorm = require("typeorm");
require("reflect-metadata")
const authRoutes = require("./routes/auth");
const analyticsRoutes = require("./routes/analytics");
const categoryRoutes = require("./routes/category");
const orderRoutes = require("./routes/order");
const positionRoutes = require("./routes/position");
const connectionKeys = require("./config/connection-keys")
const app = express();
const userSchema = require("./models/User")

console.log(process.env.PORT);

// createConnection({connectionKeys, entities: [require("./models/User")]})


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



const AppDataSource = new typeorm.DataSource({ 
    type: "postgres",  
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    entities: [userSchema],
    native: true,
    ssl: true, 
    dialectOptions: {
        ssl: true
    }
    // dialectOptions: {
    //     "ssl": {"require":true }
    //   },
    //    ssl: true, 
})

AppDataSource
    .initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
    // .then(function () {
    //     const category1 = {
    //         name: "TypeScript",
    //     }
    //     const category2 = {
    //         name: "Programming",
    //     }

    //     const post = {
    //         title: "Control flow based type analysis",
    //         text: "TypeScript 2.0 implements a control flow-based type analysis for local constiables and parameters.",
    //         categories: [category1, category2],
    //     }

    //     const postRepository = dataSource.getRepository("Post")
    //     postRepository
    //         .save(post)
    //         .then(function (savedPost) {
    //             console.log("Post has been saved: ", savedPost)
    //             console.log("Now lets load all posts: ")

    //             return postRepository.find()
    //         })
    //         .then(function (allPosts) {
    //             console.log("All posts: ", allPosts)
    //         })
    // })
    // .catch(function (error) {
    //     console.log("Error: ", error)
    // })
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