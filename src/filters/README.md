# Filters

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
