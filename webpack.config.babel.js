import path from 'path'

import config from './config/config.json'
import htmlWebpackPlugin from 'html-webpack-plugin'
import openBrowserWebpackPlugin from 'open-browser-webpack-plugin'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import rucksackCss from 'rucksack-css'

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist')
const port = config.port

module.exports = {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    entry: [
        `webpack-dev-server/client?http://0.0.0.0:${port}`,
        'webpack/hot/only-dev-server',
        path.resolve(APP_PATH, 'index.js')
    ],
    output: {
        path: BUILD_PATH,
        publicPath: "/",
        filename: 'bundle.js'
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: port,
        // proxy:{
        //     '/api/*':{
        //         target:`http://localhost:${port}`,
        //         secure: false
        //     }
        // }
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            containers: path.resolve(APP_PATH, './containers'),
            components: path.resolve(APP_PATH, './components'),
            js: path.resolve(APP_PATH, './public/js')
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'APP',
            template: path.resolve(APP_PATH, 'public/index.ejs'),
            favicon: path.resolve(APP_PATH, 'public/favicon.ico'),
            hash: true
        }),
        new openBrowserWebpackPlugin({
            url: `http://localhost:${port}`
        })
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)$/,
            loaders: [
                'style',
                'css?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
                'postcss?parser=postcss-scss'
            ],
            include: APP_PATH,
            exclude: path.resolve(APP_PATH, 'public'),
        }, {
            test: /\.(css|scss)$/,
            loader: 'style!css!postcss?parser=postcss-scss',
            include: path.resolve(APP_PATH, 'public'),
        }, {
            test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
            loader: 'url?limit=10000'
        }, {
            test: /\.(gif|jpg|png|ico)$/,
            loader: 'url?limit=20000'
        }]
    },
    postcss: () => [precss, autoprefixer, rucksackCss]
}