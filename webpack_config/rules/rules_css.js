const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const rulesCSS = {
  test: /\.css/i,
  use: [
    {
      loader: MiniCSSExtractPlugin.loader,
      options: {
        publicPath: "./",
      },
    },
    "css-loader",
  ],
}

module.exports = rulesCSS
