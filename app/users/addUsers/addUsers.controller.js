/**
 * users controller
 */
;(function() {

  angular
    .module('addUser')
    .controller('AddUserController', AddUserController);

  AddUserController.$inject = ['$scope', '$state', 'Users'];


  function AddUserController($scope, $state, Users) {

    $scope.date = new Date();
    $scope.time = new Date();
    $scope.dateTime = new Date();
    $scope.minDate = moment().subtract(1, 'month');
    $scope.maxDate = moment().add(1, 'month');

    // 'controller as' syntax
    var vm = this;

    // vm.dateTimeStart = {};
    // vm.dateTimeEnd = {};
    vm.enterInfo = enterInfo;
    vm.test = function() {
      console.log( vm.info.newFirstName );
      console.log( vm.info.newLastName );
      console.log( vm.info.dateTimeStart );
      console.log( vm.info.dateTimeEnd );
    };

    function enterInfo() {
      vm.test();
      Users.sendNewInfo({}, {
        "firstName": vm.info.newFirstName,
        "lastName": vm.info.newLastName,
        "timeOn": vm.info.dateTimeStart,
        "timeOff": vm.info.dateTimeEnd
      }, function(response){
        console.log(response);
        vm.message = response.message;
        sendToParentCtrl();
        // vm.info = {};
        $state.go('users');
      }, function(err) {
        if(err.status == 401) {
          vm.message = err.data.message;
        } else if (err.status == -1) {
          vm.message = "Not connected, probably server doesn't work.";
        }
      });
    };
    
    ////////////  function definitions
    function sendToParentCtrl() {
      $scope.$emit('reloadInfo');
    };

  }


})();