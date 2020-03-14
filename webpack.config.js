var path = require('path');
var webpack = require('webpack');

const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
    entry: [/*"core-js",*/"./view/src/index.js"],
    output: {
        path: path.join(__dirname, "/view"),
        filename: "./bundle.js"
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [
                   /* {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },*/
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                options: {
                    publicPath: './',
                }
            }
        ]
    },
    plugins: [
        
        new CompressionPlugin({
            compressionOptions: { level: 1 },
        })
    ]
};
