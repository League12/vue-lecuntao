module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "https://mobileway.lecuntao.com/",
        changeOrigin: true,
        ws: false
      }
    },
    // https: true
  }
}
