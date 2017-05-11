var myApp = angular.module('myApp', []);

myApp.controller('HighFiveController', function(RandNum, HighFiveCount) {
  console.log('NG');

  var vm = this;

  //function to generate a random number on page init
  vm.apocNum = function() {
    vm.domNum = RandNum.randNumGen();
    console.log(vm.domNum);
  }; //end apocNum function

  // function to generate random number on button click
  vm.userNumber = function() {
    vm.buttonNumber = RandNum.randNumGen();
    console.log(vm.buttonNumber);
    vm.compareThem(vm.domNum, vm.buttonNumber);
  }; //end userNumber function

  // function to compare skill level and quality of high five
  vm.compareThem = function(firstNum, secondNum) {
    if(firstNum >= secondNum){
      vm.counting = function() {
        HighFiveCount.counterSetter();
      };
    }
    else {
      vm.count = HighFiveCount.counterGetter();
      console.log(vm.count);
    }
  }; //end compareThem
}); //end controller
