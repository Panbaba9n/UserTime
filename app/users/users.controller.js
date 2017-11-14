/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('users')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['LocalStorage', 'QueryService', 'Users'];


  function UsersController(LocalStorage, QueryService, Users) {

    // 'controller as' syntax
    var vm = this;

    vm.usersList = Users.query();


    ////////////  function definitions


  }


})();