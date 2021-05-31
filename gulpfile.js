var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
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

function javascript(done) {
    gulp.src('./src/scripts/*')
        .pipe(gulp.dest('./dist/scripts'));
    done();
}

function watch() {
    gulp.watch('./src/**/*.html', html);
    gulp.watch('./src/stylesheets/**/*.scss', stylesheet);
    gulp.watch('./src/scripts/*.js', javascript);
}

var compile = gulp.parallel(html, stylesheet, javascript);
var build = gulp.parallel(watch, html, stylesheet, javascript);

gulp.task('typography', typography);
gulp.task('default', build);