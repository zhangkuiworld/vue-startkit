const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

var isProduction = function () {
    return process.env.NODE_ENV === 'production';
}

var plugins = [
    new HtmlWebpackPlugin({     //根据模板插入css/js等生成最终HTML
        title:"Webpack+Vue+Vue-Resource App",
        filename:"index.html",
        template:"./src/index.html"
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.ProvidePlugin({
        $ : 'jquery',
        jQuery : 'jquery',
        'window.jQuery' : 'jquery',
        'root.jQuery' : 'jquery',
    })
];

if(isProduction()){
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({    //压缩代码
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']
        })
    );
};

module.exports = {
    entry: {
        'index':'./src/index.js',
        'other':'./src/other.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[hash].js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        },
        extensions: ['', '.js', '.vue']
    },
    devtool: isProduction()?null:'source-map',
    module: {
        loaders: [
            {test: /\.css$/,loader: 'style!css'},
            {test: /\.vue$/,loader:'vue'},
            {test: /\.less$/,loader: "style!css!less"},
            {test: /\.js$/,loader: 'babel',exclude: /node_modules/},
            {test: /\.json$/,loader: 'json'},
            /*图片转成base64后不怎么起作用*/
            /*{test: /\.(jpg|png)$/, loader: "url?limit=1024"},*/
            {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,loader: 'file'}
        ]
    },
    watch:true,
    plugins:plugins
}