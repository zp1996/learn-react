const webpack = require('webpack'),
    path = require('path'),
    config = require('./config.json'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    exec = require('child_process').exec,
    isProduction = process.env.NODE_ENV === 'production',
    entry_tools = isProduction ? [] :
            ([
                `webpack-dev-server/client?http://localhost:${config.port}`,
                'webpack/hot/only-dev-server'
            ]),
    demoPath = `${__dirname}/demo`,
    components = config.components,
    entrys = {},
    htmlWebpackPlugins = [];

components.forEach(val => {
    entrys[val] = `${demoPath}/${val}/${val}app.js`;
    htmlWebpackPlugins.push(new HtmlWebpackPlugin({
        title: val,
        template: `${demoPath}/${val}/index.ejs`,
        filename: `${demoPath}/${val}/index.html`,
        chunks: [val] 
    }));
});

// 首先删除之前打包文件
exec('rm -r -f ./build', () => {
    console.log('delete old output file, now is to bundle');
});

module.exports = {
    entry: entrys,
    devtool: isProduction ? '' : 'cheap-module-eval-source-map',  // 生产环境中用
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].[chunkhash:8].js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'],
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new ExtractTextPlugin('css/[name].[chunkhash:8].style.css'),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        ...htmlWebpackPlugins
    ]
};
