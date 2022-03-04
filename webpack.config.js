const path = require('path')

// Plugins
const pluginsAll = require('./webpack_config/plugins')

// Rules
const rulesAll = require('./webpack_config/rules/')

// Optimization
const optimizationAll = require('./webpack_config/optimization')

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
  optimization: optimizationAll,
  plugins: pluginsAll,
};
