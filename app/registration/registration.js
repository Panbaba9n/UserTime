;(function() {


  /**
   * Definition of the login app module and its dependencies
   */
  angular
    // .module('login', ['ngResource', 'LocalStorageModule']);
    .module('registration', [])
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
      .state('registration', {
        url: '/registration',
        templateUrl: 'views/registration.html',
        controller: 'RegistrationController',
        controllerAs: 'registration',
        isAuthentificaded: true
      });

  }


})();