/* global describe, it */
const slice = require( "../../src/filters/slice" );
const { assert } = require( "chai" );

describe( "slice (filter)", () =>
{
	it( "should return empty string if first argument is not an array", () =>
	{
		assert.equal( slice( undefined, 0, 10 ), "" );
	} );

	it( "should return sliced array", () =>
	{
		const array = ["one", "two", "three", "four"];

		assert.deepEqual( slice( array, 1, 3 ), array.slice( 1, 3 ) );
	} );
} );
