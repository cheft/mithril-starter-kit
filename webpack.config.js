var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      // 'webpack/hot/dev-server',
      path.resolve('./lib/client.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/assets/js'),
    filename: '[name].js',
    publicPath: '/public/assets/js/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'msx-loader'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url?limit=15000'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=application/font-woff2'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=image/svg+xml'
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'app', 'assets']
  }
};
