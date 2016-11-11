import path from 'path'
import webpack from 'webpack'

import htmlWebpackPlugin from 'html-webpack-plugin'
import openBrowserWebpackPlugin from 'open-browser-webpack-plugin'

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist')

import config from './config/config.json'

const port = config.port

module.exports = {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    entry: [
        path.resolve(APP_PATH, 'index.js')
    ],
    output: {
        path: BUILD_PATH,
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
        extensions: ['', '.web.js', '.js', '.jsx', '.json']
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
                exclude: path.resolve(APP_PATH, 'public'),
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style!css!postcss?parser=postcss-scss',
                include: path.resolve(APP_PATH, 'public'),
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
            template: path.resolve(APP_PATH, 'public/index.ejs'),
            favicon: path.resolve(APP_PATH, 'public/favicon.ico')
        }),
        new openBrowserWebpackPlugin({
            url: 'http://localhost:' + port
        })
    ]
}