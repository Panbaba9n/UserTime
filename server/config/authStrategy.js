// token auth
var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");
var UserInfo = require('../models/users');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var dbUsers = [
  {
    id: 1,
    username: 'jonathanmh',
    password: '%2yx4'
  },
  {
    id: 2,
    username: 'test',
    password: 'test'
  },
  {
    id: 3,
    username: 'admin',
    password: 'local'
  }
];

var jwtOptions = {}
// jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader(); // нет такого метода console.log(ExtractJwt);
jwtOptions.jwtFromRequest = ExtractJwt.fromHeader();
jwtOptions.secretOrKey = 'tasmanianDevil';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  // usually this would be a database call:
  var dbUser = dbUsers[Array.prototype.findIndex(dbUsers, {id: jwt_payload.id})];
  if (dbUser) {
    next(null, dbUser);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

//Export model
module.exports = {
  jwt:jwt,
  jwtOptions:jwtOptions,
  dbUsers:dbUsers
};