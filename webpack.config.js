const path = require('path')
const webpack = require('webpack')
// const BundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = function (env = {}) {
    var min = env.min === 'true';
    var plugins = [];

    if (min) {
        plugins.push(new webpack.optimize.UglifyJsPlugin({
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
        }));
    }

    return {
        entry: ['./source/raphael.js'],
        output: {
            path: path.join(__dirname, '/package'),
            filename: min ? 'raphael.min.js' : 'raphael.js',
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
        devtool: 'source-map',
        plugins: plugins,
        profile: true,
        devServer: {
            contentBase: './samples',
            watchContentBase: true,
            disableHostCheck: true
        }
    }
}
