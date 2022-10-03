# Filters

- [cssmin](#cssmin)
- [slice](#slice)

## cssmin

Minify CSS in production builds.

### Configuration

By default, `cssmin` will minify CSS if the `NODE_ENV` environment variable equals `"production"`.
To override this behavior, set the `minify` configuration option:

```javascript
module.exports = (eleventyConfig) => {
    const toolkitOptions = {
        filters: {
            cssmin: {
                minify: true,
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
{% set styles %}
.blue {
    color: blue;
}

.yellow {
    color: yellow;
}
{% endset %}

{{ styles | cssmin }}
```

would return

```css
.blue{color:#00f}.yellow{color:#ff0}
```

## slice

Use JavaScript’s `Array.slice()` function from a Nunjucks template.

### Usage

```njk
{{ ["red", "orange", "yellow", "green", "blue"] | slice( 2, 4) }}
```

would return

```
["yellow", "green"]
```
