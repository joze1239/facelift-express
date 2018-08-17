var session = require('express-session');
const faceliftsdk = require('../../utils/faceliftsdk');

exports.lang = async (req, res) => {
    req.session.lang = req.params.lang;
    console.log(req.session.lang);
    res.redirect('/');
};
