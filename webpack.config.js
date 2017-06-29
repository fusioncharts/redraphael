const path = require('path')
const webpack = require('webpack')
// const BundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = {
  entry: ['./source/raphael.js'],
  output: {
    path: path.join(__dirname, '/package'),
    filename: 'raphael.js',
    library: 'RedRaphael',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  // resolve: {
  //   extensions: ['.js']
  // },
  devtool: 'source-map',
  plugins: [

    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      mangleProperties: {
        screw_ie8: false,
        ignore_quoted: true
      },
      compress: {
        screw_ie8: false,
        properties: false
      },
      output: {
        screw_ie8: false
      }
    }),

    // new BundleAnalyzer.BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   reportFilename: '../../webpack-analyser/index.html',
    //   statsFilename: './webpack-analyser/data/stats.json',
    //   defaultSizes: 'stat'
    // })

  ],
  profile: true,
  devServer: {
    contentBase: './samples',
    watchContentBase: true,
    disableHostCheck: true
  }
}
