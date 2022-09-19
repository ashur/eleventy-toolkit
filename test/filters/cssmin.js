/* global describe, it */
const filter = require( "../../src/filters/cssmin" );
const { assert } = require( "chai" );

describe( "cssmin (filter)", () =>
{
	const originalCss = `
.blue {
	color: blue;
}

.yellow {
	color: yellow;
}
`;

	it( "should always return original CSS if minify option is false", () =>
	{
		const nodeEnv = process.env.NODE_ENV;
		process.env.NODE_ENV = "production";

		const cssmin = filter( { minify: false } );
		assert.equal( cssmin( originalCss ), originalCss );

		process.env.NODE_ENV = nodeEnv;
	} );

	it( "should return minified CSS if minify option is true", () =>
	{
		const cssmin = filter( { minify: true } );
		assert.equal( cssmin( originalCss ), ".blue{color:#00f}.yellow{color:#ff0}" );
	} );

	it( "should return minified CSS if NODE_ENV env var equals 'production'", () =>
	{
		const nodeEnv = process.env.NODE_ENV;
		process.env.NODE_ENV = "production";

		const cssmin = filter();
		assert.equal( cssmin( originalCss ), ".blue{color:#00f}.yellow{color:#ff0}" );

		process.env.NODE_ENV = nodeEnv;
	} );
} );
