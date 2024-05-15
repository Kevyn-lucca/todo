const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const locales = ['en', 'fr', 'es', 'pt']; // Adicionado 'pt' para suporte ao português

module.exports = {
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
