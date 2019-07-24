module.controller("inputCtrl", inputCtrl)

// DI dependency injection - IOC
function inputCtrl($scope, $rootScope, valueService) {
   
   valueService.items = [{"a" : $scope.a1, "b": $scope.b1}]
$scope.$watch('a1', function(newA){
    newA = $scope.a1
    valueService.items = [{"a": newA}]
})

$scope.$watch('b1', function(newB){
    newB = $scope.b1
    valueService.items = [{"a" : $scope.a1 , "b": newB}]
})
 //   valueService.itemes[{b}] = $scope.b
    $scope.greenandyellow = true
    $scope.blueandbrown = false

}
