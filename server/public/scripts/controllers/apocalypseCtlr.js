myApp.controller('ApocalypseController', ['apocalypseService', function(apocalypseService) {
console.log('in ApocalypseController');

var service = this;

service.randNumGen = apocalypseService.randNumGen;

service.counterGetter = apocalypseService.counterGetter;

service.counterSetter = apocalypseService.counterSetter;


}]);
