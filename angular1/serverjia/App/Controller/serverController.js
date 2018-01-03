/**
 * Created by Administrator on 2017/10/19.
 */
app.controller("serverController",["$scope","fwServer","$timeout",function($scope,fwServer,$timeout){
    fwServer.fw("get","http://localhost:8090/?data").then(function(res){
        console.log(res);
        console.log(res.data);
        $scope.good=res.data;
    });
    $timeout(function(){
        var mySwiper=new Swiper('.banner-container',{
            loop:true,
            pagination:".banner-pagination",
            paginationClickable:".banner-pagination",
            autoplay: 2500
        });
    },100);
    new IScroll("#buy",{
        scrollX:true,
        scrollY:false,
        mouseWheel:true
    });
}]);