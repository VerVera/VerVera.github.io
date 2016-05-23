/**
 * Created by koste on 22.05.2016.
 */
module.exports = function (grunt) {

    grunt.initConfig({

        concat: {
            scss: {
                options: {
                    separator: ''
                },

                src: ['styles/style.scss'],
                dest: 'styles/main.scss'

            },
            js: {
                options: {
                    separator: ';'
                }
                ,

                src: ['js/src/*.js'],
                dest: 'js/dist/script.min.js'

            }
        }
        ,
        uglify: {
            dist: {
                src: ['js/dist/script.min.js'],
                dest: 'js/dist/script.min.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['main.scss'],
                    dest: './styles',
                    ext: '.css'
                }]
            }
        },
        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['styles/*.scss'],
                tasks: ['concat', 'sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'sass', 'watch']);

};