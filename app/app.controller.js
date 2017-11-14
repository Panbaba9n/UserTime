/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService'];


  function MainController(LocalStorage, QueryService) {

    // 'controller as' syntax
    var vm = this;


    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  };


  // angular
  //   .module('boilerplate')
  //   .controller('UsersController', UsersController);

  // UsersController.$inject = ['LocalStorage', 'QueryService', 'Users'];


  // function UsersController(LocalStorage, QueryService, Users) {

  //   // 'controller as' syntax
  //   var vm = this;

  //   vm.usersList = Users.query();


  //   ////////////  function definitions



  // }


})();