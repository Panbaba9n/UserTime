/**
 * users controller
 */
;(function() {

  angular
    .module('users')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['$scope', 'Users'];


  function UsersController($scope, Users) {

    // 'controller as' syntax
    var vm = this;

    vm.usersList = Users.query();

    $scope.$on('reloadInfo', scopeEvent);


    ////////////  function definitions
    function scopeEvent() {
      vm.usersList = Users.query();
    }


  }


})();