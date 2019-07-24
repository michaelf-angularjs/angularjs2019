const secondModule = angular.module("mysecondmodule", [])

secondModule.controller("HelloController", HelloCtrl);

function HelloCtrl() {
    this.message = "Hello I am from the second module"
}