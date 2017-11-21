;(function() {


  /**
   * Security factory
   *
   */
  angular
    .module('security')
    .factory('AuthTest', AuthTest);

  AuthTest.$inject = ['$resource', 'localStorageService'];


  ////////////  function definitions


  function AuthTest($resource, localStorageService) {
    return {
      isAuthentificaded: authentificaded,
      saveToken: saveToken,
      getToken: getToken,
      logout: logout
    };

    ///////////

    function authentificaded() {
      var isAuth = false;
      if ( localStorageService.get('token') ) {
       isAuth = true; 
      }
      return isAuth;
    };

    function saveToken(token) {
      localStorageService.set('token', token);
    };

    function getToken() {
      localStorageService.get('token');
    };

    function logout() {
      localStorageService.remove('token');
    };

  };


  

  /**
   * Users factory
   *
   */
  angular
    .module('core')
    .factory('ToServer', ToServer);

  ToServer.$inject = ['$resource'];


  //////////// function definitions


  function ToServer($resource) {

    return $resource('', {}, {
      login: {
        method: 'POST',
        url: 'http://localhost:8000/auth'
      }
    });

  };


})();
