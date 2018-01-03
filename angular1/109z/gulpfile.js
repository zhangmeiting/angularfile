var gulp=require('gulp');
var concat=require('gulp-concat');
var js=require('gulp-uglify');
var rename=require('gulp-rename');
gulp.task('gulpss',function(){
	gulp.src(['one.js','two.js'])
		.pipe(concat('js.js'))
		.pipe(rename('js.js'))
		.pipe(js())
		.pipe(gulp.dest('./'))
})
gulp.task('default',['gulpss'])