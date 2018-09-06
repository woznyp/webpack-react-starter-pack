const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin,
    OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => ({
    mode: 'development',
    devtool: argv.mode !== 'production' ? 'source-map' : false,
    entry: { app: './src/app' },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        compress: true
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: argv.mode !== 'production'
            }),
            new OptimizeCssAssetsWebpackPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    argv.mode !== 'production'
                        ? {
                              loader: 'style-loader'
                          }
                        : {
                              loader: MiniCssExtractPlugin.loader
                          },

                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: argv.mode !== 'production'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: argv.mode !== 'production'
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/preset-env']
                    }
                },
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.woff2/,
                loader: 'file-loader?name=fonts/[name]-[hash].[ext]'
            },
            {
                test: /\.(png|jpg|gif|svg|mp3|ico|mp4)$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'file-loader?name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/app/index.html',
            filename: './index.html'
        }),
        // argv.mode === 'production' ? new BundleAnalyzerPlugin() : () => {}
    ]
});
