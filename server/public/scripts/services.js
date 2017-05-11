// service to track count of successful high-fivess
myApp.service('HighFiveCount', function($http) {

  this.counterGetter = function() {
    return counter;
  };

  this.counterSetter = function() {
    console.log('counterSetter');
    counter++
  };

}); // end HighFiveCount service

//service to generate random number between
myApp.service('RandNum', function($http) {
  Math.floor((Math.random() * 10) + 1);
}); // end RandNum service
