const AotPlugin = require(`@ngtools/webpack`).AotPlugin,
    fs = require('fs'),
    merge = require('webpack-merge'),
    path = require(`path`);

const mainPath = './src/main.ts',
    outputPath = path.resolve(__dirname, 'src');


module.exports = {
    devServer: {
        contentBase: outputPath,
        hot: true,
        port: 8009
    },
    devtool: 'eval',
    entry: mainPath,
    module: {
        rules: [
            {
                loader: '@ngtools/webpack',
                test: /\.tsx?$/
            },
            {
                loader: 'html-loader',
                test: /\.html$/
            },
            {
                test: /\.less$/,
                use: [
                    'to-string-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    output: {
        filename: 'site.min.js',
        path: outputPath,
        publicPath: '/',
        sourceMapFilename: 'site.min.js.map'
    },
    plugins: [
        new AotPlugin({
            mainPath,
            tsConfigPath: 'src/tsconfig.json'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
};
