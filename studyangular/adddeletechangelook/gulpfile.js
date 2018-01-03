var gulp=require('gulp');
var webserver=require('gulp-webserver');
// var connect=require('gulp-connect');
var urltool=require('url');
var qs=require('qs');
var data=[
	{
		id:'1',
		name:'管理员1',
		state:'启用',
		num:'1',
		time:'2014-7-26 16:36',
		change:'修改',
		delete:'删除'
	},
	{
		id:'2',
		name:'管理员2',
		state:'启用',
		num:'2',
		time:'2014-7-26 16:36',
		change:'修改',
		delete:'删除'
	},
	{
		id:'3',
		name:'管理员3',
		state:'启用',
		num:'3',
		time:'2014-7-26 16:36',
		change:'修改',
		delete:'删除'
	},
	{
		id:'4',
		name:'管理员4',
		state:'启用',
		num:'4',
		time:'2014-7-26 16:36',
		change:'修改',
		delete:'删除'
	},
	{
		id:'5',
		name:'管理员5',
		state:'启用',
		num:'5',
		time:'2014-7-26 16:36',
		change:'修改',
		delete:'删除'
	},
	{
		id:'6',
		name:'管理员6',
		state:'启用',
		num:'6',
		time:'2014-7-26 16:36',
		change:'修改',
		delete:'删除'
	}
]
gulp.task('mockserver',function(){
	gulp.src('.')
		.pipe(webserver({
		port:8899,
		middleware:function(req,res,next){
			res.setHeader('Access-Control-Allow-Origin','*');
			var obj=urltool.parse(req.url);
			var pathname=obj.pathname;
			var paramstr=obj.query;
			

			if(req.method=='POST'){
				var str='';
				req.on('data',function(chunk){
					////console.log(chunk);
					str+=chunk;
				})
				
				req.on('end',function(){
					var sum=qs.parse(str);
					var x;
					for(var k in sum){
						x=k.match(/\d+/g)[0];
					}
					console.log(x);
					switch(pathname){
                        	case '/post':
                        	res.setHeader('content-type','application/json;charset=utf-8');
							res.write(JSON.stringify(data));
							res.end();
							break;
							case '/deletes':
							for(var i=0;i<data.length;i++){
								if(data[i].id==x){
									data.splice(i,1);
								}
							}
							res.setHeader('content-type','application/json;charset=utf-8');
							res.write(JSON.stringify(data));
							res.end();
							break;
						}
						
				})
				
				
			}
			else if(req.method == "OPTIONS"){
                res.writeHead(200,{
                      "Content-Type":"application/json",
                      'Access-Control-Allow-Origin':'*',
                      'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE',
                      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                });
                res.end();
            }
			
		}
	}))
})
gulp.task('default',['mockserver'])