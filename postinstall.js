const path = require("path");
const download = require("download");

fetchLatestTwemoji()
  .catch((error) => {
    console.error(`😭 I couldn't download my fellow emojis: ${error.message}`);
    throw error;
  });

async function fetchLatestTwemoji() {
  // fetch latest assets from source:
  // https://github.com/twitter/twemoji/tree/master
  const sourceUrl = "https://github.com/twitter/twemoji/archive/refs/heads/master.zip";

  // save extracted graphics to ./vendor/{svg,72x72}/...
  const destPath = path.join(__dirname, "vendor");

  return await download(sourceUrl, destPath, {
    // https://github.com/kevva/download#extract
    extract: true,

    // https://github.com/kevva/decompress#decompressinput-output-options
    strip: 2,
    filter: (file) => 
      path.basename(path.dirname(file.path)) === "svg" || 
      path.basename(path.dirname(file.path)) === "72x72",
  });
}
