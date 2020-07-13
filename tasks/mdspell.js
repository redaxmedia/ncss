module.exports = () =>
{
	const config =
	{
		documentation:
		{
			files:
			{
				src:
				[
					'documentation/**/*.md',
					'!documentation/01.classes/03.structural-classes.md',
					'!documentation/01.classes/05.type-classes.md',
					'!documentation/01.classes/07.functional-classes.md'
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
