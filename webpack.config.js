var webpack = require('webpack');

var vue = require("vue-loader");

//混淆压缩
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//检测重用模块
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

//独立样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var plugins = [
  //会将所有的样式文件打包成一个单独的style.css
  new ExtractTextPlugin("style.css", {disable: false}),
  //new ExtractTextPlugin("[name].css" )
  //自动分析重用的模块并且打包成单独的文件
  //new CommonsChunkPlugin('vendor.js')
];
 // 在命令行 输入  PRODUCTION=1 webpack 会打包压缩
if (process.env.PRODUCTION) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false } }));
}


module.exports = {
    entry: ["./src/app.js"],
    output: {
        path: "./build",
        publicPath: "/build/",
        filename: "build.js"
    },
    module: {
        preLoaders:[
            // {
            //     //代码检查
            //     test:/\.js$/,exclude:/node_modules/,loader:'jshint-loader'
            // }
        ],
        loaders: [
            {test: /\.vue$/, loader: vue.withLoaders({
              css: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!cssnext-loader")
            }) }, // 加载vue组件
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!cssnext-loader")},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
            {test: /\.woff$/,   loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.ttf$/,    loader: "file"},
            {test: /\.eot$/,    loader: "file"},
            {test: /\.svg$/,    loader: "file"}
       ]
    },
    plugins : plugins,
    devtool: 'source-map'//,
    // resolve: {
    //     // 现在可以写 require('file') 代替 require('file.coffee')
    //     extensions: ['', '.js', '.json', '.coffee','vue']
    // }
};
