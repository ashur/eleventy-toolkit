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
	Object.entries( filters ).forEach( ( [name, fn] ) =>
	{
		eleventyConfig.addFilter( name, fn );
	} );

	/* Shortcodes */
	Object.entries( shortcodes ).forEach( ( [name, { pairedShortcode, shortcode, options }] ) =>
	{
		if( pairedShortcode )
		{
			// Register paired shortcode options
			if( pluginOptions.pairedShortcodes[name] )
			{
				Object.entries( pluginOptions.pairedShortcodes[name] ).forEach( ( [key, value] ) =>
				{
					options[key] = value;
				} );
			}

			eleventyConfig.addPairedShortcode( name, pairedShortcode );
		}

		if( shortcode )
		{
			// Register shortcode options
			if( pluginOptions.shortcodes[name] )
			{
				Object.entries( pluginOptions.shortcodes[name] ).forEach( ( [key, value] ) =>
				{
					options[key] = value;
				} );
			}

			eleventyConfig.addShortcode( name, shortcode );
		}
	} );
};
