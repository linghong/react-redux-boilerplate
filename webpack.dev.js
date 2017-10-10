const merge = require('webpack-merge');
const common = require('./webpack.common.js');


//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const http = require("http");

module.exports = merge(common, {
  devtool: 'inline-source-map',
   devServer: {
   	historyApiFallback: true,
     contentBase: './dist'
   }
 });
 