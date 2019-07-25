module.controller("resultsCtrl", resultsCtrl)


function resultsCtrl($scope, $rootScope,$timeout) {

    $scope.correct = -1
    $scope.guesses = 0
    $scope.$watch('counter',function()
    {
            $scope.correct++
    })
    $scope.$watch('moves',function()
    {
        if($rootScope.moves%2 === 0)
            $scope.guesses++
    })

    
}
