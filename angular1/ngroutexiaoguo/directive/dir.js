app.directive('adds',function(){
				return {
					restrict:'ECMA',
					templateUrl:'content/add.html',
					link:function(scope,ele,attr,controller){
						$('.box').on('click','.dts',function(){
							//alert('666');
							$(this).siblings().slideToggle();
							//$(this).siblings().slideDown().parent().siblings().find('dd').slideUp();
						})

					},
					controller:'main'
				}
			})