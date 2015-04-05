module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'dist/css/style.css': 'dev/scss/main.scss'      // 'destination': 'source'
        }
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
        // {expand: true, src: ['build/css/*'], dest: 'dist/', filter: 'isFile'},

          // includes files within path and its sub-directories
          {expand: true, src: ['build/css/*'], dest: 'dist/'},
          {expand: true, src: ['build/js/**'], dest: 'dist/'},
          {expand: true, src: ['build/index.html'], dest: 'dist/'},

          // makes all src relative to cwd
          // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

          // flattens results to a single level
          // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],
      },
    },
    rename: {
      main: {
        files: [
      {src: ['dist/build'], dest: 'dist/project'},
        ]
      }
    },
    watch: {
      scripts: {
        files: [
          'dev/scss/*.scss',
          'dist/js/*.js',
          '../index.html',
          'gruntfile.js'
        ],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
    connect: {
        options: {
            port: 9000,
            livereload: 35729,
            hostname: '0.0.0.0'
        },
        livereload: {
            options: {
                open: {
                     target: 'http://localhost:9000'
                },
                base: [
                    '../'
                ]
            }
        }
    }

  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('serve', ['connect', 'watch']);


  // grunt.registerTask('package', ['sass','copy', 'rename']);



};
