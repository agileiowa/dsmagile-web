/*!
 * Bootstrap's Gruntfile
 * http://getbootstrap.com
 * Copyright 2013-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Project configuration.
  grunt.initConfig({

  clean: {
    src: ["css/*.css", "!css/main.css", "js/"],

    options: {
      'no-write' : false
    }
  },

  concat: {
    bootcamp: {
        files: {
            'css/bootstrap.css': ['bower_components/bootstrap/dist/css/bootstrap.css']
        }
    },

    jquery: {
        files: {
            'js/jquery.js': ['bower_components/jquery/dist/jquery.js']
        }
    }
  },

  });

  // Default task.
  grunt.registerTask('default', ['clean', 'concat']);
};
