app.controller('main',['$scope','$stateParams','adds',function($scope,$stateParams,adds){
				//console.log($stateParams.id);
				adds.gets().then(function(res){
					$scope.val=res.data;
					allprice();
				});

				$scope.flag=false;
				$scope.$on('deletes',function(event,index){
					$scope.val.splice(index,1);
					//console.log($scope.val);
					allprice();
				})

				$scope.$on("changebg", function (event, index) {
					var count = 0;
					$scope.val[index].status = !$scope.val[index].status;
					for (var i = 0; i < $scope.val.length;i++) {
						if ($scope.val[i].status) {
							count++;
						}
					}
					if (count == $scope.val.length) {
						$scope.flag = true;
					} else {
						$scope.flag = false;
					}
					allprice();
				});

				$scope.$on('changeprices',function(event){
					allprice();
				})

				$scope.clickall=function(){
					$scope.flag=!$scope.flag;
					for(var i=0;i<$scope.val.length;i++){
						if($scope.flag){
							$scope.val[i].status=true;
						}else{
							$scope.val[i].status=false;
						}
					}
					allprice();
				}




				function allprice() {
					$scope.prices = 0;
					$scope.counts = 0;
					$scope.val.forEach(function (v,i) {
						if (v.status) {
							$scope.prices += v.num * v.price;
							$scope.counts += v.num;
						}
					});

				}

			}]);
			app.config(function($stateProvider,$urlRouterProvider){
				$stateProvider
					.state('search',{
						url:'/search/:id',
						templateUrl:'view/view1.html',
						controller:'main',
						resolve:{

						}
					})

				$urlRouterProvider.otherwise('/search/0');
			})