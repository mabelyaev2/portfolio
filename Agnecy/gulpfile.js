'use strict'

const gulp = require('gulp');
const cssnano = require('gulp-cssnano');

gulp.task('minifier', function() {
	return gulp.src('./css/style.css')
	.pipe(cssnano())
	.pipe(gulp.dest('./out'))
});

gulp.task('minifier:watch', function() {
	gulp.watch('./css/**/*style.min.css')
});
