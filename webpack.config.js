const {resolve} = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.default = {
    entry: "./js/index.js",
    output: {
        path: resolve(__dirname, "dist"),
        filename: "main.[contenthash].js"
    },
    devServer: {
        watchFiles: resolve(__dirname, './'),
        port: 9000,
        liveReload: true,
        hot: true
    },
    module: {
        rules: [

            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']

            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })

    ]
}
