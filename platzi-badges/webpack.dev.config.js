const path = require("path"),
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
    app: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
        publicPath: "http://localhost:9000",
        chunkFilename: "js/[id].[chunkhash].js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        open: true,
        port: 9000,
        hot: true
    },
    module: {
        noParse: /jquery|lodash/,
        rules: [
        {
                test: /\.js$/,
                use: [
                  "babel-loader"
                     ],
                     exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
                  "style-loader",
                  "css-loader"
               ]
        },
        {
          test: /\.jpg|png|gif|svg|mp4|webm|woff|eot|ttf$/,
          use: [{
            loader:"file-loader",
            options: {
              outputPath: "assets/"
            }
          }
               ],
          exclude: /node_modules/,
        },
        
     ]
   },
   plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new HtmlWebpackPlugin({
         template:  path.resolve(__dirname, "public/index.html")
     }),
   ]
}
