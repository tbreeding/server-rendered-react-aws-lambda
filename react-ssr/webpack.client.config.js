const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    browser: path.join(__dirname, 'src/client.tsx'),
  },
  output: {
    path: path.join(__dirname, 'build/public/static'),
    filename: "bundle.js"
  },
  target: 'web',
  mode: 'production',
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  // Source maps support ('inline-source-map' also works)
  devtool: false,

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  // Todo include .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(jsx|js)$/i,
        exclude: /node_modules/, // we shouldn't need processing `node_modules`
        use: [
          {
            loader: 'babel-loader',
            options: {
              // Don't use .babelrc here but web browser optimized settings
              presets: [
                [ '@babel/preset-env', {
                  targets: { browsers: [ 'last 2 versions' ] },
                  debug: 'production',
                } ],
                "@babel/preset-react"
              ]
            }
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.join(__dirname, 'build/public/static'),
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(eot|woff|jpeg|png | svg|ttf|woff2|gif|appcache)(\?|$)/,
        exclude: /^node_modules$/,
			  use: [
			   {
					 loader: "file-loader",
					 options: {
					   name: '[name].[ext]'
				   }
				 }
			  ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  }
};
