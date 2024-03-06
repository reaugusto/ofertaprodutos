const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/scss/_colors.scss";`
      },

      scss: {
        additionalData: `@import "~@/scss/_global.scss";`
      },
      scss: {
        additionalData: `@import "~@/scss/_inputs.scss";`
      }
    }
  }
})
