module.controller("divCtrl", sumCtrl)

// DI dependency injection - IOC
function divCtrl($scope, $rootScope, valueService) {
   
    return valueService.a / valueService.b
    
}
