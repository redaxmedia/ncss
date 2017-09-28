module.exports = function ()
{
	'use strict';

	var config =
	{
		documentation:
		{
			files:
			{
				src:
				[
					'documentation/**/*.md'
				]
			},
			options:
			{
				ignoreNumbers: true
			}
		}
	};

	return config;
};