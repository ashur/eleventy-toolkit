/* global describe, it */
const createElement = require( "../../src/shortcodes/createElement" ).pairedShortcode();
const { assert } = require( "chai" );

describe( "createElement (paired shortcode)", () =>
{
	describe( "#innerHTML", () =>
	{
		it( "should return an HTML element using the innerHTML provided", () =>
		{
			assert.equal(
				createElement(
					"<h1>Hello, world</h1>",
					"article",
					{
						class: "post post--new",
						"data-example": "Lorem ipsum",
					},
				),
				"<article class=\"post post--new\" data-example=\"Lorem ipsum\"><h1>Hello, world</h1></article>",
			);
		} );
	} );

	describe( "#tagName", () =>
	{
		it( "should return an HTML element using the tagName provided", () =>
		{
			assert.equal( createElement( undefined, "a" ), "<a></a>" );
		} );

		it( "should return innerHTML only if tagName is falsy", () =>
		{
			assert.equal(
				createElement(
					"hello, world",
					undefined,
					{
						width: 500,
					},
					true,
				),
				"hello, world",
			);
		} );
	} );

	describe( "#attributes", () =>
	{
		it( "should return an HTML element using the attributes provided", () =>
		{
			assert.equal(
				createElement(
					undefined,
					"article",
					{
						class: "post post--new",
						"data-example": "Lorem ipsum",
					},
				),
				"<article class=\"post post--new\" data-example=\"Lorem ipsum\"></article>",
			);
		} );

		it( "should omit attributes whose values are undefined or null", () =>
		{
			assert.equal(
				createElement(
					undefined,
					"article",
					{
						class: "card",
						href: undefined,
						"data-example": null,
						"aria-hidden": false,
					},
				),
				"<article class=\"card\" aria-hidden=\"false\"></article>",
			);
		} );

		it( "should use `classnames` if `class` attribute value is an array", () =>
		{
			assert.equal(
				createElement(
					undefined,
					"div",
					{
						class: [
							"block",
							undefined,
							"block__element",
							false,
							"block__element--modifier",
						],
					},
				),
				"<div class=\"block block__element block__element--modifier\"></div>",
			);
		} );
	} );

	describe( "#selfClosing", () =>
	{
		it( "should return a self-closing HTML element if specified", () =>
		{
			assert.equal(
				createElement(
					undefined,
					"source",
					{
						width: 500,
					},
					true,
				),
				"<source width=\"500\">",
			);
		} );

		it( "should ignore innerHTML if self-closing HTML element is specified", () =>
		{
			assert.equal(
				createElement(
					"hello, world",
					"source",
					{
						width: 500,
					},
					true,
				),
				"<source width=\"500\">",
			);
		} );
	} );
} );
