// 插件引用

// devServer 配置
const devServer = {
    contentBase: './public', // 本地服务加载页面路径
    port: 8888, // 端口号
    inline: true, // 实时刷新
    historyApiFallback: true // 跳转指向 index
}

// webpack 配置
module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    // 开发环境配置
    devServer: devServer
}
