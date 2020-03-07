var path = require('path');
var webpack = require('webpack')
module.exports = {
  mode: 'production',
  output: {
    // for production
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    
    extraDirPath: {
      'extra': '../extra'
    },
    
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        exclude: /node-modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
  ]
}
