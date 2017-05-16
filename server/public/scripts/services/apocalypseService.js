//service to generate random number between
myApp.service('apocalypseService', function() {

  this.randNumGen = function() {
    return (Math.floor((Math.random() * 10) + 1));
  };

  var counter = 0;

  this.counterGetter = function() {
    return counter;
  };

  this.counterSetter = function() {
    console.log('counterSetter');
    counter++;
  };
}); // end apocalypseService service


// // service to track count of successful high-fivess
// myApp.service('HighFiveCount', function() {
//
// }); // end HighFiveCount service
