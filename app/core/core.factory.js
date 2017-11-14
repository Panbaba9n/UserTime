;(function() {


  /**
   * Memory factory
   *
   */
  angular
    .module('core')
    .factory('Memory', Memory);

  Memory.$inject = ['$http', 'LocalStorage'];


  ////////////


  function Memory($http, LocalStorage) {
    var login = "admin";
    var password = "local";

    return {
      getLogin: getLogin,
      getPassword: getPassword
    };

    ////////////  function definitions
    function getLogin() {
      return login;
    };

    function getPassword() {
      return password;
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
