# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.2] - 2024-01-13
- Switch to `@aaashur/eleventy-plugin-create-element`
- Switch to `@aaashur/eleventy-plugin-styles`
- Switch to `@aaashur/eleventy-plugin-classnames`

## [0.3.1] - 2023-11-05
- Update to `clean-css@5.3.2` (fixes support for container query syntax)

## [0.3.0] - 2023-02-19
### Added
- Automatic `styles` support to `createElement`
- Support for defining CleanCSS options

### Changed
- `createElement` creates self-closing tags for empty elements automatically instead of relying on the `selfClosing` parameter

## [0.2.0] - 2022-10-02
### Added
- `createElement` paired shortcode

### Fixed
- `styles` includes property whose value is `0`

## [0.1.0] - 2022-09-18
### Added
- `slice` filter
- `classnames` shortcode
- `styles` shortcode
- `includeGlob` shortcode
- `cssmin` filter
