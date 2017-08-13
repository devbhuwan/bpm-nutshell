"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
var webpack_config_utils_1 = require("webpack-config-utils");
var webpack_1 = require("@ngtools/webpack");
var OfflinePlugin = require("offline-plugin");
exports.default = function (environment) {
    if (environment === void 0) { environment = 'development'; }
    var _a = webpack_config_utils_1.getIfUtils(environment), ifProduction = _a.ifProduction, ifDevelopment = _a.ifDevelopment;
    return {
        devtool: ifProduction('source-map', 'eval'),
        entry: path.join(__dirname, 'demo', 'entry.ts'),
        output: {
            filename: ifProduction('[name]-[chunkhash].js', '[name].js')
        },
        module: {
            rules: webpack_config_utils_1.removeEmpty([ifDevelopment({
                    test: /\.ts$/,
                    loader: 'tslint-loader',
                    exclude: /node_modules/,
                    enforce: 'pre'
                }), ifDevelopment({
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        transpileOnly: true
                    }
                }, {
                    test: /\.ts$/,
                    loader: '@ngtools/webpack'
                })])
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        devServer: {
            port: 8000,
            inline: true,
            hot: true,
            historyApiFallback: true,
            overlay: true
        },
        plugins: webpack_config_utils_1.removeEmpty([
            ifProduction(new webpack.optimize.ModuleConcatenationPlugin()),
            ifProduction(new webpack_1.AotPlugin({
                tsConfigPath: './tsconfig-demo.json'
            })),
            ifDevelopment(new webpack.HotModuleReplacementPlugin()),
            ifDevelopment(new ForkTsCheckerWebpackPlugin({
                watch: ['./src', './demo'],
                formatter: 'codeframe'
            })),
            new webpack.DefinePlugin({
                ENV: JSON.stringify(environment)
            }),
            ifProduction(new webpack.optimize.UglifyJsPlugin({
                sourceMap: true
            })),
            new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.join(__dirname, 'src')),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'demo', 'index.ejs')
            }),
            ifProduction(new OfflinePlugin())
        ])
    };
};
