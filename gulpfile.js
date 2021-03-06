const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { src, dest } = require('gulp');

function defaultTask() {
	return src('./docs/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest('./docs/css'))
}

exports.default = defaultTask
exports.watch = function () {
  gulp.watch('./docs/scss/*.scss', gulp.series('default'));
};