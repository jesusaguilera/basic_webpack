const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      // ES6
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // Html
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      // CSS
      {
        test: /\.css/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
      // SASS
      {
        test: /\.scss/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // IMAGES
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "/images",
          },
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCSSExtractPlugin({
      filename: "./css/main.css",
    }),
  ],
};
