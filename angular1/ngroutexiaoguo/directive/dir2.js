app.directive('helloWorlds',function(){
					return {
						restrict:'ECMA',
						templateUrl:'content/add3.html',
						link:function(scope,element,attribute,controller){
							var ind=0;
							var timer=null;
								timer=setInterval(function(){
									ind++;
									if(ind>3){
										ind=0;
									}
									$('.boxs ul').find('li').eq(ind).addClass("active").siblings().removeClass("active");
									$('.downs').find("dl").eq(ind).show().siblings().hide();
								},1500)
							$('.big').on('mouseover',function(){
								clearInterval(timer);
							}).on('mouseout',function(){
								ind=index;
								timer=setInterval(function(){
									ind++;
									if(ind>3){
										ind=0;
									}
									$('.boxs ul').find('li').eq(ind).addClass("active").siblings().removeClass("active");
									$('.downs').find("dl").eq(ind).show().siblings().hide();
								},1500)
							})
							var index;
							$('.boxs ul').on('click', 'li', function () {
								index = $(this).index();
								$(this).addClass("active").siblings().removeClass("active");
								$('.downs').find("dl").eq(index).show().siblings().hide();
							});
							// console.log(scope);
							// console.log(element);
							//console.log($(element));
							// console.log(attribute);
							// console.log(controller);
							//scope.val+='66666';
						},
						controller:'main3'
						
					}
				})