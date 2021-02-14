module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        prependData: `@import "~@/assets/variables.scss";`
      }
    }
  }
};
