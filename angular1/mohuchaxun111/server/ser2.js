app.factory('adds',['add',function(add){
	var servers={
		gets:function(){
			return add.server('get','data/data.json');
		}
	}
	return servers;
}])