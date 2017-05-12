//service to generate random number between
myApp.service('RandNum', function() {

  this.randNumGen = function() {
    return (Math.floor((Math.random() * 10) + 1));
  };
}); // end RandNum service


// service to track count of successful high-fivess
myApp.service('HighFiveCount', function() {
  var counter = 0;

  this.counterGetter = function() {
    return counter;
  };

  this.counterSetter = function() {
    console.log('counterSetter');
    counter++;
  };
}); // end HighFiveCount service
