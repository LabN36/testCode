var path = require('path')
var webpack = require('webpack')
var AssetsPlugin = require('assets-webpack-plugin')

var DEBUG = !(process.env.NODE_ENV === 'production')
var env = {
    NODE_ENV: process.env.NODE_ENV,
    API_BASE_URL: process.env.API_BASE_URL
}

var config = {
    devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
    entry: {
        app: './app/app',
        vendor: [
            'react',
            'react-router',
            'redux',
            'react-dom',
            'lodash',
            'bluebird',
            'humps',
            'history'
        ]
    },
    resolve: {
        root: [ path.join(__dirname, 'app') ],
        extensions: ['', '.js', '.jsx', '.json']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env)
        })
    ],
    module: {
        // preLoaders: [
        //   { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' }
        // ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                },
                include: __dirname

            },
            { test: /\.css/,
                loader: 'css' },
                {
                    test: /\.(eot|woff|woff2|ttf|svg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url-loader?limit=100000'
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    loader: 'file?name=[path][name].[ext]'
                },
                { test: /\.mp4$/,
                    loader: 'url?limit=10000&mimetype=video/mp4'
                },
                { test: /\.scss$/,
                    loaders: ["style", "css", "autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true"]
                },
            ]
        },
    }

    if (DEBUG) {
        config.entry.dev = [
            'webpack-dev-server/client?http://localhost:3001',
            'webpack/hot/only-dev-server'
        ]

        config.plugins = config.plugins.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filname: 'vendor.js'
            })
        ])
        config.output.publicPath = 'http://localhost:3001/static/'
        config.module.loaders[0].query = {
            'env': {
                'development': {
                    'presets': ['react-hmre']
                }
            }
        }
    } else {
        config.plugins = config.plugins.concat([
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filname: '[name].[chunkhash].js'
            }),
            new webpack.optimize.UglifyJsPlugin()
        ])
    }

    module.exports = config
