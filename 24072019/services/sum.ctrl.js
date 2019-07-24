module.controller("sumCtrl", sumCtrl)

// DI dependency injection - IOC
function sumCtrl($scope, valueService, serviceService) {
    
    $scope.sum =  valueService.items
    
    
}
