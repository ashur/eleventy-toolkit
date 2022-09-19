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