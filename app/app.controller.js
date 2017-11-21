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

  MainController.$inject = ['$scope', 'LocalStorage', 'QueryService', 'AuthTest', 'ToServer', 'Memory', '$interval', '$state'];


  function MainController($scope, LocalStorage, QueryService, AuthTest, ToServer, Memory, $interval, $state) {

    // 'controller as' syntax
    var vm = this;

    vm.exitUser = exitUser;
    vm.logout = AuthTest.isAuthentificaded();
    vm.userName = Memory.getUsername();
    vm.intervalDeleteToken = intervalDeleteToken;

    $scope.$on('myevent', scopeEvent);

    
    ////////////  function definitions
    function exitUser() {
      AuthTest.logout();
      Memory.logout();
      vm.userName = Memory.getUsername();
      vm.logout = false;
      $state.go('login');
    };

    function saveToken(token) {
      return AuthTest.saveToken(token);
    };
    function saveUsername(username) {
      return Memory.saveUsername(username);
    };

    function intervalDeleteToken() {
      return $interval( function(){
          AuthTest.logout();
          Memory.logout();
          vm.logout = AuthTest.isAuthentificaded();
          vm.userName = Memory.getUsername();
          $state.go('login');
        }, 1000*60);
    };

    function scopeEvent(event, args) {
      vm.userName = Memory.getUsername();
      vm.logout = AuthTest.isAuthentificaded();
      vm.intervalDeleteToken();
    };

  };


})();