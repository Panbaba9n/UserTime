/**
 * users controller
 */
;(function() {

  angular
    .module('users')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['Users'];


  function UsersController(Users) {

    // 'controller as' syntax
    var vm = this;

    vm.usersList = Users.query();


    ////////////  function definitions


  }


})();