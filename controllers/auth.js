const { user } = require('../config/connection-keys');
const bcrypt = require('bcryptjs')
const jsw = require('jsonwebtoken')
const User = require('../models/User');
const { token } = require('morgan');

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})
   
    if(candidate) {
       const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)

       if(passwordResult) {
          const token = jsw.sign({
            email: req.body.email,
            password: req.body.password
          }, process.env.jsw, {expiresIn: 60*60})
          res.status(200).json({
            message: 'Successful login',
            token: `Bearer ${token}`,
           })
        } else {
            res.status(401).json("Passwords doesn't match. Try again, please")
        }
    } else {
        res.status(404).json("Current User doesn't exist. Try again, please")
    }
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