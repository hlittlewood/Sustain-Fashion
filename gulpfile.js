var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

function html(done) {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
    done();
}

function stylesheet(done) {
    gulp.src('./src/stylesheets/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8', multiplePseudoMerging: true}))
        .pipe(gulp.dest('./dist/stylesheets'));
    done();
}

function typography(done) {
    gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/typefaces'));
    done();
}

function watch() {
    gulp.watch('./src/**/*.html', html);
    gulp.watch('./src/stylesheets/**/*.scss', stylesheet);
}

var compile = gulp.parallel(html, stylesheet);
var build = gulp.parallel(watch, html, stylesheet);

gulp.task('typography', typography);
gulp.task('default', build);