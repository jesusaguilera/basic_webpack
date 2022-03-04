const rulesJs = {
  test: /\.jsx?$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
}

module.exports = rulesJs
