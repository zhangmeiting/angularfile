app.factory('addss',['add',function(add){
	var servers={
		getss:function(){
			return add.server('get','data/data1.json');
		}
	}
	return servers;
}])