const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['*.scss'], buildStyles)
  // Asterisk * means look for any filename with this extension
  // and compile it. So multiple sass files would be compiled.
  // In result it also creates another file in css if there are
  // other files.
  // If we don't want some file to show up in css folder then
  // add _ before the sass file name like _variables.scss
}

exports.default = series(buildStyles, watchTask)