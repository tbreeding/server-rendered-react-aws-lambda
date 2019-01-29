const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.tsx'),
  target: 'node',
  mode: 'production',
  optimization: {
    // We don't need to minimize our Lambda code.
    minimize: false
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false
  },
  devtool: false,
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
          test: /\.tsx?$/,
          exclude: /node_modules/, // we shouldn't need processing `node_modules`
          loader: 'ts-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // we shouldn't need processing `node_modules`
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: 'null-loader', // No server-side CSS processing
      },
      {
        test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
        use: 'url-loader',
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'build'),
    filename: 'lambda.js'
  },
};
