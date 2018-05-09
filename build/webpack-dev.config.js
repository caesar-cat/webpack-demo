const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const PATH = require('./config').PATH
var baseConfig = require('./webpack-base.config.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      path.join(PATH.srcPath, '/index')
    ]
  },

  module: {
    rules: [{
        test: /\.less$/,
        use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true, 
              modules: true,
              localIdentName: '[hash:base64:5]',
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          'less-loader'
        ]
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
    new webpack.HotModuleReplacementPlugin()
  ]
})