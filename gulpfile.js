const { 
    watch, 
    src, 
    dest,
    parallel,
    series
} = require("gulp");
const nunjucks = require('gulp-nunjucks');
const flatten = require('gulp-flatten');
const del = require('del');

function html(cb) {
    return src('src/html/*.html')
    .pipe(nunjucks.compile())
    .pipe(dest('output/'));
}

function css() {
    return src('src/styles/*.css')
    .pipe(dest('output/'));
}

const imageTypes = '{jpeg,jpg,svg,png}';

function images() {
  return src(`src/images/**/*.${imageTypes}`)
  .pipe(flatten())
  .pipe(dest('output/'));
}

function scripts() {
  return src(`src/**/*.js`)
  .pipe(flatten())
  .pipe(dest('output/'));
}

function clean() {
    return del(["output"]);
}

function watchFiles() {
    watch("src/html/**/*.html", { ignoreInitial: false }, html);
    watch("src/styles/**/*.css", { ignoreInitial: false }, css);
    watch(`src/images/**/*.${imageTypes}`, { ignoreInitial: false }, images);
    watch("src/**/*.js", { ignoreInitial: false }, scripts);
}

const build = series(clean, parallel(css, html, images));

exports.watch = parallel(watchFiles);
exports.clean = clean;
exports.images = images;
exports.css = css;
exports.scripts = scripts;
exports.build = build;
exports.default = build;
