var myApp = angular.module('myApp', []);

myApp.controller('HighFiveController', [function(HighFiveCount, RandNum) {
  console.log('NG');

  var vm = this;

  vm.count = HighFiveCount.counterGetter();

  vm.counting = function() {
    HighFiveCount.counterSetter();
    vm.count = HighFiveCount.counterGetter();
  };

  vm.RandNum = RandNum.randNumber;
}]); // end controller
