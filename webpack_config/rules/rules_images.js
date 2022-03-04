const rulesImages = {
  test: /\.(png|jpe?g|gif|svg|webp)$/i,
  use: [
    {
      loader: "file-loader",
      options: {
        outputPath: "./images",
      },
    },
    "image-webpack-loader",
  ],
}

module.exports = rulesImages
