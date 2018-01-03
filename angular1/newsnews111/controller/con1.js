//注入依赖的两种方式

//方法一：
//app.controller("meunController", ['$scope', 'foldServer', function ($scope, foldServer) {
//
//    foldServer.getFoldList("get", "./Data/fold.json").then(function (result) {
//        $scope.tabs = result;
//    });
//    $scope.active = "active"
//}]);


//方法二：
//var FoldController = function ($scope, foldServer, titleServer) {
//    $scope.title = titleServer;
//    foldServer.getFoldList("get", "./Data/fold.json").then(function (result) {
//        //console.log(result);
//        $scope.tabs = result;
//    });
//    $scope.active = "active";
//
//};
//FoldController.$inject = ['$scope', 'foldServer', 'titleServer'];
//app.controller("foldController", FoldController);


//var main=function($scope,adds){
//	adds.gets().then(function(result){
//		$scope.val=result.data;
//	});
//};
//main.$inject=['$scope','adds'];
//app.controller('main',main);

app.controller('main',['$scope','adds','$routeParams',function($scope,adds,$routeParams){
	console.log($routeParams.num);
	$scope.num=$routeParams.num;
	adds.gets().then(function(result){
		$scope.val=result.data;
	})
}])