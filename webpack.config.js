// START_HIGHLIGHT
const HtmlWebpackPlugin = require('html-webpack-plugin');
// END_HIGHLIGHT
module.exports = {
  mode: 'development',
  entry: {
    carousel: './src/Carousel.js',
    example: './example/index.js',
  },
  // START_HIGHLIGHT
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Carousel Example', //<callout id="co.page-title" />
      chunks: ['example'], //<callout id="co.page-chunks" />
    }),
  ],
  // END_HIGHLIGHT
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'), },
    ],
  },
};
