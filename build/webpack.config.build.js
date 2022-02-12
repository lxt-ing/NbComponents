// 'use strict'
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'production',
    entry: {
      "test":"./packages/message/index.js"
    },
    output: {
      path: path.resolve(__dirname, '../package'), // 出口目录
      publicPath: '/package/',
      library: 'test', // 包名
      libraryTarget: 'umd',
      umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
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
    plugins: [
      new VueLoaderPlugin(),
    ]
  }