module.exports = {
  devServer: {
    proxy: {

      '/mobile': {
        target: 'https://www.lecuntao.com',
        changeOrigin: true,
        ws: false
      },

      '/': {
        target: 'https://mobileway.lecuntao.com/',
        changeOrigin: true,
        ws: false
      }
    }
    // https: true
  }
}
