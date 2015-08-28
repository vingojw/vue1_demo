var webpack = require('webpack');
//混淆压缩
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
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
            {test: /\.vue$/, loader: 'vue' }, // 加载vue组件
            {test: /\.css$/, loader: "style!css" },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
            {test: /\.woff$/,   loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.ttf$/,    loader: "file"},
            {test: /\.eot$/,    loader: "file"},
            {test: /\.svg$/,    loader: "file"}
       ]
    },
    plugins:[
        //开启代码检查
        new uglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
    ],
    devtool: 'source-map',
    resolve: {
        // 现在可以写 require('file') 代替 require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee','vue']
    }
};
