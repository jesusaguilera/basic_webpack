const path = require('path')

// Plugins
const pluginsAll = require('./webpack_config/plugins')

// Rules
const rulesAll = require('./webpack_config/rules/')

module.exports = (env, argv) => {

  const {mode} = argv

  const isProduction  = mode === 'production'

  return {
    entry: {
      main_js: "./src/index.js",
      main_react: "./src/index_react.js",
      main_ts: "./src/index_ts.js"
    },
    output: {
      filename: isProduction
        ? "[name].[contenthash].js"  // (cacheado) cambia el nombre del archivo si cambia contenido
        : "[name].js",
      path: path.resolve(__dirname, 'build')
    },
    plugins: pluginsAll,
    module: { rules: rulesAll },
  }

};
