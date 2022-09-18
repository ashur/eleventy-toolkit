/**
 * @param {Array} array
 * @param {number} start
 * @param {number} [end]
 * @returns {Object}
 */
module.exports = ( array, start, end ) =>
{
	if( Array.isArray( array ) )
	{
		return array.slice( start, end );
	}

	return "";
};
