# 📦 twemoji-emojis

[![npm](https://img.shields.io/npm/v/twemoji-emojis)](https://www.npmjs.com/package/twemoji-emojis)

A _very_ simple NPM package that downloads [Twemoji](https://twemoji.twitter.com/) emojis (PNG and SVG) on installation.

~~Version numbers align with [Twemoji releases](https://github.com/twitter/twemoji/releases).~~ Starting with v14.0.0, this package always downloads the latest Twemojis available.

## Usage

Graphics will be located relative to your project root in:

- `node_modules/twemoji-emojis/vendor/72x72` for 72px PNGs.
- `node_modules/twemoji-emojis/vendor/svg` for vector SVGs.

Other assets such as the JS files still need to be added to your project separately via the [official `twemoji` package](https://www.npmjs.com/package/twemoji) if you require them.

**Note:** This exists mainly for [my own convenience](https://github.com/jakejarvis/jarv.is) and was thrown together in literally two minutes. Improvements welcome!

## License

Graphics are fetched directly from [twitter/twemoji](https://github.com/twitter/twemoji/) and are licensed under [CC-BY 4.0](https://github.com/twitter/twemoji/blob/master/LICENSE-GRAPHICS).
