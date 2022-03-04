const rulesHtml = {
  test: /\.html$/i,
  use: [
    {
      loader: "html-loader",
      options: {
        minimize: true,
      },
    },
  ],
}

module.exports = rulesHtml
