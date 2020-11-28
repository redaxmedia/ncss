module.exports = () =>
{
	const config =
	{
		trigger:
		{
			options:
			{
				method: 'post',
				url: 'https://api.github.com/repos/redaxmedia/ncss-documentation-sync/actions/workflows/ci.yaml/dispatches',
				headers:
				{
					'Content-Type': 'application/json',
					'Accept': 'application/vnd.github.everest-preview+json',
					'Authorization': 'token ' + process.env.GITHUB_TOKEN
				},
				body:
				{
					ref: 'master'
				}
			}
		}
	};

	return config;
};
