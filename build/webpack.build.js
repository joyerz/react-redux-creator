const path = require('path')
const webpack = require('webpack')
const TerserJSPlugin = require('terser-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: false,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 删除console
          },
        },
      }),
    ],
  },

  entry: path.resolve(__dirname, '../src/index.js'),
  resolve: {
    extensions: ['.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    library: 'redux-actions-creator',
    libraryTarget: 'commonjs2',
    libraryExport: 'default',
    filename: 'index.js',
    crossOriginLoading: 'anonymous',
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ],

  },

  plugins: [
    new cleanWebpackPlugin(),
    //
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

  externals: {
    'Immutable': 'seamless-immutable',
    'redux-actions': 'redux-actions',
    'redux': 'redux',
    'redux-saga': 'redux-saga',
  }
}
