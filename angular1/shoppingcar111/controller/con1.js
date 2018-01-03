app.controller('main',['$scope','$stateParams','adds',function($scope,$stateParams,adds){
				//console.log($stateParams.id);


				adds.gets().then(function(res){
					$scope.values=res.data;
					console.log($scope.values);
				});



				$scope.$on('deletes',function(event,index){
					$scope.values.splice(index,1);
					//allprice();
				});








}]);
