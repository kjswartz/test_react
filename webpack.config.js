var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  context: __dirname + "/src",

  entry: {
    src: [
      "./js/app.js",
    ],

    vendors: [
      "react",
      "react-bootstrap",
      "react-dom",
      "react-router",
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
  },

  resolve: {
    root: __dirname + "src/",
    extensions: ['', '.js']
  },

  resolveLoader: {
    root: node_modules_dir
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader?presets[]=react&presets[]=es2015"]
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendors",
      filename: "vendors.js",
      minChunks: 2,
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Test',
      template: 'index.ejs',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  // Development
  devServer: {
    contentBase: "./src",
  }
};
