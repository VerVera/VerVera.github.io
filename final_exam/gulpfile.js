'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSyncLib = require('browser-sync');
var pjson = require('./package.json');
var minimist = require('minimist');
var wrench = require('wrench');
var runSequence = require('run-sequence');


// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
var plugins = gulpLoadPlugins();

var config = pjson.config;
var args = minimist(process.argv.slice(2));
var dirs = config.directories;
var taskTarget = args.production ? dirs.destination : dirs.temporary;

// Create a new browserSync instance
var browserSync = browserSyncLib.create();

function pre() {
    wrench.readdirSyncRecursive('./gulp').filter(function (file) {
        return (/\.(js)$/i).test(file);
    }).map(function (file) {
        require('./gulp/' + file)(gulp, plugins, args, config, taskTarget, browserSync);
    });
}

// Default task
gulp.task('default', function () {
    gulp.start('serve');
});

gulp.task('internal:build', [
    'imagemin',
    'copy',
    'copyNPM',
    'sass',
    'script']);

gulp.task('internal:serve', [
    'browserSync',
    'watch']);

// Server tasks with watch
gulp.task('serve', function () {
    pre();
    runSequence(
        'clean',
        'internal:build',
        'internal:serve'
    );
});

// Server tasks with watch
gulp.task('build', function () {
    taskTarget = dirs.destination;
    pre();
    runSequence(
        'clean',
        'internal:build'
    );
});

