var path = require('path');
module.exports={
  entry:{
    app:'./src/index.js'
  },
  output:{
    path:path.resolve(__dirname,'build'),
    filename:'bundle.js',
    publicPath:'/build/'
  },
  resolve:{
    extensions:['.jsx','.js']
  },
  devServer:{
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
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
