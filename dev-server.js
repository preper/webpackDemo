// Node.js Api + webpackDevServer
// 需要将devServer选项从webpack.config中移除
// 所以这里用了webpack.config.js，但直接使用这个文件会报错，因为
// config文件需要添加plugin: new webpack.HotModuleReplacementPlugin()
// 此配置方式会刷新页面(?)具体原因以后研究

const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config.js')
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000')
})
