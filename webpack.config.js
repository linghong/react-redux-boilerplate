const webpack=require('webpack');
const path=require('path');

module.exports={
	entry: './src/index.js',
	output: {
		//must specify an absolouate path, __dirname references to current directory
		//save the name as "build"
		"path": path.resolve(__dirname, 'build'),
		"filename": 'bundle.js'
	},
	module:{
		rules:[
			{
				use: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
		
	}
}
