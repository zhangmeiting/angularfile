app.factory('adds',['add',function(add){
	var servers={
		gets:function(){
			return add.server();
		}
	}
	return servers;
}])