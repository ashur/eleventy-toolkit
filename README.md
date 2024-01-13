# eleventy-toolkit

Common filters and shortcodes for use with Eleventy

## Usage

To install this plugin, run the following command at the root of your Eleventy project:

```shell
npm install ashur/eleventy-toolkit#semver:^v0.3.2
```

Next, include the following in your [Eleventy config file](https://www.11ty.dev/docs/config/):

```javascript
module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(require("@aaashur/eleventy-toolkit"));
};
```

### Options

Filters, shortcodes, and paired shortcodes may support configuration options, which can be set using the `pluginOptions` object:

```javascript
module.exports = (eleventyConfig) => {
    const toolkitOptions = {
        filters: {
            cssmin: {
                minify: true, // always minify CSS
                options: {
                    // CleanCSS options
                },
            },
        },
        shortcodes: {
            includeGlob: {
                includesDir: __dirname + "/src/_includes",
            },
        },
    };

    eleventyConfig.addPlugin(
        require("@aaashur/eleventy-toolkit"),
        toolkitOptions,
    );
};
```

> See [filters](https://github.com/ashur/eleventy-toolkit/blob/main/src/filters/README.md) and [shortcode](https://github.com/ashur/eleventy-toolkit/blob/main/src/shortcodes/README.md) documentation for details.
