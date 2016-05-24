'use strict';

var path = require('path');
var gulpif = require('gulp-if');
var gnf = require('gulp-npm-files');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
    var dirs = config.directories;
    var dest = path.join(taskTarget, dirs.modules);


    // Copy dependencies to build/node_modules/ 
    gulp.task('copyNPM', function() {
        gulp.src(gnf(), {base:'./'}).pipe(gulp.dest(dest));
    });
};
