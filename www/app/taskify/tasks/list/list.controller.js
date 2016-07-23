'use strict';

class TasksCtrl {
  constructor(taskService) {
    var vm = this;

    vm.tasks = [];

    taskService.getTasks()
      .then(function (response) {
        vm.tasks = response.data;
      })
      .catch(function (err) {
        console.log(JSON.stringify(err));
      });
  }
}

angular.module('app.taskify.tasks')
  .controller('TasksCtrl', TasksCtrl);
