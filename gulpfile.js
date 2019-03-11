let gulp = require('gulp');
let browserSync = require('browser-sync');
let sass = require('gulp-sass');

// Default task
gulp.task('default', ['js','serve']);

// Serve
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./public"
  });
  
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'public/scss/*.scss'], ['sass']);
  gulp.watch('public/*.html').on('change', browserSync.reload);
  gulp.watch('public/js/*.js').on('change', browserSync.reload);
});

// JS files
gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.js','node_modules/p5/lib/p5.min.js'])
    .pipe(gulp.dest("public/js"))
    .pipe(browserSync.stream());
});

// SASS
gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','public/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream());
});