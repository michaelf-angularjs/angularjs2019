module.factory("factoryService", function(valueService) {

    this.get1toA = function () {
        
        var a = [];
        for (var i = 0; i < valueService.a; i++) {
            a.push(i+1);
        }
    
    }

    
})