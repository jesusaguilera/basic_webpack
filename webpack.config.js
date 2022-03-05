const path = require('path')

// Plugins
const pluginsAll = require('./webpack_config/plugins')

// Rules
const rulesAll = require('./webpack_config/rules/')

module.exports = () => {
  return {
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
    plugins: pluginsAll,
  }
};
