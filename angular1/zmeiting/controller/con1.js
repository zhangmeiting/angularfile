app.controller('main',['$scope','$stateParams','adds','$http',function($scope,$stateParams,adds,$http){
				adds.gets().then(function(res){
					$scope.val=res.data;
				});
				$http({
					url:'http://localhost:8888?data'
				}).then(function(res){
					console.log(JSON.parse(res.data.data));
					$scope.vals=JSON.parse(res.data.data);
				},function(err){
					console.log(err);
				})
				$scope.bools1='';
				$scope.bools2='';
				$scope.bools3='';
				$scope.bools4='dlbg';
				$scope.bools5='';
				$scope.fn1=function(){
					$scope.bools1='dlbg';
					$scope.bools2='';
					$scope.bools3='';
					$scope.bools4='';
					$scope.bools5='';
				}
				$scope.fn2=function(){
					$scope.bools1='';
					$scope.bools2='dlbg';
					$scope.bools3='';
					$scope.bools4='';
					$scope.bools5='';
				}
				$scope.fn3=function(){
					$scope.bools1='';
					$scope.bools2='';
					$scope.bools3='dlbg';
					$scope.bools4='';
					$scope.bools5='';
				}
				$scope.fn4=function(){
					$scope.bools1='';
					$scope.bools2='';
					$scope.bools3='';
					$scope.bools4='dlbg';
					$scope.bools5='';
				}
				$scope.fn5=function(){
					$scope.bools1='';
					$scope.bools2='';
					$scope.bools3='';
					$scope.bools4='';
					$scope.bools5='dlbg';
				}

}]);
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('one',{
			url:'/one',
			templateUrl:'view/view1.html',
			controller:'main'
		})
		.state('two',{
			url:'/two',
			templateUrl:'view/two.html',
			controller:'main'
		})
		.state('three',{
			url:'/three',
			templateUrl:'view/view1.html',
			controller:'main'
		})
		.state('four',{
			url:'/four',
			templateUrl:'view/two.html',
			controller:'main'
		})
		.state('five',{
			url:'/five',
			templateUrl:'view/two.html',
			controller:'main'
		});
	$urlRouterProvider.otherwise('one');
})