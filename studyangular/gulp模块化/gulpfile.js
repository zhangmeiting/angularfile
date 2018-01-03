var gulp=require('gulp');
var browserify=require('browserify');
////也就是说它是一个nodejs的包 获取要合并的文件
var source=require('vinyl-source-stream');////是合并用
var buffer=require('vinyl-buffer');////是转流的
/////////////以上是做模块化的包
///////以下是生成md5码后缀文件名以及做路径自动替换的包
var rev=require('gulp-rev');//////生成md5码后缀文件名
var revcollector=require('gulp-rev-collector');//////自动替换路径

gulp.task('module',function(){
	browserify({
		entries:['./entry.js']
	}).bundle()
	.pipe(source('bundle.js'))
	.pipe(buffer())
	.pipe(rev())      ////在输出之前 生成md5后缀
	.pipe(gulp.dest('./'))//////输出已经有后缀的文件
	.pipe(rev.manifest())      ////生成对应关系的文件
	.pipe(gulp.dest('./'))//////输出对应关系的文件
})
gulp.task('replacesrc',function(){
	setTimeout(function(){
		gulp.src(['./index.html','rev-manifest.json'])
			.pipe(revcollector({
				replaceReved:true /////自动替换开关
			}))
			.pipe(gulp.dest('./'))
	},500)
})

//////优化
var watch=require('gulp-watch');
var connect=require('gulp-connect');
gulp.task('httpserver',function(){
	connect.server({
		port:3000,
		livereload:true
	})
})
gulp.task('刷新浏览器',function(){
	gulp.src('.')
		.pipe(connect.reload())
})
gulp.task('watch',function(){
	gulp.watch(['js1.js','js2.js'],['module','replacesrc']);
	gulp.watch('./index.html',['刷新浏览器'])
})
gulp.task('default',['module','replacesrc','httpserver','watch']);