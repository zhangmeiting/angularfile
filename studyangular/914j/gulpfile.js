var gulp=require('gulp');
var webserver=require('gulp-webserver');
var urltool=require('url');
var qs=require('qs');
var data=[
	{
		time:'2016-01-01  12:15:16',
		msg:'确认消息'
	},
	{
		time:'等待发放奖品',
		msg:''
	},
	{
		time:'2016-01-02  12:15:16',
		msg:'奖品已发放  (快递单号:12345678900)'
	}
]

gulp.task('mock',function(){})
	.src('.')
	.pipe(webserver({
		port:8899,
		middleware:function(req,res,next){
			res.setHeader('Access-Control-Allow-Origin','*');
			var obj=urltool.parse(req.url);
			var pathname=obj.pathname;
			if(req.method=='POST'){
				req.on('data',function(){

				})
				switch(pathname){
					case '/post':
						res.setHeader('content-type','application/json;charset=utf-8');
						res.write(JSON.stringify(data));				
						res.end();
						break;
				}
				
			}
		}
	}))	

gulp.task('default',['mock'])