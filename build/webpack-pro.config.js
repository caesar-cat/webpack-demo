const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinExtractTextPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const PATH = require('./config').PATH;
var baseConfig = require('./webpack-base.config')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    app: [path.join(PATH.srcPath, '/index.js')]
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [
         MinExtractTextPlugin.loader,
        {
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
        'less-loader'
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: PATH.basePath
    }),
    new HtmlWebpackPlugin({
      title: 'React Appliction',
      template: path.join(PATH.srcPath, '/index.template.html'),
      inject: true
    }),
    new webpack.NamedModulesPlugin(),
    new MinExtractTextPlugin({
      filename: 'style.[hash].css',
      chunkFilename: 'style.[contenthash:12].css'
    })
  ]
});