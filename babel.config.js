module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      styles: resolve('src/assets/scss')
    }
   }
}


