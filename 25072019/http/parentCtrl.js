
module.controller("parentCtrl", ParentCtrl)

function ParentCtrl($scope, $rootScope, $http, $q,dataService,serviceService) {
    $scope.printItems = []
   
    $scope.printItems.push(dataService.todos)
        
    console.log($scope.printItems)
}