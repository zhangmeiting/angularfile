var gulp=require('gulp');
var webserver=require('gulp-webserver');
var connect=require('gulp-connect');
var urltool=require('url');
var qs=require('qs');
var database={
	goodslist:[
			{name:'zhang11',age:11},
			{name:'zhang22',age:22},
			{name:'zhang33',age:33}
		]
	}
gulp.task('mockserver',function(){
	gulp.src('.')
	.pipe(webserver({
		port:3000,
		middleware:function(req,res,next){
			res.setHeader('Access-Control-Allow-Origin','*');
			var method=req.method;
			var url=req.url;
			var urlobj=urltool.parse(url);
			var pathname=urlobj.pathname;
			var getparamstr=urlobj.query;
			var getparam=qs.parse(getparamstr);
			if(method=='GET'){
				switch(pathname){
					case '/goodslist':
					res.setHeader('content-type','application/json;charset=utf-8');
					res.write(JSON.stringify(database['goodslist']));
					res.end();
					break;
				}
			}
		}
	}))
})
gulp.task('default',['mockserver']);