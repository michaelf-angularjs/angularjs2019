
module.controller("parentCtrl", ParentCtrl)


function ParentCtrl($scope, $rootScope) {

    $rootScope.devices = [
        new Mobile({model: "IPhone X", color: "black", price: 3500}),
        new Mobile({model: "Xiaomi", color: "green", price: 1000}),
        new Mobile({model: "Samsung Galaxy 11+", color: "black", price: 5500}),
        new Mobile({model: "LG V60", color: "White", price: 7500})
    ]
    $scope.addDevice = function(){
        $scope.devices.push({model: $scope.model, color: $scope.color, price: $scope.price})
    }
    $scope.updateDevice = function(){
        $scope.devices[$scope.index] = {model: $scope.model, color: $scope.color, price: $scope.price}
    }

    $scope.remove = function(i){
        $scope.devices.splice(i,1)
    }

    $scope.valueBy = 'model'
    $scope.reverse = true   
    $scope.sortBy = function(value){
        $scope.valueBy = value
        $scope.reverse = false
    }
    
}
