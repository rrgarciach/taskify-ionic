angular.module('app')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/components/menu/menu.html',
        controller: 'MenuCtrl'
      })

      .state('app.taskify', {
        url: '/tasks',
        views: {
          'menuContent': {
            templateUrl: 'app/taskify/tasks/tasks.html',
            controller: 'TasksCtrl as vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/app/tasks');
  });
