var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:local@ds113136.mlab.com:13136/testuser', {
  useMongoClient: true
});

var Schema = mongoose.Schema;

var DataTable = new Schema(
  {
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    timeOn: {type: String, required: true, max: 100},
    timeOff: {type: String, required: true, max: 100}
  }
);

//Export model
module.exports = mongoose.model('DataTableInfo', DataTable);