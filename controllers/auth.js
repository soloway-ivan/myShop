const User9 = require('../models/User')

module.exports.login = function(req, res) {
    return res.status(200).json({
       login: {
            email: req.body.email,
            password: req.body.password
       }
    });
}

module.exports.register = function(req, res) {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    user.save().then(() => console.log('User created'))
}