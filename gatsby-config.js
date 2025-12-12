/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `ml5.js`,
		siteUrl: `https://ml5js-jp.github.io/ml5-website-v02-gatsby`,
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown',
				path: `${__dirname}/src/markdown/`,
			},
		},
	],
};
