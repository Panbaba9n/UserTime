;(function() {

  'use strict';

  /**
   * Main navigation, just a HTML template
   * @author Jozef Butko
   * @ngdoc  Directive
   *
   * @example
   * <edit><edit/>
   *
   */
  angular
    .module('boilerplate')
    .directive('edit', edit);

  function edit() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      scope: '=',
      templateUrl: 'components/directives/edit-user.html'
    };

    return directiveDefinitionObject;
  }

})();