module.exports = () =>
{
	const config =
	{
		trigger:
		{
			options:
			{
				method: 'POST',
				url: 'https://api.github.com/repos/redaxmedia/ncss-documentation-sync/actions/workflows/ci.yml/dispatches',
				headers:
				{
					'Accept': 'application/vnd.github.v3+json',
					'Authorization': 'token ' + process.env.TRIGGER_TOKEN,
					'User-Agent': 'ncss-documentation'
				},
				body: JSON.stringify(
				{
					ref: 'master'
				})
			}
		}
	};

	return config;
};
