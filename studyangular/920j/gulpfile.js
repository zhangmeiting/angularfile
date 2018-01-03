var gulp=require('gulp');
var webserver=require('gulp-webserver');
var urltool=require('url');
var qs=require('qs');
var data=[
	{
		user:'admin1',
		name:'张素',
		state:'正常',
		QQ:'72234505'
	},
	{
		user:'admin2',
		name:'张素',
		state:'正常',
		QQ:'72234505'
	},
	{
		user:'admin3',
		name:'张素',
		state:'正常',
		QQ:'72234505'
	},
	{
		user:'admin4',
		name:'张素',
		state:'正常',
		QQ:'72234505'
	},
	{
		user:'admin5',
		name:'张素',
		state:'正常',
		QQ:'72234505'
	}
]
gulp.task('mock',function(){
	gulp.src('.')
		.pipe(webserver({
			port:8899,
			middleware:function(req,res,next){
				var obj=urltool.parse(req.url);
				var pathname=obj.pathname;
				res.setHeader('Access-Control-Allow-Origin','*');
				req.on('data',function(){

				})
				req.on('end',function(){
					if(req.method=='POST'){
						switch(pathname){
							case '/post':
							res.setHeader('content-type','application/json;charset=utf-8');
							res.write(JSON.stringify(data));
							res.end();
							break;					
						}
					}
				})
			}
		}))
})
gulp.task('default',['mock'])