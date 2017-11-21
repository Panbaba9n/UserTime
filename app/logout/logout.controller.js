/**
 * Logout application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('logout')
    .controller('LogoutController', LogoutController);

  LogoutController.$inject = ['LocalStorage', 'AuthTest', 'ToServer', '$interval', '$state'];


  function LogoutController(LocalStorage, AuthTest, ToServer, $interval, $state) {

    // 'controller as' syntax
    var vm = this;

    vm.user = {};
    vm.user.username = "";
    vm.user.password = "";
    vm.message = false;
    vm.isAuth = false;

    vm.exitUser = exitUser;
    vm.logout = AuthTest.isAuthentificaded();

    
    ////////////  function definitions


    function exitUser() {
      AuthTest.logout();
      vm.user = {};
      vm.message = false;
      vm.logout = false;
    };

  };


})();