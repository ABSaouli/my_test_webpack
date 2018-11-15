const path = require("path");
//const distDir = path.join(__dirname, "dist");

const config = {
  //mode: "development",
  entry: "./assets/js/app.js",
  watch: true,
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js"
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      }
    ]
  }
};

module.exports = config;
