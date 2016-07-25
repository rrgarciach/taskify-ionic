'use strict';

class TasksCtrl {
  constructor($ionicPopup, taskService) {
    this.$ionicPopup = $ionicPopup;
    this.taskService = taskService;
    this.init();

    this.taskService.getTasks()
      .then(function (response) {
        this.tasks = response.data;
      })
      .catch(function (err) {
        console.log(JSON.stringify(err));
      });
  }
  
  showAlert() {
    this.$ionicPopup.alert({
      title: 'Ups!',
      template: 'Something gone wrong with the server. Please try again later.'
    });
  }

  init() {
    this.tasks = [];

    this.taskService.getAll()
      .then(function (response) {
        this.tasks = response.data;
      })
      .catch(function (err) {
        this.showAlert();
      });
  }
}

angular.module('app.taskify.tasks')
  .controller('TasksCtrl', TasksCtrl);
