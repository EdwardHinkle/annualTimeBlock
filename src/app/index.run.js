(function() {
  'use strict';

  angular
    .module('annualTimeBlock')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
