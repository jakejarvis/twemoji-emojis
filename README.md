# 📦 twemoji-assets

A _very_ simple NPM package that downloads [Twemoji](https://twemoji.twitter.com/) emojis (PNG and SVG) on installation. Version numbers align with [Twemoji releases](https://github.com/twitter/twemoji/releases).

Graphics will be located relative to your project root in:

- `node_modules/twemoji-assets/vendor/72x72` for 72px PNGs.
- `node_modules/twemoji-assets/vendor/svg` for vector SVGs.

Other assets such as the JS files still need to be added to your project separately via the [official `twemoji` package](https://www.npmjs.com/package/twemoji) if you require them.

**Note:** This exists mainly for [my own convenience](https://github.com/jakejarvis/jarv.is), which is why it's not published on NPM yet — but feel free to either fork or install directly from GitHub (not recommended):

```sh
npm install jakejarvis/twemoji-assets#main
# ...or:
yarn add jakejarvis/twemoji-assets#main
```

## License

Graphics are fetched directly from [twitter/twemoji](https://github.com/twitter/twemoji/) and are licensed under [CC-BY 4.0](https://github.com/twitter/twemoji/blob/master/LICENSE-GRAPHICS).
