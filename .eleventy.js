const filters = require( "require-all" )( __dirname + "/src/filters/" );
const shortcodes = require( "require-all" )( __dirname + "/src/shortcodes/" );

/**
 * @param {UserConfig} eleventyConfig
 * @param {Object} [pluginOptions]
 * @param {Object} [pluginOptions.filters={}]
 * @param {Object} [pluginOptions.pairedShortcodes={}]
 * @param {Object} [pluginOptions.shortcodes={}]
 */
module.exports = ( eleventyConfig, pluginOptions = {} ) =>
{
	/* Filters */
	Object.entries( filters ).forEach( ( [name, filter] ) =>
	{
		eleventyConfig.addFilter( name, filter( pluginOptions ) );
	} );

	/* Shortcodes */
	Object.entries( shortcodes ).forEach( ( [name, { pairedShortcode, shortcode }] ) =>
	{
		if( pairedShortcode )
		{
			eleventyConfig.addPairedShortcode( name, pairedShortcode( pluginOptions ) );
		}
		else if( shortcode )
		{
			eleventyConfig.addShortcode( name, shortcode( pluginOptions ) );
		}
	} );
};
