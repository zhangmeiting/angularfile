var gulp=require('gulp');
 //gulp.task('拷贝文件',function(){
 //	gulp.src('./gulp.txt')
 //		.pipe(gulp.dest('../'));
 //})
 //gulp.task('default',['拷贝文件']);

//var minjs=require('gulp-uglify');
//var rename=require('gulp-rename');
//gulp.task('uglify',function(){
//	gulp.src('js.js')
//		.pipe(minjs())
//		.pipe(rename('js.min.js'))
//		.pipe(gulp.dest('./'))
//})
//gulp.task('default',['uglify'])

//var mincss=require('gulp-minify-css');
//var rename=require('gulp-rename');
//gulp.task('mincss',function(){
//	gulp.src('style.css')
//		.pipe(mincss())
//		.pipe(rename('style.min.css'))
//		.pipe(gulp.dest('./'))
//})
//gulp.task('default',['mincss'])

var minifyCss=require('gulp-minify-css');
var rename=require('gulp-rename');
var concat=require('gulp-concat');
var notify=require('gulp-notify');
var imagemin=require('gulp-imagemin');
var htmlmin=require('gulp-htmlmin');

//gulp.task('minimage',function(){
//	return gulp.src(['1.png'])
//		.pipe(rename('2.png'))
//		.pipe(imagemin())
//		.pipe(gulp.dest('./'))
//		.pipe(notify({message:'ok?'}))
//})

gulp.task('minhtml',function(){
	return gulp.src(['index.html'])
		.pipe(concat('index.html'))
		.pipe(rename({suffix:'.min'}))
		.pipe(htmlmin())
		.pipe(gulp.dest('./'))
		.pipe(notify({message:'ok.'}))
})
//gulp.task('minifycss', function () {
//	//压缩的文件
//	//1、['css/*.css']
//	//2、['css/a.css','css/n.css']
//
//	return gulp.src(['css/*.css'])
//		//将读取的文件合并到 style.css
//		.pipe(concat('style.css'))
//		//main.css 重命名为 style.min.css
//		.pipe(rename({suffix: '.min'}))
//		//执行压缩
//		.pipe(minifyCss())
//		//输出目录
//		.pipe(gulp.dest('css/'))
//		//完成压缩提示信息
//		.pipe(notify({message: 'ok!'}))
//});