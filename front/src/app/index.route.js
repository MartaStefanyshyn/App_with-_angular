(function() {
  'use strict';

  angular
    .module('angApp')
    .config(routerConfig)
    .factory('Groups', GroupsFactory);
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
        controller: "GroupsController"
      }).state("group", {
        url: "/groups/:id",
        templateUrl: "app/main/show.html",
        controller: "GroupShowController"
      }).state("group_edit", {
        url: "/groups/:id/edit",
        templateUrl: "app/main/edit.html",
        controller: "GroupShowController"
      }).state("group_new", {
        url: "/groups_new",
        templateUrl: "app/main/new.html",
        controller: "GroupNewController"
      });

    $urlRouterProvider.otherwise('/');
  }

  /** @ngInject */
  function GroupsFactory($resource) {
    var Groups = $resource('/api/groups/:id', {id: '@id'},
      {
          'create':  { method: 'POST' },
          'show':    { method: 'GET', isArray: false, responseType: 'json'  },
          'update':  { method: 'PUT' },
          'destroy': { method: 'DELETE' }
      });
    return Groups;
  }

})();
