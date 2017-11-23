/**
 * Login application controller
 */
;(function() {

  angular
    .module('login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'AuthTest', 'ToServer', 'Memory', '$state'];


  function LoginController($scope, AuthTest, ToServer, Memory, $state) {

    // 'controller as' syntax
    var vm = this;

    vm.user = {};
    vm.user.username = "";
    vm.user.password = "";
    vm.message = false;
    vm.isAuth = false;
    vm.enterUser = enterUser;
    vm.logout = AuthTest.isAuthentificaded();

    
    ////////////  function definitions

    function enterUser() {
      ToServer.login({}, {
        "username": vm.user.username,
        "password": vm.user.password
      }, function(response){
        vm.message = response.message;
        vm.logout = AuthTest.isAuthentificaded;
        saveToken(response.token);
        saveUsername(vm.user.username);
        vm.isAuth = true;
        sendToParentCtrl();
        $state.go('users');
      }, function(err) {
        if(err.status == 401) {
          vm.message = err.data.message;
        } else if (err.status == -1) {
          vm.message = "Not connected, probably server doesn't work.";
        }
      });
    };

    function saveToken(token) {
      return AuthTest.saveToken(token);
    };

    function saveUsername(username) {
      return Memory.saveUsername(username);
    };

    function sendToParentCtrl() {
      $scope.$emit('myevent');
    };

  };


})();