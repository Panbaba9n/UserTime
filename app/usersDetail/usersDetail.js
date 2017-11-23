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
    .module('usersDetail', [
      'ui.router',

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
      .state('usersDetail', {
        url: '/users/:userIndex',
        templateUrl: 'views/users-detail.html',
        controller: 'UsersDetailController',
        controllerAs: 'usersDetail'
        // resolve: {
        //   usersDetail: function(users, $stateParams) {
        //     return users.find(function(usersDetail) { 
        //       return userIndex === $stateParams.userIndex;
        //     });
        //   }
        // }
      });

  }


})();