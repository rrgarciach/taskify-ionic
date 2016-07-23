'use strict';

angular.module('app.taskify.tasks')
  .controller('TasksListCtrl', TasksListCtrl);

function TasksListCtrl($ionicPopup, taskService) {
  var vm = this;
  init();

  function showAlert() {
    $ionicPopup.alert({
      title: 'Ups!',
      template: 'Something gone wrong with the server. Please try again later.'
    });
  }

  function init() {
    vm.tasks = [];

    taskService.getAll()
      .then(function (response) {
        vm.tasks = response.data;
      })
      .catch(function (err) {
        showAlert();
      });
  }

}
