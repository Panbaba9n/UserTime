var express = require('express');
var router = express.Router();

var UserInfo = require('../models/users');
var authStrategy = require('../config/authStrategy');


/* GET auth page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express lololo auth automatic' });
});
/* OPTIONS auth page. */
router.options('/', function(req, res, next) {
    res.send();
});
/* POST auth page. */
router.post('/', function(req, res, next) {
    if(req.body.username && req.body.password){
        var username = req.body.username;
        var password = req.body.password;

        var dbUser = {};
        UserInfo.find({ 'login': username }, function (err, docs) {
            if (err) {return console.error(err);}
            dbUser = docs[0];
            if( ! dbUser ){
                res.status(401).json({message:"no such user found"});
            }
            if(dbUser.password === req.body.password) {
                var payload = {id: dbUser.id};
                var token = authStrategy.jwt.sign(payload, authStrategy.jwtOptions.secretOrKey);
                res.json({message: "ok", token: token});
            } else {
                res.status(401).json({message:"passwords did not match"});
            }
        });
    } else {
        res.status(401).json({message:"Something went wrong"});
    }
});

module.exports = router;
