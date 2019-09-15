const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const serverConfig = {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.css?$/,
      use: [
        'isomorphic-style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true, // 开启模块化
          }
        },
        'postcss-loader'
      ]
    }, {
      test: /\.less?$/,
      use: [
        'isomorphic-style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: true, // 开启模块化
          }
        },
        'less-loader',
        'postcss-loader'
      ]
    }]
  }
}

module.exports = merge(baseConfig, serverConfig);
