const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TersetJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
    app: path.resolve(__dirname, "src/main.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[hash].js",
       // publicPath: "http://localhost:3001",
        chunkFilename: "js/[id].[chunkhash].js"
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    optimization: {
      minimizer: [
        new TersetJSPlugin(),
        new OptimizeCSSAssetsPlugin()
      ]
    },
    module: {
        noParse: /jquery|lodash/,
        rules: [
        {
            test: /\.vue$/,
            use: 'vue-loader',
        },
        {
                test: /\.js$/,
                use: [
                  "babel-loader"
                     ],
                     exclude: /node_modules/,
        },
        {
          test: /\.css|postcss$/,
          use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              {
                loader: "css-loader",
                options:{
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
              limit: 1000,
              name: "[hash].[ext]",
              outputPath: "assets"
            }
          }
               ],
          exclude: /node_modules/,
        }
      ]
   },
   plugins: [
     new VueLoaderPlugin(),
     new MiniCssExtractPlugin({
       filename: "css/[name].[hash].css",
       chunkFilename: "css/[id].[hash].css"
     }),
     new HtmlWebpackPlugin({
         template:  path.resolve(__dirname, "public/index.html")
     }),
     new webpack.DllReferencePlugin({
       manifest: require("./modules-manifest.json")
     }),
     new AddAssetHtmlWebpackPlugin({
       filepath:  path.resolve(__dirname, "dist/js/*.dll.js"),
       outputPath: "js",
       publicPath: "js"
     }),
     new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    })
   ]
}
