/**
 * 
 * AngularJS Boilerplate
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 * 
 */
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('boilerplate', [
      'ui.router',
      'ngResource',

      'ngMaterial',
      'ngMessages',
      'LocalStorageModule',

      'core',
      'login',
      'registration',

      'splitModule',
      
      // 'logout',
      'users',
      'usersDetail',
      'security'
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

    $urlRouterProvider.otherwise('/login');

    // routes
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'MainController',
        controllerAs: 'home'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'MainController',
        controllerAs: 'home',
        isAuthentificaded: true
      });
    }





  /**
   * Run block
   */
  angular
    .module('boilerplate')
    .run(run);

  run.$inject = ['$rootScope', 'AuthTest', '$state', '$interval'];

  function run($rootScope, AuthTest, $state, $interval) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      if (toState.isAuthentificaded) {
        // nothing to do
      } else if (toState.name !== 'login' && !AuthTest.isAuthentificaded()) {
        event.preventDefault();
        $state.go('login');
      }
    });

  }

})();