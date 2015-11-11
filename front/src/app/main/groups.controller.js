(function() {
  'use strict';

  angular
    .module('angApp')
    .controller('GroupsController', GroupsController);


  /** @ngInject */
    function GroupsController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.goodBye = function(){
      alert("BYE");
    }

    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1447235579743;
    // vm.showToastr = showToastr;

    // activate();

    // function activate() {
    //   getWebDevTec();
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }

    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }

    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();

    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
  }
})();
