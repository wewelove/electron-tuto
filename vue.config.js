const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        "@components": path.resolve(__dirname, "./src/components"),
        "@stores": path.resolve(__dirname, "./stores"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@scripts": path.resolve(__dirname, "./src/assets/scripts")
      }
    }
  },
  pluginOptions: {
      nodeIntegration: true
  } 
}