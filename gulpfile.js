const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { src, dest } = require('gulp');

function defaultTask() {
	return src('./src/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest('./src/css'))
}

exports.default = defaultTask
exports.watch = function () {
  gulp.watch('./src/scss/*.scss', gulp.series('default'));
};