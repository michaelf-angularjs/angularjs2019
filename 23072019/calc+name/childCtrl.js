
module.controller("childCtrl", ChildCtrl)


// DI depen dency injection - IOC
function ChildCtrl($scope) {
    
    $scope.result = 0
   
    $scope.$watch('x', function()
    {
        if($scope.$parent.operand == "+")
          {  $scope.result = $scope.$parent.x + $scope.$parent.y }
          if($scope.$parent.operand == "-")
          {  $scope.result = $scope.$parent.x - $scope.$parent.y }
          if($scope.$parent.operand == "*")
          {  $scope.result = $scope.$parent.x * $scope.$parent.y }
          if($scope.$parent.operand == "/")
          {  $scope.result = $scope.$parent.x / $scope.$parent.y }
    })
    $scope.$watch('y', function()
    {
        if($scope.$parent.operand == "+")
        {  $scope.result = $scope.$parent.x + $scope.$parent.y }
        if($scope.$parent.operand == "-")
        {  $scope.result = $scope.$parent.x - $scope.$parent.y }
        if($scope.$parent.operand == "*")
        {  $scope.result = $scope.$parent.x * $scope.$parent.y }
        if($scope.$parent.operand == "/")
        {  $scope.result = $scope.$parent.x / $scope.$parent.y }
        
    })
    $scope.$watch('operand', function()
    {
        if($scope.$parent.operand == "+")
        {  $scope.result = $scope.$parent.x + $scope.$parent.y }
        if($scope.$parent.operand == "-")
        {  $scope.result = $scope.$parent.x - $scope.$parent.y }
        if($scope.$parent.operand == "*")
        {  $scope.result = $scope.$parent.x * $scope.$parent.y }
        if($scope.$parent.operand == "/")
        {  $scope.result = $scope.$parent.x / $scope.$parent.y }
        
    })
  //  console.log($scope.result)
}

