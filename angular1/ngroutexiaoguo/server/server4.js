app.factory('addsss',['add',function(add){
	var servers={
		getsss:function(){
			return add.server('get','data/data2.json');
		}
	}
	return servers;
}])