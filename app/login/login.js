;(function() {


  /**
   * Definition of the login app module and its dependencies
   */
  angular
    // .module('login', ['ngResource', 'LocalStorageModule']);
    .module('login', [])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   * 
   */
  function config($stateProvider, $urlRouterProvider) {

    // routes
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
      });

  }


})();