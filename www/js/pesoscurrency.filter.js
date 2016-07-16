// Setup the filter
angular.module('starter.filters', [])
  .filter('pesosCurrency', function() {

  return function(input) {

    if(isNaN(input)) {
      return input;
    } else {
      return '$ ' + input.toFixed(2) + ' MXN';
    }
  }

});
