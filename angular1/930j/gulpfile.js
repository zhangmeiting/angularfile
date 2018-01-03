var gulp=require('gulp');
var sass = require("gulp-sass");
var mini=require('gulp-minify-css');
var webserver=require('gulp-webserver');
gulp.task('webserver',function(){
	gulp.src('./')
		.pipe(webserver({
			port:8090,
			host:'localhost',
			livereload:true,
			directoryListing:{
				path:'./',
				enable:true
			}
		}))
})

gulp.task('server',function(){
	gulp.src('style.scss')
		.pipe(sass())
		.pipe(mini())
		.pipe(gulp.dest('./css/'))

});

gulp.task('watch',function(){
	gulp.watch('index.html');
	gulp.watch('style.scss',['server']);
})
gulp.task('default',['watch','server','webserver']);