// Needed for deleting all compiled classes that are
// not needed.
// !!! Remember to install gulp before!

// If after cleaning index.css we add a class in HTML that
// wasn't used before we won't be able to use that class.
// To fix that we need to add item in wathTask to
// automatically update css file
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('shinobi/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] }))
    // Tells where to look for files to know what classes
    // are used and shouldn't be deleted
    .pipe(dest('css'))
}

function watchTask() {
  watch(['shinobi/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)