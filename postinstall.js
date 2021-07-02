const path = require("path");
const download = require("download");
const { version } = require("./package.json");

getTwemoji()
  .catch((error) => {
    console.error(`😭 I couldn't download my fellow emojis: ${error.message}`);
    throw error;
  });

async function getTwemoji() {
  return await download(
    // https://github.com/twitter/twemoji/releases
    `https://github.com/twitter/twemoji/archive/v${version}.zip`,

    // save to ./vendor/{72x72,svg}/...
    path.join(__dirname, "vendor"),

    {
      // https://github.com/kevva/download#extract
      extract: true,

      // https://github.com/kevva/decompress#decompressinput-output-options
      strip: 2,
      filter: file => path.basename(path.dirname(file.path)) === "72x72" || path.basename(path.dirname(file.path)) === "svg",
    },
  );
}
