const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../public')
  },
  module: {
    rules: [{
      test: /\.css?$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true, // 开启模块化
          }
        },
        // 'less-loader',
        // 'postcss-loader'    // 增加webkit前缀
      ]
    }]
  }
}
module.exports = merge(baseConfig, clientConfig);