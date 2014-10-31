var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  gulp.src('./public/static/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/static/css'));
});

gulp.task('watch', function () {
	gulp.watch('./public/static/less/*.less', ['less']);
});

gulp.task('default', ['watch']);