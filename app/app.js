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
      'LocalStorageModule',

      'core',
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

    $urlRouterProvider.otherwise('/');

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


    // $httpProvider.interceptors.push('authInterceptor');

  }


  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   * 
   */
  // angular
  //   .module('boilerplate')
  //   .factory('authInterceptor', authInterceptor);

  // authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

  // function authInterceptor($rootScope, $q, LocalStorage, $location) {

  //   return {

  //     // intercept every request
  //     request: function(config) {
  //       config.headers = config.headers || {};
  //       return config;
  //     },

  //     // Catch 404 errors
  //     responseError: function(response) {
  //       if (response.status === 404) {
  //         $location.path('/');
  //         return $q.reject(response);
  //       } else {
  //         return $q.reject(response);
  //       }
  //     }
  //   };
  // }


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
      } else if (toState.name !== 'home' && !AuthTest.isAuthentificaded()) {
        event.preventDefault();
        $state.go('home');
      }
    });

    $interval( function(){
      delete localStorage['ls.token'];
    }, 1000*60);

  }


})();