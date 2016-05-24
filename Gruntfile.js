module.exports = function(grunt) {

    grunt.initConfig({
        jasmine_node: {
            options: {
                matchall: true,
                projectRoot: './src',
                requirejs: false,
                forceExit: true,
                extensions: 'js',
                specNameMatcher: 'spec'
            }
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.registerTask('default', ['jasmine_node']);
};
