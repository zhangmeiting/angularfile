app.controller('seconds',['$scope',function($scope){
    $scope.indexs=function(ind){
         //console.log(ind);
        $scope.$emit('deletes',ind);
        allprice();
    };

    $scope.clickall=function(){
        ////alert('111');
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



    $scope.clicks=function(ind){
        //console.log(ind);
        $scope.$emit('changebg',ind);
       // console.log($scope.flag);
    };

    $scope.flag=false;
    $scope.$on("changebg", function (event, index) {
        var count = 0;
        $scope.val[index].status = !$scope.val[index].status;
        for (var i = 0; i < $scope.val.length;i++) {
            if ($scope.val[i].status) {
                count++;
                if (count == $scope.val.length) {
                    $scope.flag = true;
                } else {
                    $scope.flag = false;
                }
            }
        }
        console.log(count);
        console.log($scope.val.length);
        console.log($scope.flag);

        allprice();
    });


    $scope.cons = function (flas,inds) {
        if (flas == "+"){
            //alert($scope.val.num);
            $scope.val[inds].num += 1;

        }else{
           // alert($scope.val.num);
            if ($scope.val[inds].num <= 1) return;
            $scope.val[inds].num -= 1;

        }
        $scope.$emit("changeprices");
    }

    $scope.$on('changeprices',function(event){
        allprice();
    })

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

}])
