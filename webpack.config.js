let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');

//路径是相对于package.json所在路径
let entry_map = {
    "static": './public/js/common'
};

module.exports = {
    entry: entry_map,
    //devtool: 'source-map',
    output: {
        path: path.resolve(process.cwd(), 'dist/'),
        filename: './[name]/bundle.js',
        //publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)|(global\/lib\/)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
                //loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=51200&context=client&name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};
