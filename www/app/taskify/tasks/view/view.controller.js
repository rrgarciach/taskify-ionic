(function () {
  'use strict';

  angular.module('app.taskify.tasks')
    .controller('TaskViewCtrl', TaskViewCtrl);

  function TaskViewCtrl($stateParams, $ionicLoading, taskService) {
    var vm = this;
    init();

    function displayLoading() {
      $ionicLoading.show({
        template: 'Loading...'
      })
        .then(function () {
          loadTask();
        });

    }

    function loadTask() {
      var taskId = $stateParams.id;
      taskService.get(taskId)
        .then(function (response) {
          vm.task = response.data;
          $ionicLoading.hide();
        });
    }

    function init() {
      displayLoading();
    }
  }

})();
