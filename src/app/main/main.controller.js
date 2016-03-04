(function() {
  'use strict';

  angular
    .module('annualTimeBlock')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, GAPI, Calendar) {
    var vm = this;

    $log.debug("Testing");

    vm.googleAuthenticate = function() {
      $log.debug("Login with Google");
      // TODO: This is currently using the ngGAPI. Need to replace this with angular-googleapi
      GAPI.init();
    }

  }
})();
