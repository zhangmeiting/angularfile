app.directive('dires',function(){
	return {
		restrict:'ECMA',
		replace:true,
		scope:{
			val:'='
		},
		templateUrl:'content/adds.html',
		link:function(scope,ele,attr,controller){

		},
		controller:'seconds'
	}
})