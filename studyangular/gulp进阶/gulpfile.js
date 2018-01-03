var gulp=require('gulp');
var connect=require('gulp-connect');
var webserver=require('gulp-webserver');
var urltool=require('url');
var qs=require('qs');


////////////CORS跨域
// var dataBase={
// 	goodslist:[
// 		{
// 			name:'商品1',
// 			price:1
// 		},
// 		{
// 			name:'商品2',
// 			price:2
// 		}

// 	],
// 	home:'<html><meta charset="utf-8";/><style>div{background:red}</style><div>这是首页</div></html>'
// }



var dataBase={
	users:[
		{
			name:'zs',
			pwd:'123'
		},
		{
			name:'lisi',
			pwd:'456'
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
		},
	],
	home:'<html><meta charset="utf-8";/><style>div{background:red}</style><div>这是首页</div></html>'
}

function queryaccount(user){
	var exist=false;
	var users=dataBase['users'];
	for(var i=0,length=users.length;i<length;i++){
		if(user == users[i].name){
			exist=true;
		}
	}
	return exist;
}
	function login(user,pwd){
		var success=false;
		var users=dataBase['users'];
		for(var i=0,length=users.length;i<length;i++){
			if(user==users[i].name && pwd==users[i].pwd){
				success=true;
			}
		}
		return success;
	}

gulp.task('mockserver',function(){
	gulp.src('.')
	.pipe(webserver({
		port:3333,
		middleware:function(request,response,next){
			 response.setHeader('Access-Control-Allow-Origin','*')
			////1.获取请求方式，以便分析
			var method=request.method;
			////2.获取pathname
			var url=request.url;
			var urlobj=urltool.parse(url);
			var pathname=urlobj.pathname;
			/////3.看看有没有参数，如果有参数是怎样的
			var getparamstr=urlobj.query;
			var getparam=qs.parse(getparamstr);
			////4.告诉前端你要返回什么数据类型
			if(method==='GET'){/////1.分析请求方式
				////2分析pathname
				switch(pathname){
					case '/goodslist':
					if(getparamstr){
						var goodslistarray=dataBase['goodslist'];
						var page=goodslistarray[getparam.page];
						var stringjson=JSON.stringify(page);
						response.setHeader('content-type','application/json;charset=utf-8');
						response.write(stringjson);
						response.end();
					}else{
						var goodslistarray=dataBase['goodslist'];
						
						var stringjson=JSON.stringify(goodslistarray);
						response.setHeader('content-type','application/json;charset=utf-8');
						response.write(stringjson);
						response.end();
					}
					break;
					case '/home':
					response.setHeader('content-type','text/html;charset=utf-8');
					response.write(dataBase['home']);
					response.end();
					break;
					default:
					request.end();
				}
			}else if(method==='POST'){
				////2分析pathname
				var postdatastr='';
				request.on('data',function(chunk){
					postdatastr+=chunk;
				})
				request.on('end',function(){
					console.log(postdatastr);
					var postdata=qs.parse(postdatastr);
					switch(pathname){
						case '/login':
						response.setHeader('content-type','application/json;charset=utf-8')
						if(queryaccount(postdata.user)){
							if(login(postdata.user,postdata.pwd)){
								response.write('登陆成功');
							}else{
								response.write('密码错误');
							}
						}else{
							response.write('账号不存在');
						}
						// var users=dataBase['users'];
						// for(var i=0;i<users.length;i++){
						// 	if(users[i].name==postdata.user && users[i].pwd==postdata.pwd){
						// 		response.write('{"state":"登陆成功"}')
						// 		response.end()
						// 		break;
						// 	}
						// 	if(i==users.length-1){
						// 		response.write('{"state":"登陆失败"}')
						// 	}
						// }
						response.end();
						break;
						case '/register':
						break;
						default:
						response.end();
					}
				})
			}
			















			// var method=request.method;////这是请求方式
			// //console.log(method);
			// //console.log(request.url);
			// var urlobj=urltool.parse(request.url);////这是url对象
			// ////console.log(urlobj);
			// var getparam=urlobj.query;////get请求的参数 user=zs
			// //console.log(typeof getparam);
			// ////console.log(qs.parse(getparam));////{ user: 'as', pwd: '123' }
			// var pathname=urlobj.pathname;
			// response.setHeader('Access-Control-Allow-Origin','*')
			// if(method==='GET'){
			// 	switch(pathname){
			// 		case '/goodslist':
			// 			response.setHeader('content-type','application/json;charset=utf-8');
			// 			response.write(JSON.stringify(dataBase['goodslist']));
			// 			response.end();
			// 		break;
			// 		case '/home':
			// 			//////response.setHeader('content-type','application/html;charset=utf-8');
			// 			response.write(dataBase['home']);
			// 			response.end();
			// 		break;
			// 		default :
			// 		response.end();
			// 	}
			// }else if(method==='POST'){

			// }else if(method==='OPTIONS'){////这和前端给的数据类型有关
			// 	////当前端发送post请求的时候 如果参数不是字符串那么就会走options
			// 	////什么是表单数据 就是类型是字符串的长得像'user=zs&pwd=123' 这样的参数
			// }
		}
	}))
})
gulp.task('httpserver',function(){
	connect.server({
		port:8080,
		livereload:true
	})
})
gulp.task('default',['mockserver','httpserver'])