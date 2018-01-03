app.controller('adds',['$scope',function($scope){
    $scope.index=function(ind){
        //console.log(ind);
        $scope.$emit('deletes',ind);
    }
    $scope.clicks=function(ind){
        //console.log(ind);
        $scope.$emit('changebg',ind);
    }

    $scope.cons = function (flas) {

        if (flas == "+"){
           $scope.val.num += 1;
           // alert($scope.val.num);
        }else{
            if ($scope.val.num <= 1) return;
            $scope.val.num -= 1;
            //alert($scope.val.num);
        }
        $scope.$emit("changeprices");
    }
}])
