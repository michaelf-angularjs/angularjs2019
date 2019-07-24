
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.name = ''
    $scope.email = ''
    $scope.age = ''
    $scope.getClass = function() {
        if ($scope.name == '' && $scope.email == '' && $scope.age == ''){
            $scope.status = "Fill all the details"
            return 'empty'}
        else if ($scope.name == '' || $scope.email == '' ||  $scope.age == ''){
            $scope.status = "Fill all the details"
            return 'pempty'}
        else if ($scope.name != '' && $scope.email != '' && $scope.age < 18 ){
            $scope.status = "Age under 18"
            return 'under'
        }
        else if ($scope.name != '' && $scope.email != '' && $scope.age >= 18 ){
            $scope.status = "All GOOD!"
            return 'ok'}
    }
}
