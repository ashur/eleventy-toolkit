/**
 * @returns {Function}
 */
module.exports = () =>
{
	/**
	 * Expose `Array.slice` functionality to Nunjucks templates
	 *
	 * @example
	 * {{ ["red", "orange", "yellow", "green", "blue"] | slice( 2, 4) }}
	 * // returns ["yellow", "green"]
	 * @param {Array} array
	 * @param {number} start
	 * @param {number} [end]
	 * @returns {Object}
	 */
	return ( array, start, end ) =>
	{
		if( Array.isArray( array ) )
		{
			return array.slice( start, end );
		}

		return "";
	};
};
