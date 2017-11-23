;(function() {


  /**
   * Definition of the login app module and its dependencies
   */
  angular
    // .module('login', ['ngResource', 'LocalStorageModule']);
    .module('internalPage2', [])
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
      .state('splitModule.internalPage2', {
        url: '/internalPage2',
        template: '<h3>Internal Page 2</h3>',
        controller: 'internalPage2Controller',
        controllerAs: 'internalPage2',
      });

  }


})();