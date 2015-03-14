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
				dest: 'public/js/maxknee.js'
			}
		},
		haml: {
			dist: {
				files: [{
					expand: true,
					cwd: 'haml',
					src: ['*.haml'],
					dest: 'public/html',
					ext: '.html'
				}]
			}
		},
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			all: {
				files: {
					'public/js/scripts.min.js' : ['<%= concat.all.dest %>']
				}
			}
		},
		compass: {
			all: {
				options: {
					require: 'susy',
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
			},
			haml: {
				files: ['haml/*.haml'],
				tasks: ['haml']
			}
		},
		bower: {
			dev: {
				dest: 'js/vendor'
			}
		},
		clean: ['public/js/*', 'public/css/*']
	});
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.registerTask('default', ['bower', 'concat', 'uglify', 'compass', 'haml', 'watch']);
  grunt.registerTask('js-compile', ['concat', 'uglify']);
  grunt.registerTask('css-compile', ['compass']);
  //grunt.registerTask('watch', ['clean', 'uglify', 'compass', 'haml']);
};
