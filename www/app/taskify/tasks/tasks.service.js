'use strict';

angular.module('app.taskify')
  .service(taskService, taskService);

function taskService (apiService) {
  var resourceUrl = '/tasks';

  return {
    getTasks: getTasks
  };

  function getTasks() {
    return apiService.get(resourceUrl);
  }
}
