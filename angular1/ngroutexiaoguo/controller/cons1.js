app.controller('main1',['$scope','addss',function($scope,addss){
	addss.getss().then(function(result){
		$scope.val1=result.data;
	})
}])