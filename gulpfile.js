var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');

gulp.task('browserify', function() {
    browserify('./client/scripts/app.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('./client/scripts/build.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  var jsxpath = "./client/scripts/*.jsx"
  var htmlpath = "./client/*.html"
  gulp.watch(jsxpath, ['browserify'])
  gulp.watch(htmlpath)
});

gulp.task('webserver', function() {
  gulp.src('./client/')
    .pipe(webserver({
      host: '127.0.0.1',
      livereload: true
    })
  );
});

gulp.task('default', ['browserify', 'watch', 'webserver']);