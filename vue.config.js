module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete('eslint');
  },
  lintOnSave: false,
};
