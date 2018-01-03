app.factory("baseServer",function($http,$q){
    var factory={
        ajax:function(type,url,data){
            var defer=$q.defer();
            if(type == "jsonp" || type == "JSONP"){
                $.ajax({
                    url: url,
                    dataType: "jsonp",
                    success: function (res) {
                        defer.resolve(res);
                    }, error: function (err) {
                        defer.reject(err);
                    }
                });
                return defer.promise;
            }else{
                $http({
                    method:type || "get",
                    url:url,
                    data:data || null
                }).then(function(result){
                    defer.resolve(result);
                }).then(function(error){
                    defer.reject(error);
                })
            }
            return defer.promise;
        }
    };
    return factory;
});