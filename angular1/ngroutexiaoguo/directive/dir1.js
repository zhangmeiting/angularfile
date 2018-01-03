app.directive('helloWorld',function(){
					return {
						restrict:'ECMA',
						templateUrl:'./content/add1.html',
						link:function(scope,element,attribute,controller){
							 $('ul').on('click', 'li', function () {
				                 var index = $(this).index();
				                 $(this).addClass("active").siblings().removeClass("active");
				                  $(element).find("dl").eq(index).show().siblings().hide();
				             });
							// console.log(scope);
							// console.log(element);
							//console.log($(element));
							// console.log(attribute);
							// console.log(controller);
							//scope.val+='66666';
						},
						controller:'main1'
						
					}
				})