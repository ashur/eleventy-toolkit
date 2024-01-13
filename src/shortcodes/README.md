# Shortcodes

- [classnames](#classnames)
- [createElement](#createElement)
- [includeGlob](#includeGlob)
- [styles](#styles)

## classnames

Join truthy, non-duplicate argument values into a space-delimited string.

> Inspired by the [classnames](https://www.npmjs.com/package/classnames) package by [JedWatson](https://github.com/JedWatson/classnames)

### Usage

```njk
{% set color = "turquoise" %}
{% set sectionTitle = "Section Title" %}

<h2 class="{% classnames
    "block__element",
    "block__element--primary" if primary,
    "block__element--" + color if color
%}">{{ sectionTitle }}</h2>
```

would return

```html
<h2 class="block__element block__element--turquoise">
    Section Title
</h2>
```

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
