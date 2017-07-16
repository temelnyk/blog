const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");


module.exports = (env) => {
    const isProd = env && env.PROD;
    if (isProd) {
        console.log('=== PRODUCTION MODE ===');
    }

    const outputPath = path.resolve(__dirname, '..', 'server');


    const extractScssPlugin = new ExtractTextPlugin({
        filename: "css/[name].css" // relative to `outputPath`
    });

    const cssLoaderOpts = isProd ? { minimize: true } : { sourceMap: true };
    const sassLoaderOpts = isProd ? {} : { sourceMap: true };
    const scssModuleRule = {
        test: /\.scss/,
        use: extractScssPlugin.extract({
            use: [
                { loader: 'css-loader', options: cssLoaderOpts },
                { loader: 'sass-loader', options: sassLoaderOpts }
            ],
            fallback: 'style-loader'
        })
    };



    const cleanWebpackPlugin = new CleanWebpackPlugin(['css', 'js'], {
        root: outputPath
    });

    const plugins = [
        cleanWebpackPlugin,
        extractScssPlugin
    ];

    if (isProd) {
        plugins.unshift(new BabiliPlugin({}));
    }


    const devTool = isProd ? {} : { devtool: 'source-map' };


    const CONFIG_BASE = {
        entry: {
            script: './js/index.js',
            style: './scss/index.scss'
        },
        output: {
            path: outputPath,
            filename: 'js/[name].js'
        },
        module: {
            rules: [
                scssModuleRule
            ]
        },
        watchOptions: {
            ignored: /node_modules/,
            poll: 1000
        }
    };

    return Object.assign(CONFIG_BASE, devTool, { plugins });
};
