/**
 * Login application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('registration')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['$scope', 'LocalStorage', 'QueryService', 'AuthTest', 'ToServer', 'Memory', '$interval', '$state'];


  function RegistrationController($scope, LocalStorage, QueryService, AuthTest, ToServer, Memory, $interval, $state) {

    // 'controller as' syntax
    var vm = this;

    vm.user = {};
    vm.user.username = "";
    vm.user.password = "";
    vm.message = false;
    vm.enterUser = enterUser;
    
    ////////////  function definitions

    function enterUser() {
      ToServer.registration({}, {
        "username": vm.user.username,
        "password": vm.user.password
      }, function(response){
        vm.message = response.message;
        $state.go('login');
      }, function(err) {
        if(err.status == 401) {
          vm.message = err.data.message;
        } else if (err.status == -1) {
          vm.message = "Not connected, probably server doesn't work.";
        }
      });
    };

  };


})();