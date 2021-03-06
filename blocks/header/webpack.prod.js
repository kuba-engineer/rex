const common = require('./webpack.common.js')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = merge.smart(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserJSPlugin({
        terserOptions: {
          keep_fnames: true,
          safari10: true
        }
      })
    ]
  },
  output: {
    filename: 'script.js',
    globalObject: 'self',
    library: 'header',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'public'),
    publicPath: 'https://header.kuba.engineer/',
    umdNamedDefine: true
  },
  plugins: [
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    })
  ]
})
