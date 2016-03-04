(function() {
  'use strict';

  angular
    .module('annualTimeBlock')
    .value('GoogleApp', {
      apiKey: 'AIzaSyCcgg8cp_fEA3nXRfTtM1E6wRwKkSsMLio',
      clientId: '792481441566-uq4rseenlu6pifbnojdgktqfng7lg6fv.apps.googleusercontent.com',
      scopes: [
        'https://www.googleapis.com/auth/calendar'
      ]
    })
    .run(runBlock);

  /** @ngInject */
  function runBlock() {


  }

})();
