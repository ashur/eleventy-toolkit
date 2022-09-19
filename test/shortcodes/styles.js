/* global describe, it */
const styles = require( "../../src/shortcodes/styles" ).shortcode();
const { assert } = require( "chai" );

describe( "styles (shortcode)", () =>
{
	it( "should return empty string if argument is not an object", () =>
	{
		assert.equal( styles( [] ), "" );
		assert.equal( styles( false ), "" );
		assert.equal( styles( null ), "" );
		assert.equal( styles( true ), "" );
		assert.equal( styles( undefined ), "" );
	} );

	it( "should return semicolon-delimited string of truthy values", () =>
	{
		assert.equal( styles( {
			"background-color": "red",
			"--custom-property": "10px",
			"--undefined-property": undefined,
		} ), "background-color: red; --custom-property: 10px" );
	} );
} );
