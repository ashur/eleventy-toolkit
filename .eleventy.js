const classnames = require( "@aaashur/eleventy-plugin-classnames" );
const createElement = require( "@aaashur/eleventy-plugin-create-element" );
const filters = require( "require-all" )( __dirname + "/src/filters/" );
const shortcodes = require( "require-all" )( __dirname + "/src/shortcodes/" );
const styles = require( "@aaashur/eleventy-plugin-styles" );

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
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
		eleventyConfig.addFilter( name, filter( pluginOptions.filters?.[name] ) );
	} );

	/* Shortcodes */
	Object.entries( shortcodes ).forEach( ( [name, { pairedShortcode, shortcode }] ) =>
	{
		if( pairedShortcode )
		{
			eleventyConfig.addPairedShortcode( name, pairedShortcode( pluginOptions.pairedShortcodes?.[name] ) );
		}
		else if( shortcode )
		{
			eleventyConfig.addShortcode( name, shortcode( pluginOptions.shortcodes?.[name] ) );
		}
	} );

	/* Plugins */
	eleventyConfig.addPlugin( classnames );
	eleventyConfig.addPlugin( createElement );
	eleventyConfig.addPlugin( styles );
};
