// webpack-dev-middleware + express
// webpack-dev-server 也用到了 webpack-dev-middleware
// 此方案和--watch参数类似，修改代码后不会主动刷新页面，需要手动刷新
// 而webpack-dev-server在编译完成后会主动刷新页面
// 此方案的热替换，需要添加webpack-hot-middleware包

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.dev.conf.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n')
})
