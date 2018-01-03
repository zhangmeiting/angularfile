var gulp=require('gulp');

// gulp.task('taskone',function(){
// 	console.log('任务一完成');
// })
// gulp.task('default',['taskone']);

gulp.task('拷贝文件',function(){
	gulp.src('./gulp.txt')
		.pipe(gulp.dest('../'));
})
gulp.task('default',['拷贝文件']);

//var concat=require('gulp-concat');
// gulp.task('合并文件',function(){
// 	gulp.src('*.css')
// 		.pipe(concat('style.css'))
// 		.pipe(gulp.dest('./'));
// })
// gulp.task('default',['合并文件']);

//var mincss=require('gulp-clean-css');

// gulp.task('压缩文件',function(){
// 	gulp.src(['fileone.css','filetwo.css'])
// 		.pipe(concat('style.css'))
// 		.pipe(mincss())
// 		.pipe(gulp.dest('./'));
//})
//gulp.task('default',['压缩文件']);

// var rename=require('gulp-rename');

// gulp.task('重命名文件',function(){
// 	gulp.src(['fileone.css','filetwo.css'])
// 		.pipe(concat('style.css'))
// 		.pipe(mincss())
// 		.pipe(rename('style.min.css'))
// 		.pipe(gulp.dest('./'));
// })
// gulp.task('default',['重命名文件']);

// var rename=require('gulp-rename');
// var minimg=require('gulp-imagemin');
// gulp.task('minimg',function(){
// 	gulp.src('1.jpg')
// 		.pipe(rename('2.jpg'))
// 		.pipe(gulp.dest('./'));
// })
// gulp.task('default',['minimg']);
		
// var rename=require('gulp-rename');
// var htmlmin=require('gulp-htmlmin');
// var obj={
// 	removeComments:true,
// 	collapseWhitespace:true,
// 	collapseBooleanAttributes:true,
// 	removeEmptyAttributes:true,
// 	removeScriptTypeAttributes:true,
// 	removeStyleLinkTypeAttributes:true,
// 	minifyCSS:true,
// 	minifyJS:true
// }
// gulp.task('htmlmin',function(){
// 	gulp.src('index.html')
// 		.pipe(htmlmin(obj))
// 		.pipe(rename('index.min.html'))
// 		.pipe(gulp.dest('./'));
// })
// gulp.task('default',['htmlmin']);



// var minjs=require('gulp-uglify');
// var rename=require('gulp-rename');
// gulp.task('uglify',function(){
// 	gulp.src('js.js')
// 		.pipe(minjs())
// 		.pipe(rename('js.min.js'))
// 		.pipe(gulp.dest('./'))
// })
// gulp.task('default',['uglify'])

// var compilesass=require('gulp-sass');

// gulp.task('compilesass',function(){
// 	gulp.src('ceshi.scss')
// 		.pipe(compilesass())
// 		.pipe(gulp.dest('./'))
// })
// gulp.task('default',['compilesass'])