var ET = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./app/entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ET.extract('css-loader?sourceMap')
      },
      {
        test: /\.styl$/,
        loader: ET.extract('css-loader?sourceMap!stylus-loader')
      },
      {
        test: /\.scss$/,
        loader: ET.extract('css-loader?sourceMap!sass-loader')
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ET('css/styles.css', {
      allChunks: true
    })
  ]
};
