var gulp=require('gulp');
var webserver=require('gulp-webserver');
var urltool=require('url');
var qs=require('qs');
var data=[
	{
		src:'./2.gif',
		num:'100人次',
		time:'2016-01-01 12:12:12',
		sum:'131****1234',
		tel:'123456789'
	},
	{
		src:'./2.gif',
		num:'100人次',
		time:'2016-01-01 12:12:12',
		sum:'131****1234',
		tel:'123456789'
	},
	{
		src:'./2.gif',
		num:'100人次',
		time:'2016-01-01 12:12:12',
		sum:'131****1234',
		tel:'123456789'
	}
]
gulp.task('mock',function(){
	gulp.src('.')
		.pipe(webserver({
			port:8899,
			middleware:function(req,res,next){
				res.setHeader('Access-Control-Allow-Origin','*');
				var obj=urltool.parse(req.url);
				var pathname=obj.pathname;
				if(req.method=='POST'){
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
})
gulp.task('default',['mock'])