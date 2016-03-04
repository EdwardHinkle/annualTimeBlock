(function() {
  'use strict';

  angular
    .module('annualTimeBlock')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, googleLogin) {
    var vm = this;

    $log.debug("Testing");

    vm.googleAuthenticate = function() {
      $log.debug("Login with Google");
      googleLogin.login();
    }
    vm.currentUser = googleLogin.currentUser;

  }
})();
