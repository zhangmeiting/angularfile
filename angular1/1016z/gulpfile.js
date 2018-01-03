/**
 * Created by lenovo on 2017/10/16.
 */
var gulp=require('gulp');
var webserver=require('gulp-webserver');
var url=require('url');
var fs=require('fs');
var path=require('path');

gulp.task('web',function(){
    gulp.src('./')
        .pipe(webserver({
            port:'8888',
            host:'localhost',
            livereload:true,
            directoryListing:{
                path:'./',
                enable:true
            },
            middleware:function(req,res,next){
                var urlobj=url.parse(req.url);
                var mocks=path.join(__dirname,urlobj.search.split('?')[1]+'.json');
                fs.exists(mocks,function(exists){
                    fs.readFile(mocks,function(error,data){
                        var data={
                            isSuccess:true,
                            error:'',
                            data:data.toString()
                        }
                        res.writeHead(200,{
                            'Content-Type':'text/json;charset=UTF-8',
                            'Access-Control-Allow-Origin':'*'
                        })
                        res.end(JSON.stringify(data));
                    })
                })
            }
        }))
})
gulp.task('default',['web']);