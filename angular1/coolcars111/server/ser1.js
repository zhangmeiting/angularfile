app.factory('add',function($http,$q){
	var ajaxserver={
		server:function(type,url,data){
			var defer=$q.defer();
			if(type == 'jsonp' || type == 'JSONP'){
				$.ajax({
					url:url,
					dataType:'jsonp',
					success:function(data){
						defer.resolve(data);
					},
					error:function(err){
						defer.reject(err);
					}
				})
				return defer.promise;
			}
			else{
				$http({
					url:url,
					method:type || 'get',
					data:data || null
				}).then(function(res){
					defer.resolve(res);
				},function(err){
					defer.reject(err);
				})
			}
			return defer.promise;
		}
	}
	return ajaxserver;
})