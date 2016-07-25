angular.module('app')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/components/menu/menu.html',
        controller: 'MenuCtrl'
      })

    $urlRouterProvider.otherwise('/app/tasks');
  });
