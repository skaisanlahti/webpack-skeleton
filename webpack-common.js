const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/js/index.js",
        vendor: "./src/js/vendor.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "./fonts/[name]-[hash].[ext]"
                        }
                    }
                ],
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "./imgs/[name]-[hash].[ext]"
                        }
                    }
                ]
            },
        ],
    },
};