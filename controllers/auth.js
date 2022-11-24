module.exports.login = function(req, res) {
    return res.status(200).json({
        title: "Login Testing",
        message: "The app is working properly!",
    });
}

module.exports.register = function(req, res) {
    return res.status(200).json({
        title: "Wonderful registration"
    });
}