module.controller("brotherCtrl", BrotherCtrl)

function BrotherCtrl($scope, $rootScope) {

    $scope.num = $rootScope.devices.length-1
    $scope.$watch('$rootScope.phones',function(){

            $scope.num++
    
    })

}