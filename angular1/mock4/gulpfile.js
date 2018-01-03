var fs=require('fs');
var path=require('path');
var url=require('url');
var gulp=require('gulp');
var webserver=require('gulp-webserver');

gulp.task('web',function(){
    gulp.src('./')
        .pipe(webserver({
            host:'localhost',
            port:'8888',
            livereload:true,
            directoryListing:{
                path:'./',
                enable:true
            },
            middleware:function(req,res,next){
                var urlobj=url.parse(req.url);
                var mocks=path.join(__dirname,'data',urlobj.search.split('?')[1]+'.json');
                fs.exists(mocks,function(exists){
                    fs.readFile(mocks,function(err,data){
                        var data={
                            isSuccess:true,
                            err:'',
                            data:data.toString()
                        };
                        res.writeHead(200,{
                            'Content-Type':'text/json;charset=UTF-8',
                            'Access-Control-Allow-Origin':'*'
                        })
                        res.end(JSON.stringify(data));
                    })
                })
            }
        }))
});
gulp.task('default',['web']);