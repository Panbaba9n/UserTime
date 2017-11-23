/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'AuthTest', 'Memory', '$timeout', '$state'];


  function MainController($scope, AuthTest, Memory, $timeout, $state) {

    var timer = {};
    // 'controller as' syntax
    var vm = this;

    vm.exitUser = exitUser;
    vm.logout = AuthTest.isAuthentificaded();
    vm.userName = Memory.getUsername();
    vm.timeoutDeleteToken = timeoutDeleteToken;

    $scope.$on('myevent', scopeEvent);

    ////////////  function definitions
    function exitUser() {
      AuthTest.logout();
      Memory.logout();
      vm.userName = Memory.getUsername();
      vm.logout = AuthTest.isAuthentificaded();
      $timeout.cancel(timer); // if "logout" was clicked, not to state one more
      $state.go('login');
    };

    function saveToken(token) {
      return AuthTest.saveToken(token);
    };
    function saveUsername(username) {
      return Memory.saveUsername(username);
    };

    function timeoutDeleteToken() {
      return $timeout( exitUser, 1000*15*60);
    };

    function scopeEvent(event, args) {
      vm.userName = Memory.getUsername();
      vm.logout = AuthTest.isAuthentificaded();
      timer = vm.timeoutDeleteToken();
    };

  };


})();