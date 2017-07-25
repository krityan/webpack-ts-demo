var gulp = require('gulp');
var webpack = require('webpack');
var webpackS = require('webpack-stream');
var paths = {
    pages: ['src/*.html']
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task('default', ['copy-html','webpack'], function() {
});

gulp.task('webpack', function() {
    return webpackS(require('./webpack.config.js'), webpack)
        .pipe(gulp.dest("dist"));
})