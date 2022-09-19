/* global describe, it */
const path = require( "path" );
const { assert } = require( "chai" );
const { shortcode: includeGlob, options } = require( "../../src/shortcodes/includeGlob" );

describe( "includeGlob (shortcode)", () =>
{
	const fixturesDir = path.join( path.dirname( __dirname ), "fixtures/includeGlob" );

	it( "should throw Error if includesDir option is not defined", () =>
	{
		const fn = () => includeGlob();
		assert.throws( fn, "includeGlob option 'includesDir' is undefined" );
	} );

	it( "should return a string containing the contents of all matching files", () =>
	{
		options.includesDir = fixturesDir;

		assert.equal( includeGlob( "**/*.txt" ), "blue\n\ngreen\n\nred\n" );
	} );
} );
