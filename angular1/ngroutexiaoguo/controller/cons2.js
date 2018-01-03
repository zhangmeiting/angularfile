app.controller('main3',['$scope','addsss',function($scope,addsss){
	addsss.getsss().then(function(result){
		$scope.array=result.data;
	})
}])