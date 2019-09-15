module.exports = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_module/,
      options: {
        presets: [
          ["@babel/preset-env", {
            targets: {
              browsers: ['last 2 versions']
            }
          }],
          "@babel/preset-react",
        ]
      }
    },]
  },
}