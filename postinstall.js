const path = require("path");
const download = require("download");
const { Octokit } = require("@octokit/rest");

fetchLatestTwemoji()
  .catch((error) => {
    console.error(`😭 I couldn't download my fellow emojis: ${error.message}`);
    throw error;
  });

async function fetchLatestTwemoji() {
  // figure out the latest release on GitHub:
  // https://github.com/twitter/twemoji/releases/latest
  const { data } = await new Octokit().repos.getLatestRelease({
    owner: "twitter",
    repo: "twemoji",
  });

  // the .zip file from the GitHub API response
  const sourceUrl = data.zipball_url;
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
