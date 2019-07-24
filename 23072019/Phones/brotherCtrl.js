module.controller("brotherCtrl", BrotherCtrl)

function BrotherCtrl($scope, $rootScope) {

    $rootScope.num = $rootScope.devices.length-1
    $scope.$watch('addDevice()',function(newNum){

        newNum = $rootScope.devices.length
        $scope.num = newNum
    
    })

}