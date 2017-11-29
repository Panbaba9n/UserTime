/**
 * users controller
 */
;(function() {

  angular
    .module('users')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['$scope', 'Users'];


  function UsersController($scope, Users) {

    $scope.$on('reloadInfo', scopeEvent);

    // 'controller as' syntax
    var vm = this;

    vm.usersList = Users.query();


    ////////////  function definitions
    function scopeEvent() {
      vm.usersList = Users.query();
    }






    /* ======================================
     *  Realization whith add, edit
     *  
     * ======================================
    */
    vm.update = update;
    vm.save = save;
    vm.cancel = cancel;
    vm.delete = fnDelete;
    
    ////////////  function definitions
    function update(user) {
      user.isEdit = !user.isEdit;
      user.oldParams = angular.copy(user);
    }

    function fnDelete(user) {
      console.log(user.firstName);
      Users.cdelete({
        opacha: user.firstName
      },
      {}, function(response){
        console.log(response);
        vm.message = response.message;
        scopeEvent();
      }, function(err) {
        console.log(err);
        if(err.status == 401) {
          vm.message = err.data.message;
        } else if (err.status == -1) {
          vm.message = "Not connected, probably server doesn't work.";
        }
      });
    }

    function save(user) {
      // user.isEdit = !user.isEdit;

      // console.log(user); DELETE
      enterInfo(user);
    }

    function cancel(user) {
      user.isEdit = !user.isEdit;

      user.firstName = user.oldParams.firstName;
      user.lastName = user.oldParams.lastName;
      user.timeOn = user.oldParams.timeOn;
      user.timeOff = user.oldParams.timeOff;
      
      scopeEvent();
    }

    function enterInfo(user) {
      Users.updateInfo({}, 
      {
        "oldfirstName": user.oldParams.firstName,
        "newfirstName": user.firstName,
        "newlastName": user.lastName,
        "newtimeOn": user.timeOn,
        "newtimeOff": user.timeOff,
        "id": user._id
      }, function(response){
        user.isEdit = !user.isEdit;
        scopeEvent();
      }, function(err) {
        if(err.status == 409) {
          console.log(err.data.message);
        } else if (err.status == -1) {
          console.log("Not connected, probably server doesn't work.");
        }
      });
    };


  }

  // TODO next realization (popup form)


})();