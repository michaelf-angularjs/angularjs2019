module.controller("timeCtrl", TimeCtrl)

function TimeCtrl($scope){
    $scope.time = new Date;
    $scope.getCurrent = () => {
        $scope.time = new Date;
    }
}