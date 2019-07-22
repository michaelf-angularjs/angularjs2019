// also works
// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("formCtrl", FormCtrl)


// DI dependency injection - IOC
function FormCtrl($scope) {

    
    $scope.person = new Person1('')
    $scope.name = '';
    $scope.resetName = function() {
        $scope.name=''
    }
    console.log($scope.person);
}

class Person1
{
    constructor(name,age,password,gender)
    {
        this.name = name;
        this.age = age;
        this.password = password;
        this.gender = gender;
    }
}