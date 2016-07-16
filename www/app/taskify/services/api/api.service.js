'use strict';

angular.module('app.taskify.services')
  .service('apiService', apiService);

function apiService ($http) {
  var apiUrl = 'http://localhost:3030';

  return {
    get: get
  };

  function get(url) {
    return $http.get(apiUrl + url);
  }
}
