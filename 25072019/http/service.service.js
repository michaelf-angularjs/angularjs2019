module.service("serviceService", function($http,globalConst, dataService) {
    

    let p = $http.get(globalConst.url)
    p.then( (resp) => {
        // happens in the future - when the responsee will come back!

        console.log(resp.data)

        for (var i =0; i<resp.data.length; i++){
            dataService.todos[i] = resp.data[i]
            }
    }, (err) => {
        console.log(`ERROR === ${err}`)   
    }
    )
})