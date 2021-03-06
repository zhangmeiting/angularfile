var gulp=require('gulp');
var webserver=require('gulp-webserver');
var connect=require('gulp-connect');
var database=[
	{
		name:'招牌菜',
		datas:[
			{
				name:'糖醋排骨',
				price:100
			},
			{
				name:'糖醋鲤鱼',
				price:100
			}
		]
	},
	{
		name:'热菜',
		datas:[
			{
				name:'宫保鸡丁',
				price:50
			},
			{
				name:'鱼香肉丝',
				price:50
			}
		]
	},
	{
		name:'凉菜',
		datas:[
			{
				name:'拍黄瓜',
				price:25
			},
			{
				name:'凉皮',
				price:25
			},
			{
				name:'小葱拌豆腐',
				price:25
			}
		]
	}
]
gulp.task('mockserver',function(){
	.src('.')
	.pipe(webserver({
		port:8899,
		middleware:function(req,res,next){
			res.setHeader('Access-Control-Allow-Origin','*');
			res.setHeader('content-type','application/json;charset=utf-8');
			res.write(JSON.stringify(database));
			res.end();
		}
	}))
})
gulp.task('default',['mockserver'])