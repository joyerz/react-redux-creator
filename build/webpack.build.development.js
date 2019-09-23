const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../src/index.js'),
  resolve: {
    extensions: ['.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    library: 'redux-actions-creator',
    libraryTarget: 'commonjs2',
    libraryExport: 'default',
    filename: 'index.development.js',
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
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
