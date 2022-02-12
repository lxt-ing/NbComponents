const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode:'development',
  devServer:{
    static:'dist'
  },
  entry:'./src/index.js',
  output:{
    filename:'index.js',
    path:path.join(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.m?jsx$/,
        loader:"babel-loader",
        exclude:/node_module/
      },
      {
        test:/\.css$/,
        use:[
          { loader:'style-loader'},
          {loader:'css-loader'}
        ]
      },
      {
        test:/\.less$/,
        use:[
          { loader:'style-loader'},
          {loader:'css-loader'},
          {loader:'less-loader'}
        ]
        
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:'./index.html',
      filename:'index.html'
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
   })
  ]
}