(function() {
  'use strict';

  angular
    .module('annualTimeBlock')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log, googleLogin, googlePlus) {
    var vm = this;

    $log.debug("Testing");

    vm.googleAuthenticate = function() {
      $log.debug("Login with Google");
      googleLogin.login();
    }

    $scope.$on("googlePlus:loaded", function() {
      googlePlus.getCurrentUser().then(function(user) {
        vm.currentUser = user;
        console.log("User");
        console.log(user);
      });
    })
    vm.currentUser = googleLogin.currentUser;
    console.log("User");
    console.log(googleLogin.currentUser);

  }
})();
