var gulp=require('gulp');
var webserver=require('gulp-webserver');
var urltool=require('url');
var qs=require('qs');
var data={
		goodslist:[
			{
				num:'120',
				add:'万元',
				con:'总额'
			},
			{
				num:90,
				add:'天',
				con:'期限'
			},
			{
				num:'9,0233.00',
				add:'',
				con:'可投资额(元)'
			}
		]
	}
gulp.task('mockserver',function($http){
	$http(webserver({
		port:8899,
		middleware:function(req,res,next){
			 res.setHeader('Access-Control-Allow-Origin','*');
			// res.setHeader('content-type','application/json;charset=utf-8');
			// res.write(JSON.stringify(data));
			// res.end();
			var urlobj=urltool.parse(req.url);
			var pathname=urlobj.pathname;
			var getparamstr=urlobj.query;
			var getparam=qs.parse(getparamstr);
			if(req.method=='GET'){
				res.setHeader('content-type','application/json;charset=utf-8');
				res.write(JSON.stringify(data));
				res.end();
				// switch(pathname){
				// 	case '/goodslist':
				// 	res.setHeader('content-type','application/json;charset=utf-8');
				// 	res.write(JSON.stringify(data));
				// 	res.end();
				// 	break;
				// 	default:
				// 	res.end();
				// }
			}
		}
	}))
})
gulp.task('default',['mockserver'])