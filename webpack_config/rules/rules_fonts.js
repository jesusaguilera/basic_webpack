const rulesFonts = {
  test: /\.(ttf|otf|woff)$/i,
  use: {
    loader: "file-loader",
    options: {
      publicPath: "../fonts", // publicPath relative to scss
      outputPath: "./fonts",
    },
  },
}

module.exports = rulesFonts
