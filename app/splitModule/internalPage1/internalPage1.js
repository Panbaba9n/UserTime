;(function() {


  /**
   * Definition of the login app module and its dependencies
   */
  angular
    // .module('login', ['ngResource', 'LocalStorageModule']);
    .module('internalPage1', [])
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
      .state('splitModule.internalPage1', {
        url: '/internalPage1',
        templateUrl: 'app/splitModule/internalPage1/internalPage1.html',
        controller: 'internalPage1Controller',
        controllerAs: 'internalPage1',
      })
      .state('splitModule.internalPage1.route1', {
        url: '/route1',
        views: {
          "viewA": { template: "next lvl inner page route1.viewA" },
          "viewB": { template: "next lvl inner page route1.viewB" }
        }
      })
      .state('splitModule.internalPage1.route2', {
        url: '/route2',
        views: {
          "viewA": { template: "next lvl inner page route2.viewA" },
          "viewB": { template: "next lvl inner page route2.viewB" }
        }
      });

  }


})();