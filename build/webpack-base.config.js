var webpack = require('webpack')
var path = require('path')
const PATH = require('./config').PATH;
const isProduction = require('./config').isProduction()

module.exports = {
    output: {
        filename: '[name].bundle_[hash:7].js',
        chunkFilename: '[name].bundle_[hash:7].js',
        path: PATH.buildPath,
        publicPath: '/'
    },

    optimization: {
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendor: {
                    test: /node_modules\//,
                    name: 'vendor',
                    chunks: "all",
                    priority: -20
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },

    resolve: {
    	extensions: ['.js', '.jsx']
  	},

    module: {
      rules: [
          {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, //匹配图片或字体格式的文件
            //[path]是以publicPath为准
            use: [
                {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    }
                }
            ]
          },
          { 
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
         }
      ]
    }
}