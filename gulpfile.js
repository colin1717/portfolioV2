var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
  console.log('gulp is running');
  gulp.src('stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
})
