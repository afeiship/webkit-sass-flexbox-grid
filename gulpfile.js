(function() {
  var gulp = require("gulp");
  var sass = require("gulp-sass");
  var del = require("del");
  var path = require("path");
  var SASS_INCLUDE_PATHS = [path.join(__dirname, "/node_modules/")];
  var concat = require("gulp-concat");
  var files = [
    "src/_variables.scss",
    "src/_mixins.scss",
    "src/_grid.scss",
    "src/webkit-sass-flexbox-grid.scss"
  ];

  gulp.task("clean", function() {
    return del("dist");
  });

  gulp.task("styles", function() {
    return gulp
      .src(files)
      .pipe(concat("webkit-sass-flexbox-grid.scss"))
      .pipe(gulp.dest("dist"))
      .pipe(
        sass({ outputStyle: "expanded", includePaths: SASS_INCLUDE_PATHS }).on(
          "error",
          sass.logError
        )
      )
      .pipe(gulp.dest("dist"));
  });

  gulp.task("default", gulp.series(["clean", "styles"]));
})();
