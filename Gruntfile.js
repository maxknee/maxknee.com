module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			all: {
				src: [
				'js/vendor/*.js',
				'js/app/*.js'
				],
				dest: 'js/prod/maxknee.js'
			}
		},
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			all: {
				files: {
					'js/prod/scripts.min.js' : ['<%= concat.all.dest %>']
				}
			}
		},
		compass: {
			all: {
				options: {
					config: 'config/compass.rb'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
				nospawn: true
			},
			scripts: {
				files: ['js/app/*.js'],
				tasks: ['js-compile']
			},
			styles: {
				files: ['scss/**'],
				tasks: ['css-compile']
			}
		},
		bower: {
			dev: {
				dest: 'js/vendor'
			}
		},
		clean: ['js/prod/*', 'css/*']
	});
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', ['bower', 'concat', 'uglify', 'compass']);
  grunt.registerTask('js-compile', ['concat', 'uglify']);
  grunt.registerTask('css-compile', ['compass']);
};
