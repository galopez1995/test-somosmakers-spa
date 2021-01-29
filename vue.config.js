/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  runtimeCompiler: true,
  transpileDependencies: ['vuetify', 'vuex-persist'],
  publicPath: './',
  devServer: {
    proxy: process.env.NODE_ENV == 'production' ? 'http://jcab2018-001-site19.etempurl.com/' : 'https://localhost:44390/'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        Api: path.resolve(__dirname, 'src/api/'),
        Components: path.resolve(__dirname, 'src/components/'),
        Constants: path.resolve(__dirname, 'src/constants/'),
        Views: path.resolve(__dirname, 'src/views/')
      },
      extensions: ['*', '.js', '.vue', '.json']
    }
  }
}
