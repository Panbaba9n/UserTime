;(function() {


  /**
   * Definition of the login app module and its dependencies
   */
  angular
    // .module('login', ['ngResource', 'LocalStorageModule']);
    .module('splitModule', [])
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
      .state('login.splitModule', {
        url: '/splitModule',
        template: '<div>lol</div>',
        controller: 'SplitModuleController',
        controllerAs: 'splitModule',
      });

  }


})();