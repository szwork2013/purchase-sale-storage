var path = require('path')
var webpack = require('webpack')

var htmlWebpackPlugin = require('html-webpack-plugin')
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH, 'src')
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist')

const port = 8080;

module.exports = {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: port
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style',
                    'css?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
                    'postcss?parser=postcss-scss'
                ],
                include: APP_PATH,
                exclude: path.resolve(APP_PATH, 'styles'),
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style!css!postcss?parser=postcss-scss',
                include: path.resolve(APP_PATH, 'styles'),
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.(gif|jpg|png|ico)$/,
                loader: 'url?limit=20000'
            }
        ]
    },

    postcss: function () {
        return [
            require('precss'),
            require('autoprefixer'),
            require('rucksack-css')
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            title: 'APP',
            template: path.resolve(__dirname, 'src/layouts/index.ejs'),
            favicon: path.resolve(APP_PATH, 'favicon.ico')
        }),
        new openBrowserWebpackPlugin({
            url: 'http://localhost:' + port
        })
    ]
}