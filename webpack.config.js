var path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js'
  },
  module: {
      rules: [
          {
            test: /\.ts$/,
            use: [
                'awesome-typescript-loader'
            ],
            exclude: /node_modules/
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                  'file-loader'
              ]
          },
          {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
          }
      ]
  }
};