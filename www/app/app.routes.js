angular.module('app')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.taskify', {
    url: '/tasks',
    views: {
      'menuContent': {
        templateUrl: 'templates/tasks.html',
        controller: 'TasksCtrl as vm'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/tasks');
});
