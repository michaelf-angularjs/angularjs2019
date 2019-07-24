const fourthModule = angular.module("my4thmodule", [])

fourthModule.controller("HelloController3", HelloCtrl);

function HelloCtrl() {
    this.message = "Hello I am from the 4th module"
}