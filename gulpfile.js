const gulp    = require('gulp');
const sass    = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('sass/*.sass', gulp.parallel('sass'));
});

