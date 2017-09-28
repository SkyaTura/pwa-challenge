var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('pug', function buildHTML() {
    return gulp.src('./src/views/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function () {
  return gulp.src('./sass/public/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/static/css'));
});

gulp.task('sass:watch', function () {
    gulp.run('sass');
    gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
});

gulp.task('pug:watch', function () {
    gulp.run('pug');
    gulp.watch('./src/views/**/*.pug', ['pug']);
});

gulp.task('default', ['pug', 'sass']);
gulp.task('watch', ['pug:watch', 'sass:watch']);
