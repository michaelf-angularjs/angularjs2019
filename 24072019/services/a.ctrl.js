module.controller("aCtrl", aCtrl)

// DI dependency injection - IOC
function aCtrl($scope, $rootScope, factoryService) {
   
    $scope.myArray = factoryService.a
    return $scope.myArray
    
}
