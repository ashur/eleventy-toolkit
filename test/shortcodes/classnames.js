/* global describe, it */
const classnames = require( "../../src/shortcodes/classnames" ).shortcode();
const { assert } = require( "chai" );

describe( "classnames (shortcode)", () =>
{
	it( "should return empty string if no arguments are passed", () =>
	{
		assert.equal( classnames(), "" );
	} );

	it( "should return string of truthy values", () =>
	{
		assert.equal( classnames(
			"block",
			undefined,
			"block__element",
			false,
			"block__element--modifier",
		), "block block__element block__element--modifier" );
	} );

	it( "should return string of unique values", () =>
	{
		assert.equal( classnames(
			"block",
			"block__element",
			"block",
			"block__element--modifier",
			"block",
		), "block block__element block__element--modifier" );
	} );
} );
