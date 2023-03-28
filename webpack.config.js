const path = require('path')
const createExpoWebPackConfigAsync = require('@expo/webpack-config')


module.exports = async function (env, argv) {
    const config = await createExpoWebPackConfigAsync(env, argv)

    config.module.rules.push({
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'node_modules/react-router-native')]
    })
    return config
}
//esto e sutilizado para cuando sale e error de web por e compilador de rutas y webpack
