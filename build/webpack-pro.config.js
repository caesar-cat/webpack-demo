const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const PATH = require('./config').PATH;
var baseConfig = require('./webpack-base.config')

module.exports = merge(baseConfig, {
  entry: {
    app: [path.join(PATH.srcPath, '/index.jsx')],
    vendor: ['react', 'react-dom', 'react-router']
  },
  module: {
    rules: [{
      test: /\.styl$/,
      use: ExtractTextPlugin.extract({
        fallback: {
          loader: 'style-loader',
          options: {
            sourceMap: true
          }
        },
        use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[hash:base64:5]',
              minimize: true
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
          'stylus-loader'
        ]
      })
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {root: PATH.basePath}),
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      compress: {
        warnings: false
      },
    }),
    new HtmlWebpackPlugin({
      title: 'React Appliction',
      template: path.join(PATH.srcPath, '/index.template.html'),
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
      }
    }),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: 'style[hash].css',
      allChunks: true
    })
  ]
});