(function() {
  'use strict';

  angular
    .module('annualTimeBlock')
    .config(function(googleLoginProvider) {
        googleLoginProvider.configure({
            clientId: '792481441566-uq4rseenlu6pifbnojdgktqfng7lg6fv.apps.googleusercontent.com',
            scopes: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/plus.login"]
        });
    })
    .run(runBlock);

  /** @ngInject */
  function runBlock(googleLogin) {
    googleLogin.login();

  }

})();
