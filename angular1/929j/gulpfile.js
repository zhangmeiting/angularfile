var gulp=require('gulp');
var webserver=require('gulp-webserver');
gulp.task('server',function(){
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
gulp.task('default',['server']);