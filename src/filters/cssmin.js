const CleanCSS = require( "clean-css" );

/**
 * @param {Object} options
 * @param {boolean} [options.minify] - whether to run CSS through CleanCSS
 * @param {Object} [options.options] - options passed to CleanCSS
 * @see https://www.npmjs.com/package/clean-css#formatting-options
 * @returns {Function}
 */
module.exports = ( { minify, options: cleanCssOptions }={} ) =>
{
	/**
	 * Minify CSS in production builds
	 * @param {string} css
	 * @returns {string}
	 */
	return ( css ) =>
	{
		if( minify === undefined )
		{
			minify = process.env.NODE_ENV === "production";
		}

		if( css && minify )
		{
			if( css.toString )
			{
				css = css.toString();
			}

			return new CleanCSS( cleanCssOptions )
				.minify( css ).styles;
		}

		return css;
	};
};
