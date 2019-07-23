
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.name = null
    $scope.$watch('name', function(newName)
    {
        if(newName == "Michael"){
        alert("this is your name!")
        } 
    })

    $rootScope.x = 0
    $scope.$watch('x', function(newX)
    {
        $rootScope.x = newX
    })
    $rootScope.y = 0
    $scope.$watch('y', function(newY)
    {
        $rootScope.y = newY
    })
    $rootScope.operand = "+"
    $scope.$watch('operand', function(newOperand)
    {
        $rootScope.operand = newOperand
    })
 //   console.log($scope.newX,$scope.y)
}
