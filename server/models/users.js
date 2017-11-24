var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:local@ds113136.mlab.com:13136/testuser', {
  useMongoClient: true
});

var Schema = mongoose.Schema;

var UserInfoSchema = new Schema(
  {
    login: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100}
  }
);

//Export model
module.exports = mongoose.model('UserInfo', UserInfoSchema);
