const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
    entry: {
    home: path.resolve(__dirname, "src/js/index.js")
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
    },
    devServer: {
        hot: true,
        open: true,
        port: 9000,
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
            loader:"url-loader",
            options: {
              limit: 90000
            }
          }
               ],
          exclude: /node_modules/,
        }
     ]
   },
   plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new HtmlWebpackPlugin({
         title: "webpack-dev-server",
         template:  path.resolve(__dirname, "index.html")
     })
   ]
}
