const classnames = require( "../lib/classnames" );
const styles = require( "../lib/styles" );

/**
 * @returns {Function}
 */
module.exports.pairedShortcode = () =>
{
	/**
	 * Create an HTML element
	 *
	 * @example
	 * {% createElement "a", {
	 *   class: "link",
	 *   href: item.url
	 * } %}
	 *     {{ item.title }}
	 * {% endcreateElement %}
	 * // returns `<a class="link" href="https://example.com">Example</a>`
	 *
	 * @example
	 * {% createElement "a" if false, {
	 *   class: "link",
	 *   href: item.url
	 * } %}
	 *     {{ item.title }}
	 * {% endcreateElement %}
	 * // returns `Example`
	 *
	 * @example
	 * {% createElement "article", {
	 *   class: "card",
	 *   href: undefined
	 * } %}{% endcreateElement %}
	 * // returns `<article class="card"></article>`
	 *
	 * @example
	 * {% createElement "div", {
	 *   class: [
	 *     "item",
	 *     "item--truthy" if true,
	 *     "item--falsy" if false,
     *   ],
	 * } %}
	 *     {{ item.title }}
	 * {% endcreateElement %}
	 * // returns `<div class="item item--truthy">Example</div>`
	 *
	 * @example
	 * {% createElement "input", {
	 *   type: "button"
	 * }, true %}innerHTML will be ignored{% endcreateElement %}
	 * // returns `<input type="button">`
	 *
	 * @param {string} innerHTML
	 * @param {string} tagName
	 * @param {Object} [attributes]
	 * @param {boolean} [selfClosing=false]
	 * @return {string}
	 */
	return ( innerHTML, tagName, attributes = {}, selfClosing=false ) =>
	{
		if( !tagName )
		{
			return innerHTML;
		}

		const attributesString = Object.entries( attributes )
			.map( ( [key, value] ) =>
			{
				if( key === "class" && Array.isArray( value ) )
				{
					return ` ${key}="${classnames.apply( null, value )}"`;
				}

				if( key === "style" && typeof value === "object" )
				{
					return ` ${key}="${styles( value )}"`;
				}

				if( value !== undefined && value !== null )
				{
					return ` ${key}="${value}"`;
				}
			} )
			.join( "" );

		const openingTag = `<${tagName}${attributesString}${ selfClosing ? "" : ">" }`;
		const tagContent = selfClosing ? "" : innerHTML || "";
		const closingTag = selfClosing ? ">" : `</${tagName}>`;

		return `${ openingTag }${ tagContent }${ closingTag }`;
	};
};
