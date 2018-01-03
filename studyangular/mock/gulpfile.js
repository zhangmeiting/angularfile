var gulp=require('gulp');

var webserver=require('gulp-webserver');

var connect=require('gulp-connect');

var urltool=require('url');

var qs=require('qs');

var database={
	users:[
		{
			name:'zs',
			password:'123'
		},
		{
			name:'ls',
			password:'456'
		}
	],
	goodslist:[
		{
			name:'page1',
			data:[
				{
					name:'商品1',
					price:1
				},
				{
					name:'商品2',
					price:2
				}
			]
		},
		{
			name:'page2',
			data:[
				{
					name:'商品3',
					price:3
				},
				{
					name:'商品4',
					price:4
				}
			]
		}
	],
	home:'<html><meta charset="utf-8"; /> <style> div{background:red}</style> <div>这是首页</div></html>'
}

function login(username,password){
	var exist=false;
	var success=false;
	var users=database['users'];
	for(var i=0,length=users.length;i<length;i++){
		if(username==users[i].name){
			exist=true;
			if(password==users[i].password){
				success=true;
			}
			break;
		}
	}
	return exist ? {success:success} : exist;
}
gulp.task('mockserver',function(){
	gulp.src('.')
		.pipe(webserver({
			port:3333,
			middleware:function(req,res,next){
				res.setHeader('Access-Control-Allow-Origin','*')
				var method=req.method;
				var url=req.url;
				var urlobj=urltool.parse(url);
				var pathname=urlobj.pathname;
				var getparamstr=urlobj.query;
				var getparam=qs.parse(getparamstr);
				if(method==='GET'){
					switch(pathname){
						case '/goodslist':
							if(getparamstr){
								var goodslistarray=database['goodslist'];
								var page=goodslistarray[getparam.page];
								var stringjson=JSON.stringify(page);
								res.setHeader('content-type','application/json;charset=utf-8');
								res.write(stringjson);
								res.end();
							}else{
								var goodslistarray=database['goodslist'];
								var stringjson=JSON.stringify(goodslistarray);
								res.setHeader('content-type','application/json;charset=utf-8');
								res.write(stringjson);
								res.end();
							}
							break;
							case '/home':
							res.setHeader('content-type','text/html;charset=utf-8');
							res.write(database['home']);
							res.end();
							break;
							default:
							res.end();
					}
				}else if(method==='POST'){
					var postdatastr='';
					req.on('data',function(chunk){
						postdatastr+=chunk;
					})
					req.on('end',function(){
						var postdata=qs.parse(postdatastr);
						switch(pathname){
							case '/login':
							res.setHeader('content-type','application/json;charset=utf-8');
							var exist=login(postdata.username,postdata.password);
							if(exist){
								if(exist.success){
									res.write('{"message":"登陆成功"}')
								}else{
									res.write('{"message":"密码错误"}')
								}
							}else{
								res.write('{"message":"账号不存在"}')
							}
							res.end();
							break;
							case '/register':
							break;
							default:
							res.end();
						}
					})

				}else if(method==='OPTIONS'){
					res.writeHead(200,{
						"Content-Type":"application/json",
						"Access-Control-Allow-Origin":"*",
						"Access-Control-Allow-Methods":"GET,POST,PUT,DELETE",
						"Access-Control-Allow-Headers":"Origin,X-Requested-With,Content-Type,Accept"
					});
					res.end();
					return;
				}
			}
		}))

})
gulp.task('httpserver',function(){
	connect.server({
		port:8080,
		livereload:true
	})
})
gulp.task('default',['mockserver'])
////////////['mockserver','httpserver']