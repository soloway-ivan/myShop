module.exports.login = function(req, res) {
    return res.status(200).json({
       login: {
            email: req.body.email,
            password: req.body.password
       }
    });
}

module.exports.register = function(req, res) {
    return res.status(200).json({
        title: "Wonderful registration"
    });
}