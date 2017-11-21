var express = require('express');
var router = express.Router();

// var users_controller = require('../controllers/usersController');

var UserInfo = require('../models/users');
var authStrategy = require('../config/authStrategy');
// console.log(authStrategy);
// var jwt = require('express-jwt');


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

    if(req.body.username && req.body.password){
        var username = req.body.username;
        var password = req.body.password;
    }
    // usually this would be a database call:
    // var dbUser = authStrategy.dbUsers[ _.findIndex(authStrategy.dbUsers, {username: username})];

    // var dbUser = authStrategy.dbUsers.find(function(result) {
    //     return result.username == username;
    // });


    var dbUser = undefined;
    UserInfo.find({ 'login': username }, function (err, docs) {
      if (err) {return console.error(err);}
      dbUser = docs[0];
      if( ! dbUser ){
        res.status(401).json({message:"no such user found"});
      }
      if(dbUser.password === req.body.password) {
        // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
        var payload = {id: dbUser.id};
        var token = authStrategy.jwt.sign(payload, authStrategy.jwtOptions.secretOrKey);
        res.json({message: "ok", token: token});
      } else {
          res.status(401).json({message:"passwords did not match"});
      }

    });

    // var dbUser = authStrategy.dbUsers.find(function(result) {
    //     return result.username == username;
    // });
    // console.log(dbUser);

    //===================================
    // if( ! dbUser ){
    //     console.log("dbUser: " + dbUser);
    //     res.status(401).json({message:"no such user found"});
    // }
    // if(dbUser.password === req.body.password) {
    //     // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    //     var payload = {id: dbUser.id};
    //     var token = authStrategy.jwt.sign(payload, authStrategy.jwtOptions.secretOrKey);
    //     res.json({message: "ok", token: token});
    // } else {
    //     res.status(401).json({message:"passwords did not match"});
    // }
    //===================================

    // var lol = 'undefined';
    // res.json({"token":lol});


});

// mongoose.connection.close();

// app.post('/auth',
//  jwt({secret: 'shhhhhhared-secret'}),
//  function(req, res, next) {
//      if (!req.user.admin) return res.sendStatus(401);
//      res.sendStatus(200);
//  });


    // UserInfo.find(function (err, kittens) {
    //     if (err) return console.error(err);
    //     lol = kittens;
    // });


    // Users.find({}, 'userLogin userPassword')
    // .exec(function (err, list_users) {
    //     if (err) { return next(err); }
    //         //Successful, so render
    //         res.json('auth', { users_list: list_users });
    //         // res.render('auth', { users_list: list_users });
    //     });
    // console.log(Users);

module.exports = router;
