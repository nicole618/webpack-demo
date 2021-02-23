const base = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    ...base,
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../ ',
                    },
                }, "css-loader"],
            },
        ],
    },
};

