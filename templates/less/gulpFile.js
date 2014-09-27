'use strict';

var gulp = require('gulp');
var csslint = require('gulp-csslint');
var jshint = require('gulp-jshint');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var path = require('path');

var browserSync = require('browser-sync');

var reload = browserSync.reload;

var config = {
  dev: 'dev',
  build: 'build'
};

gulp.task('jshint', function() {
  return gulp.src(['gulpFile.js', 'dev/assets/scripts/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('csslint', function() {
  return gulp.src(['dev/assets/styles/*.css'])
    .pipe(prefix('last 3 version', '> 1%', {
      cascade: true
    }))
    .pipe(csslint('.csslintrc'))
    .pipe(csslint.reporter());
});

gulp.task('connect-dev', function() {
  browserSync({
    server: {
      baseDir: config.dev
    }
  });
});

gulp.task('connect-prod', function() {
  browserSync({
    server: {
      baseDir: config.build
    }
  });
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('watch', function() {
  gulp.watch([
    config.dev + '/assets/styles/*.less',
  ], ['less-dev', 'csslint']);

  gulp.watch([
    'gulpFile.js',
    config.dev + '/assets/scripts/**/*.js'
  ], ['jshint']);

  gulp.watch([
    config.dev + '/*.html',
    config.dev + '/templates/**/*.html',
    config.dev + '/images/**/*'
  ], ['reload']);
});

gulp.task('html-parser', function() {

  return gulp.src([config.dev + '/**/*.html', '!' + config.dev + '/assets/lib/**', '!' + config.dev + '/templates/**'])
    .pipe(useref())
    .pipe(gulp.dest(config.build));
});

gulp.task('assets-parser', function() {
  var jsFilter = filter('**/*.js');
  var cssFilter = filter('**/*.css');

  return gulp.src([config.dev + '/**/*.html', '!' + config.dev + '/assets/lib/**', '!' + config.dev + '/templates/**'])
    .pipe(useref.assets())
    .pipe(jsFilter)
    .pipe(uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(minifyCss())
    .pipe(cssFilter.restore())
    .pipe(gulp.dest(config.build));
});

gulp.task('imagemin', function() {
  return gulp.src(config.dev + '/assets/images/**')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest(config.build + '/assets/images'));
});

gulp.task('fonts', function() {
  return gulp.src(config.dev + '/assets/fonts/**')
    .pipe(gulp.dest(config.build + '/assets/fonts'));
});

gulp.task('less-dev', function() {
  gulp.src(config.dev + '/assets/styles/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest(config.dev + '/assets/styles/'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('less-prod', function() {
  gulp.src(config.dev + '/assets/styles/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest(config.dev + '/assets/styles/'));
});

gulp.task('default', ['less-dev', 'connect-dev', 'watch']);
gulp.task('build', ['less-prod', 'imagemin', 'fonts', 'html-parser', 'assets-parser']);
gulp.task('prod', ['connect-prod']);
