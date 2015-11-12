(function() {
  'use strict';

  angular
    .module('angApp')
    .controller('GroupShowController', GroupShowController);

  /** @ngInject */
    function GroupShowController($scope, Groups, $stateParams, $location) {
      $scope.group = Groups.show({id: $stateParams.id});

      $scope.back = function () {
        $location.path('/groups');
      };
      $scope.updateGroup = function () {
        Groups.update($scope.group);
        $location.path('/groups');
      };
    }
})();
