const path = require("path");
const webpack = require("webpack");


module.exports={
    mode:"development",
    entry:{
        "one":"./src/1.js",
        "two":"./src/css.js"
    },
    output:{
        path:path.resolve("dist/"),
        filename:"[name].build.js"
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase:path.resolve("static"),
        port:8888,
        hot:true,
        historyApiFallback:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    }
    // src 里面的文件只要添加过文件后都要重新打包

}
