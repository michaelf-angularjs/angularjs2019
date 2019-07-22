module.controller("nameCtrl", nameCtrl)

function nameCtrl($scope){
    $scope.name = "Michael";
   
    $scope.swapName = () => {
       
        $scope.name = "leachiM";
    }
}