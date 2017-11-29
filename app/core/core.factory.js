;(function() {


  /**
   * Memory factory
   *
   */
  angular
    .module('core')
    .factory('Memory', Memory);

  Memory.$inject = ['localStorageService'];


  ////////////


  function Memory(localStorageService) {

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

    return $resource('http://localhost:8000/users', {}, {
      query: {
        method: 'GET',
        params: {},
        isArray: true
      },
      sendNewInfo: {
        method: 'POST'
      },
      updateInfo: {
        method: 'PUT'
      },
      cdelete: {
        url: 'http://localhost:8000/users/:opacha',
        method: 'DELETE',
        params:{ opacha: '@id'}
        // headers: {'test': 'test'}
      }
    });

    ////////////  function definitions


  };


})();
