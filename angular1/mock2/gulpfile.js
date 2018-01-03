var fs=require('fs');
var url=require('url');
var path=require('path');

var gulp=require('gulp');
var webserver=require('gulp-webserver');

gulp.task('webserver',function(){
    gulp.src('./')
        .pipe(webserver({
            port:'8090',
            host:'localhost',
            livereload:true,
            directoryListing:{
                path:'./',
                enable:true
            },
            middleware:function(req,res,next){
                var urlobj=url.parse(req.url);
                ////console.log(urlobj);
                ///Url {
                      // protocol: null,
                      // slashes: null,
                      // auth: null,
                      // host: null,
                      // port: null,
                      // hostname: null,
                      // hash: null,
                      // search: '?product',
                      // query: 'product',
                      // pathname: '/index.html',
                      // path: '/index.html?product',
                      // href: '/index.html?product' }
                      var query=urlobj.query;
                var mocks=path.join(__dirname, urlobj.search.split("?")[1] + ".json");
               ///// console.log(mocks);
                ///////D:\1508C\webserverandjsonserver\demo2\server\product.json
                fs.exists(mocks,function(exists){
                    fs.readFile(mocks,function(err,data){
                            var data={
                                isSuccess:true,
                                error:'',
                                data:data.toString()
                            };
                            res.writeHead(200,{
                                "Content-Type": "text/json;charset=UTF-8",
                                "Access-Control-Allow-Origin": "*" ///////http://localhost:63342
                            });
                            res.end(JSON.stringify(data)); 
                        })
                })
            }
        }))
})
gulp.task('default',['webserver']);

