const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index",
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "public", "index.html")
        }),
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            // {
            //     test: /\.(scss|css)$/,
            //     use: [
            //         'style-loader',
            //         {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
            //         {loader: 'postcss-loader', options: {sourceMap: true}},
            //         {loader: 'sass-loader', options: {sourceMap: true}},
            //     ],
            // },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
                type: 'asset/resource'
            },
        ],
    },
    resolve: {
        extensions: [".*", ".js", ".jsx"],
    },
};