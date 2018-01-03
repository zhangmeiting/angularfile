app.controller('main',['$scope','adds',function($scope,adds){
	adds.gets().then(function(result){
		$scope.val=result.data;
	})
}])