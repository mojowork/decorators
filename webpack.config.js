
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    mode: 'none',
    entry: {
        'decorators': './src/index.js',
        'decorators.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'decorators',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min.js$/,
            }),
        ]
    }
}