var myApp = angular.module('myApp', ['ngRoute']);

//config to provide routes and establish ctlrs
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<a href="http://marvel.com/characters/browse">More on Marvel Characters</a>',
    controller: 'DefaultController as dc'
  }).when('/apocalypse', {
    templateUrl: 'views/pages/apocalypse.html',
    controller: 'ApocalypseController as ac'
  }).when('/onslaught', {
    templateUrl: 'views/pages/onslaught.html',
    controller: 'OnslaughtController as oc'
  }).when('/mystique', {
    templateUrl: 'views/pages/mystique.html',
    controller: 'MystiqueController as mc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
}); //end config

myApp.controller('DefaultController', function() {
  console.log('DefaultController');
}); //end DefaultController

myApp.controller('ApocalypseController', ['mainServices', function(mainServices) {
  console.log('in ApocalypseController');
  //global view model
  var vm = this;

  //function to generate a random number on page init
  vm.apocNum = function() {
    vm.count = mainServices.counterGetter();
    vm.firstDomNum = mainServices.randNumGen(10, 1);
    console.log(vm.firstDomNum);
  }; //end apocNum function

  // function to generate random number on button click
  vm.userNumber = function() {
    vm.buttonNumber = mainServices.randNumGen(10, 1);
    console.log(vm.buttonNumber);
    vm.compareThem(vm.firstDomNum, vm.buttonNumber);
  }; //end userNumber function

  // function to compare skill level and quality of high five
  vm.compareThem = function(firstNum, secondNum) {
    console.log(firstNum, secondNum);
    if(firstNum < secondNum) {
      mainServices.counterSetter();
      vm.count = mainServices.counterGetter();
    } else {
      vm.count = mainServices.counterGetter();
    }
  }; //end compareThem
}]); //end ApocalypseController function

myApp.controller('OnslaughtController', ['mainServices', function(mainServices) {
  console.log('in OnslaughtController');
  //view model
  var vm = this;

  //function to generate a random number on page init
  vm.onslaughtNum = function() {
    vm.count = mainServices.counterGetter();
    vm.firstDomNum = mainServices.randNumGen(10, 6);
    console.log(vm.firstDomNum);
  }; //end apocNum function

  // function to generate random number on button click
  vm.userNumber = function() {
    vm.buttonNumber = mainServices.randNumGen(10, 1);
    console.log(vm.buttonNumber);
    vm.compareThem(vm.firstDomNum, vm.buttonNumber);
  }; //end userNumber function

  // function to compare skill level and quality of high five
  vm.compareThem = function(firstNum, secondNum) {
    console.log(firstNum, secondNum);
    if(firstNum < secondNum) {
      mainServices.counterSetter();
      vm.count = mainServices.counterGetter();
    } else {
      vm.count = mainServices.counterGetter();
    }
  }; //end compareThem
}]); //end OnslaughtController

myApp.controller('MystiqueController', ['mainServices', function(mainServices) {
  console.log('in MystiqueController');
  //view model
  var vm = this;

  //function to generate a random number on page init
  vm.mystiqueNum = function() {
    vm.count = mainServices.counterGetter();
    vm.firstDomNum = mainServices.randNumGen(10, 4);
    console.log(vm.firstDomNum);
  }; //end apocNum function

  // function to generate random number on button click
  vm.userNumber = function() {
    vm.buttonNumber = mainServices.randNumGen(10, 1);
    console.log(vm.buttonNumber);
    vm.compareThem(vm.firstDomNum, vm.buttonNumber);
  }; //end userNumber function

  // function to compare skill level and quality of high five
  vm.compareThem = function(firstNum, secondNum) {
    console.log(firstNum, secondNum);
    if(firstNum < secondNum) {
      mainServices.counterSetter();
      vm.count = mainServices.counterGetter();
    } else {
      vm.count = mainServices.counterGetter();
    }
  }; //end compareThem
}]); //end MystiqueController
