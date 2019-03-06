var fs = require("fs");
var path = require("path");

module.exports = {
  hooks: {
    finish: function() {
      const icoPathFile = "node_modules/gitbook-plugin-cuav-doc-favicon/assets/images/favicon.ico";
      const favicon = path.join(process.cwd(), icoPathFile);
      const gitbookFaviconPath = path.join(process.cwd(), "_book", "gitbook", "images", "favicon.ico");
      if (fs.existsSync(icoPathFile) && fs.existsSync(gitbookFaviconPath)) {
        fs.unlinkSync(gitbookFaviconPath);
        fs.createReadStream(favicon).pipe(fs.createWriteStream(gitbookFaviconPath));
      }

      const appleTouchIcon152PathFile =
        "node_modules/gitbook-plugin-cuav-doc-favicon/assets//images/apple-touch-icon-152.png";
      const appleTouchIcon152 = path.join(process.cwd(), appleTouchIcon152PathFile);
      const gitbookAppleTouchPath = path.join(
        process.cwd(),
        "_book",
        "gitbook",
        "images",
        "apple-touch-icon-precomposed-152.png"
      );
      if (fs.existsSync(appleTouchIcon152PathFile) && fs.existsSync(gitbookAppleTouchPath)) {
        fs.unlinkSync(gitbookAppleTouchPath);
        fs.createReadStream(appleTouchIcon152).pipe(fs.createWriteStream(gitbookAppleTouchPath));
      }
    }
  }
};
