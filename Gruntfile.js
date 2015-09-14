module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        typescript: {
            base: {
                src: ['typings/tsd.d.ts', 'src/components/*.ts', 'src/bootstrap.ts'],
                dest: 'build',
                options: {
                    target: 'ES5',
                    module: 'commonjs',
                    sourceMap: true,
                    experimentalDecorators: true
                }
            },
            options: {
                livereload: true
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: 'src/**/*.html',
                    dest: 'build/templates',
                    flatten: true,
                    filter: 'isFile'
                }, {expand: true, src: 'src/index.html', dest: 'build/', flatten: true, filter: 'isFile'}]
            }
        },
        delta: {
            /**
             * By default, we want the Live Reload to work for all tasks; this is
             * overridden in some tasks (like this file) where browser resources are
             * unaffected. It runs by default on port 35729, which your browser
             * plugin should auto-detect.
             */
            options: {
                livereload: true
            },

            typescript: {
                files: ['typings/tsd.d.ts', 'src/components/*.ts', 'src/bootstrap.ts'],
                tasks: [ 'typescript' ],
                options: {
                    livereload: true
                }
            }
        },
            /**
         * `grunt-express-server` launch a local server to run the site
         */
        express: {
            options: {
                // Override defaults here
                background: true,
                port: 9000
            },
            dev: {
                options: {
                    script: 'dev_server.js'
                }
            }
        }
    });

    grunt.renameTask( 'watch', 'delta' );

    grunt.registerTask("default", ["typescript"]);
    grunt.registerTask("build", ["typescript"]);
    grunt.registerTask("watch", [ "build", "express:dev", "delta"] );
};