module.controller("brotherCtrl", BrotherCtrl)


// DI dependency injection - IOC
function BrotherCtrl($scope, $rootScope) {

    alert("Result = ", $rootScope.result)
}
