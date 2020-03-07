var path = require('path');
var webpack = require('webpack')
module.exports = {
  mode: 'development',
  output: {
    
    // for development
    publicPathForDevServer: '/dev/',
    
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
              plugins: [
                ["@babel/plugin-proposal-decorators", {
                  "legacy": true
                }],
              ],
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
