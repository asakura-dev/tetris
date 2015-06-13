var gulp = require('gulp');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var browserify = require("browserify");
var babelify = require('babelify');
gulp.task('sass', function(){
	return gulp
		.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/css'));
});
gulp.task("ES6toES5",function(){
	return browserify("./src/js/main.js", { debug: true })
	    .transform(babelify.configure({
			optional: ["runtime"] 
		})
				  )
	    .bundle()
	    .pipe(source("main.js"))
	    .pipe(gulp.dest("./dist/js"));
});

gulp.task('watch',function (){
	gulp.watch('./src/scss/*.scss',['sass']);
	gulp.watch('./src/js/*js',['ES6toES5']);
});

gulp.task('default', ['sass','ES6toES5']);
