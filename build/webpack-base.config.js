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
                      limit: 50000,
                      name: "images/[name].[hash].[ext]"
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
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
              'NODE_ENV':isProduction?JSON.stringify('development'): JSON.stringify('development')
            }
        }),
    ]
}