const path = require('path');

module.exports = {
  context: __dirname + '/app',
  entry: './entry',
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  // ここから追加
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    host: "0.0.0.0",
    hot: true,
  },
  // ここまで

  resolve: {
    fallback: {
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify')
    }
  }
}