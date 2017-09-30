var path = require('path');

module.exports = {
  entry: './js/entry.js',
  output: {
    filename: './js/bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};

// run "webpack" to bundle it together 
