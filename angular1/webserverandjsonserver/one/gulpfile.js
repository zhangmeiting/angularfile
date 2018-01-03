var gulp = require("gulp");
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            port:8080,
            host:'localhost',
            //自动刷新
            livereload:true,
            //文件监听
            directoryListing: {
                path: './',
                enable: true
            }
            // ,
            // //自动打开
            // open: true,
            // fallback: "index.html"
        }))
});
gulp.task('default',['webserver']);