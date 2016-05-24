'use strict';

var path = require('path');
var uglify  = require('gulp-uglify');
var concat = require('gulp-concat');

module.exports = function (gulp, plugins, args, config, taskTarget, browserSync) {
    var dirs = config.directories;
    var dest = path.join(taskTarget, dirs.scripts.replace(/^_/, ''));
    
    gulp.task('script', function () {
        return gulp.src(path.join(dirs.source, dirs.scripts, '/*.js'))
            .pipe(concat('all.js'))
            //.pipe(uglify())
            .pipe(gulp.dest(dest));
    });
};
