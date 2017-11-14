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

    vm.usersList = Users.query();

    vm.test = $stateParams;


    ////////////  function definitions


  }


})();