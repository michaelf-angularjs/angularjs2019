module.controller("bCtrl", bCtrl)

// DI dependency injection - IOC
function bCtrl($scope, $rootScope, factoryService) {
   
    $scope.myArray = factoryService.b
    return $scope.myArray
    
}
