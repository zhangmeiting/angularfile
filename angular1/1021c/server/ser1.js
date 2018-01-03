app.factory('add',function($http,$q){
    return {
        gets:function(url,type,data){
            var defer=$q.defer();
            $http({
                url:url,
                method:type,
                data:data
            }).then(function(res){
                defer.resolve(res);
            },function(err){
                defer.reject(err);
            })

            return defer.promise;
        }
    }
})