var express = require('express');
var router = express.Router();

var DataTableInfo = require('../models/tableData');

/* GET users listing. */
router.get('/', function(req, res, next) {

	var dbData = {};
	DataTableInfo.find({}, function (err, docs) {
		if (err) {return console.error(err);}
		dbData = docs;
		// console.log(dbData);
		if( ! dbData ){
			res.status(401).json({message:"no data found"});
		} else {
			res.json(dbData);
		}
	});


  // res.send('respond with a resource');
});

/* add a dataInfo */
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

/* update */
router.put('/', function(req, res, next) {

    if( req.body.oldfirstName &&
        req.body.newfirstName && req.body.newlastName && req.body.newtimeOn && req.body.newtimeOff ){

        var firstName = req.body.oldfirstName;
        var newfirstName = req.body.newfirstName;
        var newlastName = req.body.newlastName;
        var newtimeOn = req.body.newtimeOn;
        var newtimeOff = req.body.newtimeOff;
        var id = req.body.id;

        var dbData = {};
        DataTableInfo.find({ 'firstName': newfirstName }, function (err, docs) {
            if (err) {return console.error(err);}
            dbData = docs[0];
            if( dbData && id != dbData._id){
                res.status(409).json({message:"Such user already exist! Try another username."});
            } else {
                dataUpdate(firstName, newfirstName, newlastName, newtimeOn, newtimeOff);
            }
        });

        function dataUpdate(firstName, newfirstName, newlastName, newtimeOn, newtimeOff, cb) {
            DataTableInfo.update({ 'firstName': firstName }, {$set:{
                'firstName': newfirstName,
                'lastName': newlastName,
                'timeOn': newtimeOn,
                'timeOff': newtimeOff
            }}, {}, function (err, responce) {
                if (err) {
                    res.json({message: "Updated NOT successfully!"});
                    return console.error(err);
                } else if ( responce.nModified ) {
                    res.json({message:"Updated successfully!"});
                } else {
                    res.json({message:"No such user\/info founded!"});
                }
            });
        }
    } else {
        res.status(409).json({message:"Something went wrong"});
    }

});

/* delete */
router.delete('/:userId', function(req, res, next) {
    console.log(req.params);
    console.log(req.params.userId);
    if( req.params.userId ){

        var firstName = req.params.userId;

        console.log(req.body);


        DataTableInfo.deleteOne({ 'firstName': firstName }, function (err, responce) {
            if (err) {
                res.json({message: "Delete NOT successfully!"});
                return console.error(err);
            } else if ( responce.deletedCount ) {
                res.json({message:"User deleted successfully!"});
            } else {
                res.json({message:"No such user\/info founded!"});
            }
        });
    } else {
        res.status(401).json({message:"Something went wrong"});
    }

});

module.exports = router;
