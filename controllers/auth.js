const { user } = require('../config/connection-keys');
const bcrypt = require('bcryptjs')
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
            message: "User with current email was already created"
        })
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
            })
            
        try {
          await user.save()
          res.status(201).json(user)
        } catch(e) {

        }
    }

}