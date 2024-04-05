const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      https: require.resolve('https-browserify')
    }
  },
  // Other webpack configuration options...
  stats: {
    children: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
