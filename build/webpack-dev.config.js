const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const PATH = require('./config').PATH
var baseConfig = require('./webpack-base.config.js')

module.exports = merge(baseConfig, {
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      path.join(PATH.srcPath, '/index')
    ],
    vendor: ['react', 'react-dom', 'react-router']
  },
  devtool: 'source-map',
  module: {
    rules: [{
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!stylus-loader'
      },
      {
        test: /\.js[x]?$/,
        include: /src/,
        enforce: "pre",
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Appliction',
      template: path.join(PATH.srcPath, '/index.template.html'),
      inject: true
    }),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'mainifest'],
    }),
  ]
})