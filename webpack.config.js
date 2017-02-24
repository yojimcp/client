var path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports={
  entry:{
    app:'./src/index.js'
  },
  output:{
    path:path.resolve(__dirname,'build'),
    filename:'bundle.js'
  },
  resolve:{
    extensions:['.jsx','.js']
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'public'),
    host:'0.0.0.0',
    port:8080,
    inline:true
  },
  module:{
    loaders:[
      {
        test: /(\.js|.jsx)$/,
        exclude: /node_modules/,
        loader:'babel-loader',
        query:{
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals: {
		"jquery": "jQuery"
	},
  plugins:[
    new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			hash: true,
			filename: 'index.html',
			inject: 'body'
		}),
    new CopyWebpackPlugin([
			{from: 'public/css', to: 'css' },
			{from: 'public/images', to: 'images' },
			{from: 'public/js', to: 'js' }
		])
  ]
};
