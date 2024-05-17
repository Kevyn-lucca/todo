const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const locales = ['pt']; 

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: "todo list",
      filename: "index.html",
      inject: 'body'
    }),
    new webpack.ContextReplacementPlugin(
      /date-fns[/\\]locale$/,
      new RegExp(`(${locales.join('|')})\.mjs$`)
    ),
    
  ],
};
