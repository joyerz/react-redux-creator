const path = require('path')
const webpack = require('webpack')
const WebpackHTMLPlugin = require('html-webpack-plugin')

console.log('process.env', process.env.HOME)
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../examples/index.jsx'),
  resolve:  {
    extensions: ['.js', '.jsx', '.scss', '.less', '.json']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    crossOriginLoading: 'anonymous'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    //
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),


    /*压缩优化代码结束*/
    new WebpackHTMLPlugin({
      template: path.resolve(__dirname, '../examples/index.html'),
      filename: './index.html',
      inject: true,
    })
  ],
  // stats: 'errors-only',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/api/**': {
        target: 'https://linknow.sodacar.com/openApi/',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      },
    }
  }
}
