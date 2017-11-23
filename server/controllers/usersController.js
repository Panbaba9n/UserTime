// var Users = require('../models/users');

// // Display list of all Users 
// exports.users_list = function(req, res) {
//     Users.find({}, 'userLogin userPassword')
//     .exec(function (err, list_users) {
//         if (err) { return next(err); }
//             //Successful, so render
//             res.json('auth', { users_list: list_users });
//             // res.render('auth', { users_list: list_users });
//         });
// };

// // Display detail page for a specific Users 
// exports.users_detail = function(req, res) {
//     res.send('NOT IMPLEMENTED: Users detail: ' + req.params.id);
// };

// // Display Users create form on GET
// exports.users_create_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: Users create GET');
// };

// // Handle Users create on POST
// exports.users_create_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: Users create POST');
// };

// // Display Users delete form on GET
// exports.users_delete_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: Users delete GET');
// };

// // Handle Users delete on POST
// exports.users_delete_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: Users delete POST');
// };

// // Display Users update form on GET
// exports.users_update_get = function(req, res) {
//     res.send('NOT IMPLEMENTED: Users update GET');
// };

// // Handle Users update on POST
// exports.users_update_post = function(req, res) {
//     res.send('NOT IMPLEMENTED: Users update POST');
// };