var path = require("path");
var fs = require('fs');
var webpack = require("webpack");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var PATH = require('./config').PATH
var vendors = [
　　'react', 
　　'react-router', 
　　'react-dom'
];

module.exports = {
　　entry: {
　　　　vendor: vendors
　　},
   devtool: 'inline-source-map',
　　output: {
　　　　path: PATH.buildPath,
　　　　filename: "[name]_[hash:7].js",
　　　　library: "[name]_[hash:7]",
       publicPath: '/'
　　},
　　plugins: [
       new CleanWebpackPlugin(['dist'], {root: PATH.basePath}),
　　　　new webpack.DllPlugin({
　　　　　　path: path.join(PATH.buildPath, 'manifest.json'),
　　　　　　name: "[name]_[hash:7]",
           context: __dirname
　　　　})
　　]
}; 