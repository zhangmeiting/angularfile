app.controller('main',['$scope','add',function($scope,add){
    add.gets('data/data.json','get').then(function(res){
        $scope.val=res.data;
    })
}]);