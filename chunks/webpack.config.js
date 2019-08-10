const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
    entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    contact: path.resolve(__dirname, "src/js/contact.js")
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
              {
                loader:"css-loader",
                options: {
                  importLoaders: 1
                }
              },
              "postcss-loader"
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
        },
        {
          test: /\.less$/,
          use: [
              "style-loader",
              "css-loader",
              "less-loader"
               ]
        },
        {
          test: /\.scss$/,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader"
               ]
        },
        {
          test: /\.styl$/,
          use: [
              "style-loader",
              "css-loader",
              "stylus-loader"
               ]
        }
     ]
   },
   plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new HtmlWebpackPlugin({
         title: "webpack-dev-server",
         template:  path.resolve(__dirname, "index.html")
     })
   ],
   optimization:{
     splitChunks: {
       chunks: "all",
       minSize: 0,
       name: "commons"
     }
   }
}
