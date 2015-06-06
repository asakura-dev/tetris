var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('sass', function(){
	return gulp
		.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('babel', function() {
	return gulp
	    .src('./src/js/*.js')
	    .pipe(babel())
	    .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch',function (){
	gulp.watch('./src/scss/*.scss',['sass']);
	gulp.watch('./src/js/*js',['babel']);
});

gulp.task('default', ['sass','babel']);
