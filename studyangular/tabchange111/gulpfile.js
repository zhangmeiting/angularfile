var obj = [
    {
        name:'按钮1',
        value:[1,2,3,4]
    },{
        name:'按钮2',
        value:[5,6,7,8]
    },{
        name:'按钮3',
        value:[9,10,11,12]
    },{
        name:'按钮4',
        value:[13,14,15,166]
    }
]

var gulp = require('gulp');

var webserver = require('gulp-webserver');

var connect = require('gulp-connect');

var urltool = require('url');

gulp.task('mockServer',function(){
    gulp.src('.')
        .pipe(webserver({
            port:3000,
            middleware:function(req,res,next){

                res.setHeader('Access-Control-Allow-Origin','*');

                var method = req.method;

                var urlobj = urltool.parse(req.url);

                var pathname = urlobj.pathname;

                if(method == 'GET'){

                    switch(pathname){
                        case '/goodslist':
                            res.setHeader('content-type','application/json;charset=utf-8');
                            res.write(JSON.stringify(obj))
                            res.end();
                        break;
                        default:

                        break;
                    }


                }else if(method == 'POST'){

                }


            }
        }))
})

gulp.task('httpServer',function(){
    connect.server({
        port:8888,
        livereload:true
    })
})

gulp.task('default',['mockServer','httpServer'])