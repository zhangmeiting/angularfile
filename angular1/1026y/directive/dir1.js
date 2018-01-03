app.directive('dires',function(){
    return {
        restrict:'ECMA',
        templateUrl:'content/one.html',
        controller:'main',
        link:function(scope,ele,attr,controller){
            $('#btn').on('click',function(){
                $('.cover').show();
            });
            $('.add h6').on('click','button',function(){
                $('.cover').hide();
                $('.inps').val('');
            });
            $('.add h4').on('click','button',function(){
                var nums=String(Math.random()).slice(2);
                $('.inps').val(nums);
            });
        }
    }
})