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
			"--custom-property": "10px",
			"--false-property": false,
			"--null-property": null,
			"--undefined-property": undefined,
			"background-color": "red",
		} ), "--custom-property: 10px; background-color: red" );
	} );

	it( "should include property whose value is 0", () =>
	{
		assert.equal( styles( {
			"--custom-property": 0,
		} ), "--custom-property: 0" );
	} );
} );
