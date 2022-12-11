const userSchema = require("../models/User")

module.exports = {
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    entities: [userSchema]
}