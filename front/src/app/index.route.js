(function() {
  'use strict';

  angular
    .module('angApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state("groups", {
        url: "/groups",
        templateUrl: "app/main/groups.html",
        controller: "GroupsController",
        controllerAs: 'group'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
