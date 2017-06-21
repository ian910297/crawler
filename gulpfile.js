var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('default', ['deploy']);

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
