const rulesHtml = {
  test: /\.html$/i,
  use: [
    {
      loader: "html-loader",
      // IT'S MINIMIZED IN PRODUCTION MODE BY DEFAULT
      // options: {
      //   minimize: true,
      // },
    },
  ],
}

module.exports = rulesHtml
