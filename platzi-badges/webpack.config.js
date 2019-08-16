const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
    entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    contact: path.resolve(__dirname, "src/js/contact.js")
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
        publicPath: "dist/",
        chunkFilename: "js/[id].[chunkhash].js"
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
              {
                loader: MiniCssExtractPlugin.loader
              },
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
            {
              loader: MiniCssExtractPlugin.loader
            },
              "css-loader",
              "less-loader"
               ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
              "css-loader",
              "sass-loader"
               ]
        },
        {
          test: /\.styl$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
              "css-loader",
              "stylus-loader"
               ]
        }
     ]
   },
   plugins: [
     new MiniCssExtractPlugin({
       filename: "css/[name].css",
       chunkFilename: "css/[id].css"
     }),
     new HtmlWebpackPlugin({
         title: "webpack-dev-server",
         template:  path.resolve(__dirname, "index.html")
     }),
     new webpack.DllReferencePlugin({
       manifest: require("./modules-manifest.json")
     })
   ]
}
