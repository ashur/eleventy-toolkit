# Shortcodes

- [classnames](#classnames)
- [createElement](#createElement)
- [includeGlob](#includeGlob)
- [styles](#styles)

## classnames

> ↗️ See [`eleventy-plugin-classnames`](https://github.com/ashur/eleventy-plugin-classnames/#usage) for details

## createElement

> ↗️ See [`eleventy-plugin-create-element`](https://github.com/ashur/eleventy-plugin-create-element/#usage) for details

## includeGlob

Use a glob pattern to include all matching files.

> Inspired by the `include-all` suggestion in [Super Simple CSS Concatenation](https://www.11ty.dev/docs/quicktips/concatenate/)

### Configuration

`includeGlob` requires a configuration property `includesDir`, which should match the `includes` folder used by Eleventy:

```javascript
module.exports = (eleventyConfig) => {
    const toolkitOptions = {
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

### Usage

```njk
<style>
    {% includeGlob "**/*.css" %}
</style>
```

might return

```html
<style>
    .blue {
        color: blue;
    }

    .green {
        color: green;
    }

    .red {
        color: red;
    }
</style>
```

## styles

> ↗️ See [`eleventy-plugin-styles`](https://github.com/ashur/eleventy-plugin-styles/#usage) for details
