(function() {
  'use strict';

  angular
    .module('angApp')
    .controller('GroupNewController', GroupNewController);

  /** @ngInject */
    function GroupNewController($scope, Groups, $location) {
      $scope.createNewGroup = function () {
        // var group = new Groups($scope.group);
        // group.$save();
        Groups.save($scope.group);
        $location.path('/groups');
      }
    }
})();

