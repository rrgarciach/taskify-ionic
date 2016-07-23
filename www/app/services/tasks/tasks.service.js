'use strict';

angular.module('app.services')
  .service('taskService', taskService);

function taskService (apiService) {
  var resourceUrl = '/tasks';

  return {
    getAll: getAll
  };

  function getAll() {
    return apiService.get(resourceUrl);
  }

  function get(id) {
    return apiService.get(resourceUrl + '/' + id);
  }
}
