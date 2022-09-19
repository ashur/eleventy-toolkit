const fg = require( "fast-glob" );
const fs = require( "fs" );
const path = require( "path" );

/**
 * @param {string|Array} pattern
 * @param {string} includesDir
 * @returns {string}
 */
const includeAll = ( pattern, includesDir ) =>
{
	if( Array.isArray( pattern ) )
	{
		pattern = pattern.map( ( item ) => path.join( includesDir, item ) );
	}
	else
	{
		pattern = path.join( includesDir, pattern );
	}

	const entries = fg.sync( pattern, { dot: false } );
	const contents = entries.map( ( entry ) => fs.readFileSync( entry ) )
		.join( "\n" );

	return contents;
};

/**
 * @param {Object} options
 * @param {string} [options.includesDir]
 * @returns {Function}
 */
module.exports.shortcode = ( options={} ) =>
{
	/**
	 * Read and return contents of all files matching glob pattern.
	 * @param {string} pattern
	 * @return {string}
	 */
	return ( pattern ) =>
	{
		const { includesDir } = options;

		if( !includesDir )
		{
			throw new Error( "includeGlob option 'includesDir' is undefined" );
		}

		return includeAll( pattern, includesDir );
	};
};
