;(function() {


  /**
   * Memory factory
   *
   */
  angular
    .module('core')
    .factory('Memory', Memory);

  Memory.$inject = ['$http', 'localStorageService'];


  ////////////


  function Memory($http, localStorageService) {

    return {
      saveUsername: saveUsername,
      getUsername: getUsername,
      logout: logout
    };

    ////////////  function definitions
    function saveUsername(username) {
      localStorageService.set('username', username);
    };

    function getUsername() {
      return localStorageService.get('username');
    };

    function logout() {
      localStorageService.remove('username');
    };

  };


  

  /**
   * Users factory
   *
   */
  angular
    .module('core')
    .factory('Users', Users);

  Users.$inject = ['$resource'];


  ////////////


  function Users($resource) {

    return $resource('../../users/users.json', {}, {
      query: {
        method: 'GET',
        params: {},
        isArray: true
      }
    });

    ////////////  function definitions


  };


})();
