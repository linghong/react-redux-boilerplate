const webpack = require('webpack');
const path=require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
module.exports={
	entry: {
		bundle: './src/index.js',
		vendor: ['react', 'react-dom']
	},
	output: {
		//must specify an absolouate path, __dirname references to current directory
		//save the name as "build"
		'path': path.resolve(__dirname, 'build'),
		'filename': '[name].js'
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
					fallbackLoader: 'style-loader',
					loader: 'css-loader'
				})				
			}			
		]		
	},

	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};
