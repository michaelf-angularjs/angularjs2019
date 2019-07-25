
module.controller("parentCtrl", ParentCtrl)


function ParentCtrl($scope, $rootScope,$timeout) {

    $scope.numbers = [1,8,1,3,5,8,5,3,0,0]

    $scope.show = function($index){
        $scope.showNum = $scope.numbers[$index]
        $scope.lastChoice = $scope.numbers[$index]

    }
   
    $scope.showArray = true
    $timeout(function(){
        $scope.showArray = false
    }, 3000)
    
    $rootScope.moves = 0
    $scope.$watch('showNum', function(newButton, oldButton)
    {
        $scope.lastChoice = oldButton

    })
    $rootScope.counter = 0
    $scope.$watch('lastChoice', function(newl, oldl)
    {
        
        $rootScope.moves++
        if($scope.showNum == $scope.lastChoice){

            $scope.numbers.splice($scope.numbers.findIndex(numbers => numbers === $scope.showNum),1)
            $scope.numbers.splice($scope.numbers.findIndex(numbers => numbers === $scope.lastChoice),1)
            $rootScope.counter++
        
        }
           
        
    })
}
