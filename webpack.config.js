const base =require('./webpack.config.base')
module.exports = {
    ...base,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './base'
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};

