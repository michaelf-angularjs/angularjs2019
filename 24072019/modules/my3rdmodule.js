const thirdModule = angular.module("my3rdmodule", [])

thirdModule.controller("HelloController2", HelloCtrl);

function HelloCtrl() {
    this.message = "Hello I am from the 3rd module"
}