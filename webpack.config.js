
var path = require('path');
var SRC_DIR = path.resolve(__dirname, '/client/src');
var DIST_DIR = path.resolve(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: SRC_DIR,
      use: ['babel-loader']
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }],
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        mimetype: 'image/png',
        limit: 10000
      }
    }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }

}