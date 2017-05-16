var myApp = angular.module('myApp', ['ngRoute']);

//config to provide routes and establish ctlrs
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '/',
    controller: 'ApocalypseController as ac'
  }).when('/apocalypse', {
    templateUrl: 'views/pages/apocalypse.html',
    controller: 'ApocalypseController as ac'
  }).when('/magneto', {
    templateUrl: 'views/pages/magneto.html',
    controller: 'MagnetoController as mc'
  }).when('/mystique', {
    templateUrl: 'views/pages/mystique.html',
    controller: 'MystiqueController as myc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
}); //end config

var vm = this;

  //function to generate a random number on page init
  vm.apocNum = function() {
    vm.count = apocalypseService.counterGetter();
    vm.firstDomNum = RandNum.randNumGen();
    console.log(vm.firstDomNum);
  }; //end apocNum function

  // function to generate random number on button click
  vm.userNumber = function() {
    vm.buttonNumber = RandNum.randNumGen();
    console.log(vm.buttonNumber);
    vm.compareThem(vm.firstDomNum, vm.buttonNumber);
  }; //end userNumber function

  // function to compare skill level and quality of high five
  vm.compareThem = function(firstNum, secondNum) {
    console.log(firstNum, secondNum);
    if(firstNum < secondNum) {
      apocalypseService.counterSetter();
      vm.count = apocalypseService.counterGetter();
    } else {
      vm.count = apocalypseService.counterGetter();
    }
  }; //end compareThem
