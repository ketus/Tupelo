module.exports = function(grunt) {

    grunt.initConfig({
        jasmine: {
            src: [  'index.js',
                    'config/*.js'
            ],
            options: {
                vendor: ['/node_modules/colors/safe.js'],
                specs: 'spec/*.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
