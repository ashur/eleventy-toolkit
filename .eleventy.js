const filters = require( "require-all" )( __dirname + "/src/filters/" );
const shortcodes = require( "require-all" )( __dirname + "/src/shortcodes/" );

/**
 * @param {Object} pluginOptions
 */
module.exports = (eleventyConfig) =>
{
	/* Filters */
	Object.entries( filters ).forEach( ([name, fn]) =>
	{
		eleventyConfig.addFilter( name, fn );
	});

	/* Shortcodes */
	Object.entries( shortcodes ).forEach( ([name, {pairedShortcode, shortcode}]) =>
	{
		if( pairedShortcode )
		{
			eleventyConfig.addPairedShortcode( name, pairedShortcode );
		}

		if( shortcode )
		{
			eleventyConfig.addShortcode( name, shortcode );
		}
	});
};
