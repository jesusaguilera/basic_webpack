const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const rulesSass  =  {
  test: /\.scss/i,
  use: [
    {
      loader: MiniCSSExtractPlugin.loader,
      options: {
        publicPath: "./",
      },
    },
    "css-loader",
    "sass-loader",
  ],
}

module.exports = rulesSass
