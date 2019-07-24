module.service("serviceService", function(valueService, globalConst) {
    
    this.get1toB = function() { 
        var b = [];
        for (var i = 0; i < valueService.b; i++) {
            b.push(i+1);

        return b
        }
    }
 
})