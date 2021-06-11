const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  optimization: {
    minimize: false
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'this',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  }
  // devtool: 'eval-cheap-source-map	'
};