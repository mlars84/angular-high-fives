//service to generate random number between
myApp.service('mainServices', function() {

  var service = this;
  var counter = 0;

  //function to generate a randmom number
  service.randNumGen = function(max, min) {
    return (Math.floor(Math.random() * (max - min)) + min);
  }; //end randNumGen

  //function to get the current count
  service.counterGetter = function() {
    return counter;
  }; //end counterGetter

  //function to increment the counter by 1
  service.counterSetter = function() {
    console.log('counterSetter');
    counter++;
  }; //end counterSetter

}); // end mainServices service
