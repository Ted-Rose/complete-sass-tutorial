const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
// Import gulp SASS plugin that returns a function
// require("sass") is used to get SASS compiler
// we need to invoke this to compile our SASS

function buildStyles() {
  // Can be called in any other name
  // compiles scss
  return src('index.scss')
  // relative fath to our source file
  // src is the const defined on first line
    .pipe(sass())
    // sass is the sass const
    .pipe(dest('css'))
    // compile sass into css folder
}

function watchTask() {
  // actively watches our sass file so that
  // every time we change scss file our css
  // files would be updated
  watch(['index.scss'], buildStyles)
  // pass in array of files to be watched
  // second argument is a function to return
  // when the file changes
}

exports.default = series(buildStyles, watchTask)
// invoke series function and pass in the functions
// we want to run

// Now in terminal type "gulp"