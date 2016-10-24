const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            {test: /\.css$/,loader: 'style!css'},
            {test: /\.vue$/,loader:'vue'},
            {test: /\.less$/,loader: "style!css!less"},
            {test: /\.js$/,loader: 'babel?presets=es2015',exclude: /node_modules/},
            /*图片转成base64后不怎么起作用*/
            /*{test: /\.(jpg|png)$/, loader: "url?limit=8192"},*/
            {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,loader: 'file'}
        ]
    },
    watch:true,
    plugins:[
        new HtmlWebpackPlugin({     //根据模板插入css/js等生成最终HTML
            title:"ZhangKui Webpack App",
            filename:"index.html",
            template:"./src/index.html"
        }),
        new webpack.optimize.UglifyJsPlugin({    //压缩代码
               compress: {
               warnings: false
             },
             except: ['$super', '$', 'exports', 'require']    //排除关键字
        })
    ]
}