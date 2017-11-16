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

  MainController.$inject = ['LocalStorage', 'QueryService', 'AuthTest', 'ToServer'];


  function MainController(LocalStorage, QueryService, AuthTest, ToServer) {

    // 'controller as' syntax
    var vm = this;

    vm.user = {};
    vm.user.username = "";
    vm.user.password = "";


    vm.enterUser = enterUser;


    // Для Логина
    vm.message = false;
    vm.success = false;

    
    ////////////  function definitions

    function enterUser() {
      console.log("start");
      console.log(vm.user.username);
      console.log(vm.user.password);

      // типо получили токен
      saveToken({'Ara ya mashin!': 'lol'});

      ToServer.login({}, {
        "username": vm.user.username,
        "password": vm.user.password
      }, function(response){
        console.log(response);
        vm.message = response.message;
        vm.success = response.success;
        saveToken(response.token);
      });
    };

    

    function saveToken(token) {
      return AuthTest.saveToken(token);
    };


    //DELETE!
    // проверка на утентификацию
    // vm.testAuthentificated = AuthTest.isAuthentificaded();
    // console.log(vm.testAuthentificated);

    // vm.testfactorylogin = AuthTest.showLogin();
    // console.log(vm.testfactorylogin);

    // vm.showLogin = function() {
    //   console.log(vm.testfactorylogin);
    // };
    // vm.showPass = function() {
    //   console.log(vm.user.password);
    // };

  };


})();