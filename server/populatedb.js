#! /usr/bin/env node

console.log('This script populates a some test users to your database. Specified database as argument - e.g.: populatedb mongodb://admin:local@ds113136.mlab.com:13136/testuser');

//Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
  console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
  return
}

var async = require('async')
var UserInfo = require('./models/users')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []

function userCreate(login, password, cb) {
  userdetail = {login:login , password:password }
      var user = new UserInfo(userdetail);

    user.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New User: ' + user);
      users.push(user)
      cb(null, user)
    });
  }


  function createUsers(cb) {
    async.parallel([
      function(callback) {
        userCreate('login1', 'pass1', callback);
      },
      function(callback) {
        userCreate('login2', 'pass2', callback);
      },
      function(callback) {
        userCreate('login3', 'pass3', callback);
      },
      ],
        // optional callback
        cb);
  }



  async.series([
    createUsers
    ],
// optional callback
function(err, results) {
  if (err) {
    console.log('FINAL ERR: '+err);
  }
  else {
    console.log('Users: '+users);

  }
    //All done, disconnect from database
    mongoose.connection.close();
  });



