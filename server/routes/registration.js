var express = require('express');
var router = express.Router();


var UserInfo = require('../models/users');
var authStrategy = require('../config/authStrategy');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express lololo register automatic' });
});

router.options('/', function(req, res, next) {
  res.send();
});

router.post('/', function(req, res, next) {

  if(req.body.username && req.body.password){
    var username = req.body.username;
    var password = req.body.password;
  }

  var dbUser = {};
  UserInfo.find({ 'login': username }, function (err, docs) {
    if (err) {return console.error(err);}
    dbUser = docs[0];
    if( dbUser ){
      res.status(401).json({message:"Such user already exist! Try another username."});
    } else {
      userCreate(username, password, function(cb) { // Make a user in DB
        res.json({message: "Refustration compleate successfully, now you should login!"});
      });
    }
  });

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

// userCreate(username, password, function(cb) { // Make a user in DB
//     // console.log(cb);
// });
