var gulp = require('gulp'),
    replace = require('gulp-replace'),
    bump = require("gulp-bump"),
    rename = require("gulp-rename"),
    del = require('del'),
    css = require('gulp-clean-css');
    js = require('gulp-uglify');

gulp.task('css', ['clean'], function () {
    return gulp.src('./src/stable/css/tableexport.css')
        .pipe(gulp.dest('./dist/css/'))
        .pipe(css())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./src/stable/css/'));
});

gulp.task('js', ['clean'], function () {
    return gulp.src('./src/stable/js/tableexport.js')
        .pipe(gulp.dest('./dist/js/'))
        .pipe(js({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(gulp.dest('./src/stable/js/'));
});

gulp.task('typings', ['clean'], function () {
    return gulp.src('./src/stable/typings/*.ts')
        .pipe(gulp.dest('./dist/typings/'));
});

gulp.task('bump', ['bump-js', 'bump-css'], function(){
    return gulp.src(['./bower.json', './package.json'])
        .pipe(bump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump-js', function () {
    return gulp.src(['src/stable/js/tableexport.js'])
        .pipe(replace(/(v\d+\.\d+\.)(\d+)/g, function (matches, match1, match2) {
            return match1 + (Number(match2)+1);
        }))
        .pipe(replace(/(version: ["']\d+\.\d+\.)(\d+)/g, function (matches, match1, match2) {
            return match1 + (Number(match2)+1);
        }))
        .pipe(gulp.dest('src/stable/js/'))
        .on('end', function () {
            gulp.start('js');
        });
});

gulp.task('bump-css', function () {
    gulp.src(['src/stable/css/tableexport.css'])
        .pipe(replace(/(v\d+\.\d+\.)(\d+)/g, function (matches, match1, match2) {
            return match1 + (Number(match2) + 1);
        }))
        .pipe(gulp.dest('src/stable/css/'))
        .on('end', function () {
            gulp.start('css');
        });
});

gulp.task('clean', function () {
    return del(['dist/js']);
});

gulp.task('build', ['css', 'js', 'typings']);

gulp.task('default', ['build']);



