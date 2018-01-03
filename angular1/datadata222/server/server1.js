app.factory('add',function($http,$q){
				return {
					server:function(){
						var defer=$q.defer();
						$http({
							url:'data/data.json'
						}).then(function(res){
							defer.resolve(res);
						})
						return defer.promise;
					}
				}
			})