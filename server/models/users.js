var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:local@ds113136.mlab.com:13136/testuser');

var Schema = mongoose.Schema;

var UserInfoSchema = new Schema(
  {
    login: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100}
  }
);

// Virtual for user's login
UserInfoSchema
.virtual('userLogin')
.get(function () {
  return this.login;
});
// Virtual for user's password
UserInfoSchema
.virtual('userPassword')
.get(function () {
  return this.password;
});

// Virtual for author's URL
UserInfoSchema
.virtual('url')
.get(function () {
  return '/userdata/' + this._id;
});

//Export model
module.exports = mongoose.model('UserInfo', UserInfoSchema);