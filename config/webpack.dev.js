const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000,
    compress: false,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "../public"),
    },
    proxy:{
      "/api": {
        target: "http://127.0.0.1:4523/m1/3607482-0-default",
        changeOrigin:true,
        pathRewrite: {
          '^/api': '',
        }
      }
    }
  }
})
