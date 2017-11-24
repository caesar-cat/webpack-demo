const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('@ersinfotech/merge');
const Manifest = require('../dist/manifest.json');
const PATH = require('./config').PATH;
var baseConfig = require('./webpack-base.config')

  module.exports = merge(baseConfig, {
    entry: {
      app: [path.join(PATH.srcPath, '/index.jsx')]
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader?modules&localIdentName=[hash:base64:5]', 'stylus-loader']
          })
        }
      ]
    },
    plugins: [
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
        vendorName: Manifest.name + '.js',
        // minify: {
        //   html5: true,
        //     collapseWhitespace: true,
        //     removeComments: true,
        //     removeTagWhitespace: true,
        //     removeEmptyAttributes: true,
        //     removeStyleLinkTypeAttributes: true,
        //   }
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: Manifest
        }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({filename: 'style[hash].css', allChunks: true})
    ]
  });