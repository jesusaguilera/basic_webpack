const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const optimization = {
  minimize: true,
  minimizer: [new CssMinimizerPlugin()],
}

module.exports = optimization
