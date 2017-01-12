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
		path: path.resolve(__dirname, 'build'),
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
					fallbackLoader: 'style-loader',
					loader: 'css-loader'
				})	
			},			
			{ 	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
				loader: "file-loader" 
			},
			{
				test:/\.(jpe?g|png|gif|svg|woff|woff2|ttf)$/,
				use:[
					{
						loader: 'url-loader',
						options: {limit: 50000}
					},
					'image-webpack-loader'
				]
			}			
		]		
	},

	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	]
};
