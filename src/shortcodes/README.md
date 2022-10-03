# Shortcodes

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

Build HTML elements, with support for dynamic tag names and attributes.

> Inspired by `React.createElement()`

### Usage

```njk
{% createElement <tagName>, [<attributes>, [<selfClosing>]] %}
    <!-- <innerHTML> -->
{% endcreateElement %}
```

Attributes with `null` or `undefined` values are omitted:

```njk
{% createElement "article", {
    class: "card",
    href: undefined,
    "data-example": null,
    "aria-hidden": false,
} %}
    <p>Hello, world.</p>
{% endcreateElement %}
```

```html
<article class="card" aria-hidden="false">
    <p>Hello, world.</p>
</article>
```

---

If `attributes` contains a `class` property whose value is an array, [`classnames`](#classnames) will be used automatically to return a space-delimited string containing only truthy, non-duplicate values:

```njk
{% createElement "div", {
    class: [
        "block",
        "block__element",
        "block__element--modifier" if false,
        "block"
    ]
} %}
    <p>Hello, world.</p>
{% endcreateElement %}
```

```html
<div class="block block__element block__element--modifier">
    <p>Hello, world.</p>
</div>
```

---

If `attributes` contains a `style` property whose value is an object, [`styles`](#styles) will be used automatically to return a semicolon-delimited string containing only truthy values:

```njk
{% createElement "div", {
    style: {
        "--custom-property": "10px",
        "--false-property": false,
        "--null-property": null,
        "--undefined-property": undefined,
        "background-color": "red",
    },
} %}
    <p>Hello, world.</p>
{% endcreateElement %}
```

```html
<div style="--custom-property: 10px; background-color: red"></div>
    <p>Hello, world.</p>
</div>
```

---

Build self-closing tags by setting `selfClosing=true`:

```njk
{% createElement "input", {
    type: "button"
}, true %}
    <p>innerHTML is ignored when building self-closing tags</p>
{% endcreateElement %}
```

```html
<input type="button">
```

---

If `tagName` is undefined, `createElement` will return `innerHTML` only:

```njk
{% createElement "a" if link, { href: link } -%}
    <p>Hello, world</p>
{%- endcreateElement %}
```

```html
<p>Hello, world</p>
```

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

Join truthy object values into a semicolon-delimited string.

### Usage

```njk
{% set backgroundColor = "red" %}
{% set customProperty = "10px" %}
{% set sectionTitle = "Section Title" %}

<h2 styles="{% styles {
    "background-color": backgroundColor,
    "--custom-property": customProperty,
    "--undefined-property": "green" if undefinedProperty
} %}">{{ sectionTitle }}</h2>
```

would return

```html
<h2 style="background-color: red; --custom-property: 10px">
    Section Title
</h2>
```
