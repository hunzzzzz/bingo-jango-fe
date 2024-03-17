const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    port: 9090
  }
}

//로컬에서 테스트시 아래 코드 주석 풀면됨
// const target = 'http://localhost:8080'
// module.exports = {
//   devServer: {
//     port: 8080,
//     proxy: {
//       '^/api': {
//       target,
//       changeOrigin: true
//     }
//   }}
// }
