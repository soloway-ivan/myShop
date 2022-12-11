const User = require('../models/User')

module.exports.login = function(req, res) {
    return res.status(200).json({
       login: {
            email: req.body.email,
            password: req.body.password
       }
    });
}

module.exports.register = async function(req, res) {

    const candidate = await User.findOne({email: req.body.email})

    if(candidate) {
        res.status(409).json({
            message: "User with current email already created"
        })
    }
        else {
            
        }
}