const path = require('path')

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// Rules
const rulesAll = require('./webpack_config/rules/')

module.exports = {
  entry: {
    js: "./src/index.js",
    react: "./src/index_react.js",
    ts: "./src/index_ts.js"
  },
  output: {
    filename: "main_[name].[chunkhash].js",
    path: path.resolve(__dirname, 'build')
  },
  module: { rules: rulesAll },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["js"],
      hash: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index_react.html",
      chunks: ["react"],
      hash: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index_ts.html",
      chunks: ["ts"],
      hash: true
    }),
    new MiniCSSExtractPlugin({
      filename: "./css/main.css",
    }),
  ],
};
