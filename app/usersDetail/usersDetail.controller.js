/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('usersDetail')
    .controller('UsersDetailController', UsersDetailController);

  UsersDetailController.$inject = ['LocalStorage', 'QueryService', 'Users', '$stateParams'];


  function UsersDetailController(LocalStorage, QueryService, Users, $stateParams) {

    // 'controller as' syntax
    var vm = this;

    vm.userInfo = [];

    var userIndex = +$stateParams.userIndex;

    var usersList = Users.query().$promise.then(function(data){
      vm.userInfo = data[userIndex];
    }, function(err){
      // failure, use err for logging etc...
    });


    vm.test = $stateParams;


    ////////////  function definitions


  }


})();