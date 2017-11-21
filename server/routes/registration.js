var express = require('express');
var router = express.Router();


var UserInfo = require('../models/users');
var authStrategy = require('../config/authStrategy');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.render('index', { title: 'Express lololo register automatic' });
});

router.options('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("allow", "GET, POST, OPTIONS");
    res.send();
});

router.post('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
    res.setHeader("allow", "GET, POST, OPTIONS");

    if(req.body.username && req.body.password){
        var username = req.body.username;
        var password = req.body.password;
    }



    // userCreate(username, password, callback);
    userCreate(username, password, function(cb) {
        // console.log(cb);
    });

    // UserInfo.insert({ 'login': username, 'password': password }, function (cb) {
    //     console.log(cb);



    //     var dbUser = undefined;
    //     UserInfo.find({ 'login': username }, function (err, docs) {
    //       if (err) {return console.error(err);}
    //       dbUser = docs[0];
    //       if( ! dbUser ){
    //         res.status(401).json({message:"no such user found"});
    //       }
    //       if(dbUser.password === req.body.password) {
    //         res.json({message: "ok"});
    //       } else {
    //         res.status(401).json({message:"passwords did not match"});
    //       }
    //     });
        
    // });


    function userCreate(login, password, cb) {
      userdetail = {login:login , password:password }
      var user = new UserInfo(userdetail);

      user.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New User: ' + user);
        cb(null, user)
      });
    }
});


module.exports = router;
