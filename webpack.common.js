const webpack = require('webpack');
const path=require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 

module.exports={
	entry: {
		bundle: './src/index.js',
		vendor: ['react', 'react-dom', 'react-router','react-redux','redux', 'redux-promise','axios','bootstrap', "jquery"]
	},
	output: {
		//must specify an absolouate path, __dirname references to current directory
		//save the name as "build"
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'		
	},
	module:{
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.css$/,	 		
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})	
			},	{
	            test: /\.(jpe?g|png|gif|svg)$/i,
	            loader: 'file-loader?name=image/[name].[ext]'
	        },{ 
	            test: /\.(woff|woff2)$/, 
	            loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
	        },{ 
	            test: /\.(ttf|eot)$/, 
	            loader: 'file-loader?name=fonts/[name].[ext]' 
	        }]	
	},

	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.ProvidePlugin({
	      jQuery: "jquery",
	      $: "jquery",
	      jquery: "jquery"
	    })
	]
};
