;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('addUser', [
      'ui.router',

      'ngMaterialDatePicker',
      
      'core'
    ])
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
      .state('users.addUser', {
        url: '/add-user',
        templateUrl: 'views/addUser.html',
        controller: 'AddUserController',
        controllerAs: 'addUser'
      });

  }


})();