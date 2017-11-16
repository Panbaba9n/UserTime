;(function() {


  /**
   * Security factory
   *
   */
  angular
    .module('security')
    .factory('AuthTest', AuthTest);

  AuthTest.$inject = ['$resource', 'localStorageService'];


  ////////////


  function AuthTest($resource, localStorageService) {

    return {
      isAuthentificaded: authentificaded,

      saveToken: saveToken,
      getToken: getToken

      
    };

    ////////////  function definitions

    function authentificaded() {
      var isAuth = false;
      //для тестировки
      if (localStorageService.get('token')) {
       isAuth = true; 
     }
      // isAuth = true;
      
      return isAuth;
    };

    

    function saveToken(token) {
      localStorageService.set('token', token);
    };

    function getToken() {
      localStorageService.get('token');
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


    // Для теста отправил Get-запрос
    // return $resource('', {}, {
    //   login: {
    //     method: 'GET',
    //     url: 'http://localhost:8000/auth'
    //   }
    // });


  };


})();
