var webpack = require('webpack');
var config=require('./gulpfile.config')();

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        index:config.paths.main,
    },
	output: {
        filename: '[name].bundle.js',
        path: __dirname + "/dist/scripts",
	},
    module: {
        loaders: [
            {
                test:/\.(js|jsx)$/,
                loader:'babel',
                exclude:/node_modules/,
                query:{
                    presets:['es2015','react']
                }
            }
        ],
        preLoaders:[
            {test:/\.js$/,loader:"source-map-loader"}
        ]
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.tsx', '.ts']
    },
    externals:config.externals
};