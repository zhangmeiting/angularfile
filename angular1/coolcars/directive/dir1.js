app.directive('dires',function(){
	return {
		restrict:'ECMA',
		templateUrl:'content/add.html',
		controller:'main',
		link:function(scope,ele,attr,controller){
			$('.box').on('click','button',function(){
				$(this).parent().parent().remove();
			});
			$('#btn').on('click',function(){
				var reg=/[-,\/]/g;
				var vals=$('input').val();
				if(reg.test(vals)){
					console.log('ppp');
				}
			})
		}
	}
})