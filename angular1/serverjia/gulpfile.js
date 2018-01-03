/**
 * Created by Administrator on 2017/10/18.
 */
var fs=require("fs");
var url=require("url");
var path=require("path");
var gulp=require("gulp");
var webServer=require("gulp-webserver");

gulp.task("fwServer",function(){
   gulp.src("./Data")
       .pipe(webServer({
           host:"localhost",
           port:8090,
           livereload:true,
           directoryListing:{
               path:"./",
               enable:true
           },
           open:true,
           middleware:function(req,res,next){
               var urlObj=url.parse(req.url);
               var mockUrl=path.join(__dirname,"Data",urlObj.query+".json");
               fs.exists(mockUrl,function(exist){
                   if(!exist){
                       res.writeHead(404, {
                           "Content-Type": "text/json;charset=utf8"
                       });
                       res.end("no!");
                   }else{
                       fs.readFile(mockUrl, function (err, result) {
                           if (err) return console.error(err);
                           res.writeHead(200, {
                               "Content-Type": "text/json;charset=utf8",
                               "Access-Control-Allow-Origin": "http://localhost:63342"
                           });
                           res.end(result.toString());
                       });
                   }
               })
           }
       }))
});