module.exports = {
    test: /\.jsx$/,
    entry: "./src/main.js",
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }

};