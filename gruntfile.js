module.exports = function (grunt)
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		mdspell : require('./tasks/mdspell')(grunt),
		http: require('./tasks/http')(grunt)
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'mdspell'
	]);
	grunt.registerTask('trigger',
	[
		'http:trigger'
	]);
};
