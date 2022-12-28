const JwtStrategy = require('passport-jwt').Strategy 
const ExtractJwt = require('passport-jwt').ExtractJwt
require('dotenv').config()
const mongoose = require('mongoose')
const User = mongoose.model('users')

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_AUTH_SECRET
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                    const user = await User.findById(payload.userId).select('email id')
                
                    if(user) {
                    done(null, user) 
                } else {
                    done(null, false)
                }
            } catch (e) {
                console.log(e);
            }
        })
    )
}