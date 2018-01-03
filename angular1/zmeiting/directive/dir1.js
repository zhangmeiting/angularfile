app.directive('dires',function(){
	return {
		restrict:'ECMA',
		templateUrl:'content/one.html',
		controller:'main',
		link:function(scope,ele,attr,controller){
			var slide=new Swiper(".swiper-container",{
				direction:'horizontal',
				autoplay:2000,
				loop:true,
				pagination:'.swiper-pagination'
			});

			//new IScroll("#down",{
			//	scrollX:false,
			//	scrollY:true,
			//	mouseWheel:true
			//});
		}
	}
})