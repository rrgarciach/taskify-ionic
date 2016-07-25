angular.module('app.taskify.tasks')

  .config(function ($stateProvider) {
    $stateProvider

      .state('app.tasks', {
        url: '/tasks',
        views: {
          'menuContent': {
            templateUrl: 'app/taskify/tasks/list/list.html',
            controller: 'TasksListCtrl as vm'
          }
        }
      })
      .state('app.tasks:view', {
        url: '/tasks/:id',
        views: {
          'menuContent': {
            templateUrl: 'app/taskify/tasks/view/view.html',
            controller: 'TaskViewCtrl as vm'
          }
        }
      });

  });
