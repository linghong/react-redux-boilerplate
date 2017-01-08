const path=require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
	entry: './src/index.js',
	output: {
		//must specify an absolouate path, __dirname references to current directory
		//save the name as "build"
		'path': path.resolve(__dirname, 'build'),
		'filename': 'bundle.js'
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
		new ExtractTextPlugin('style.css')
	]
};
