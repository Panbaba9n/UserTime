var express = require('express');
var router = express.Router();

// var users_controller = require('../controllers/usersController');

var UserInfo = require('../models/users');


var jwt = require('express-jwt');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.render('index', { title: 'Express lololo auth automatic' });
});
router.options('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("allow", "GET, POST, OPTIONS");
    res.send();
});
// router.post('/', function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//     res.setHeader('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
//     res.setHeader("allow", "GET, POST, OPTIONS");
//     res.json({"token":"lol"});
// });

router.post('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
    res.setHeader("allow", "GET, POST, OPTIONS");

    // Users.find({}, 'userLogin userPassword')
    // .exec(function (err, list_users) {
    //     if (err) { return next(err); }
    //         //Successful, so render
    //         res.json('auth', { users_list: list_users });
    //         // res.render('auth', { users_list: list_users });
    //     });
    // console.log(Users);


    var lol = 'undefined';
    // UserInfo.find(function (err, kittens) {
    //     if (err) return console.error(err);
    //     lol = kittens;
    // });
    res.json({"token":lol});


});

// mongoose.connection.close();

// app.post('/auth',
//  jwt({secret: 'shhhhhhared-secret'}),
//  function(req, res, next) {
//      if (!req.user.admin) return res.sendStatus(401);
//      res.sendStatus(200);
//  });

// === norm frontend prinimaet ===
// access-control-allow-headers →x-requested-with, content-type, accept, origin, authorization, x-csrftoken, user-agent, accept-encoding
// access-control-allow-methods →GET, POST, PUT, PATCH, DELETE, OPTIONS
// access-control-allow-origin →*
// access-control-max-age →86400
// allow →POST, OPTIONS
// connection →keep-alive
// content-type →application/json
// date →Thu, 16 Nov 2017 15:48:36 GMT
// server →gunicorn/18.0
// transfer-encoding →chunked
// vary →Accept
// via →1.1 vegur
// x-frame-options →SAMEORIGIN


// === frontend ne prinimaet ===
// allow →GET,HEAD,POST
// connection →keep-alive
// content-length →13
// content-type →text/html; charset=utf-8
// date →Thu, 16 Nov 2017 15:49:56 GMT
// etag →W/"d-bMedpZYGrVt1nR4x+qdNZ2GqyRo"
// x-powered-by →Express

module.exports = router;
