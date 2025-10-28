const { defineConfig } = require('@vue/cli-service');

const {
  JSDefenderWebpackPlugin,
} = require('@preemptive/jsdefender-webpack-plugin')

module.exports = defineConfig({
  outputDir: 'dist',
  
  assetsDir: '',
  
  devServer: {
    port: 8099,
    hot: true,
    open: true
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    },
    plugins: [
        new JSDefenderWebpackPlugin({
            configurationFile: './jsdefender.config.json',
            quietMode: false,
            enableInDevelopmentMode: false,
            excludeChunks: ['chunk-vendors' ]
        })
    ]
  },

  productionSourceMap: false,

  css: {
    extract: {
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }
  },

  filenameHashing: true,

  chainWebpack: config => {
    config.output
      .filename('js/[name].[contenthash:8].js')
      .chunkFilename('js/[name].[contenthash:8].js');
  }
});
