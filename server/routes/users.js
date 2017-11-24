var express = require('express');
var router = express.Router();

var DataTableInfo = require('../models/tableData');

/* GET users listing. */
router.get('/', function(req, res, next) {

	var dbData = {};
	DataTableInfo.find({}, function (err, docs) {
		if (err) {return console.error(err);}
		dbData = docs;
		console.log(dbData);
		if( ! dbData ){
			res.status(401).json({message:"no data found"});
		} else {
			res.json(dbData);
		}
	});


  // res.send('respond with a resource');
});
/* test. */
router.post('/', function(req, res, next) {

	if(req.body.firstName && req.body.lastName && req.body.timeOn && req.body.timeOff){
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var timeOn = req.body.timeOn;
        var timeOff = req.body.timeOff;
        console.log(req.body);

        var dbData = {};
        DataTableInfo.find({ 'firstName': firstName }, function (err, docs) {
            if (err) {return console.error(err);}
            dbData = docs[0];
            if( dbData ){
            	res.status(401).json({message:"Such user already exist! Try another username."});
            } else {
            	dataItemCreate(firstName, lastName, timeOn, timeOff, function(cb) {
            		res.json({message: "Adding compleate successfully!"});
            	});
            }
        });
    } else {
        res.status(401).json({message:"Something went wrong"});
    }

    function dataItemCreate(firstName, lastName, timeOn, timeOff, cb) {
    	datadetail = {firstName:firstName, lastName:lastName, timeOn:timeOn, timeOff:timeOff }
    	var dataItem = new DataTableInfo(datadetail);

    	dataItem.save(function (err) {
    		if (err) {
    			cb(err, null)
    			return
    		}
    		console.log('New User: ' + dataItem);
    		cb(null, dataItem)
    	});
    }
});

module.exports = router;
