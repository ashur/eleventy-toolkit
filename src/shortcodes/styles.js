/**
 * Join truthy object values into a semicolon-delimited string.
 *
 * @example
 * {% styles {
 *     "background-color": backgroundColor,
 *     "--custom-property": customProperty,
 *     "--undefined-property": "green" if undefinedProperty
 * } %}
 * // returns "background-color: red; --custom-property: 10px"
 * @param {Object} args
 * @return {string}
 */
module.exports.shortcode = ( args ) =>
{
	if( !args )
	{
		return "";
	}

	return Object.entries( args )
		/* eslint-disable-next-line no-unused-vars */
		.filter( ( [property, value] ) => value ) // only include truthy values
		.map( ( [property, value] ) => `${property}: ${value}` )
		.join( "; " );
};
