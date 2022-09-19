const CleanCSS = require( "clean-css" );

/**
 * @param {Object} options
 * @param {boolean} [options.minify]
 * @returns {Function}
 */
module.exports = ( options={} ) =>
{
	/**
	 * Minify CSS in production builds
	 * @param {string} css
	 * @returns {string}
	 */
	return ( css ) =>
	{
		let { minify } = options;
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

			return new CleanCSS( {} )
				.minify( css ).styles;
		}

		return css;
	};
};
