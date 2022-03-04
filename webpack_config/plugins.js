const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const pluginsAll = [
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
]

module.exports = pluginsAll
