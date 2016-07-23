angular.module('app.taskify.tasks')

  .config(function ($stateProvider) {
    $stateProvider

      .state('app.taskify', {
        url: '/tasks',
        views: {
          'menuContent': {
            templateUrl: 'app/taskify/tasks/list/list.html',
            controller: 'TasksCtrl as vm'
          }
        }
      });

  });
