var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: {
        new webpack.optimize.MinChunkSizePlugin({
            compress: {
                warnings: false //去掉warning
            },
            output: {
                comments: false //去掉所以注释
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require'] //不会压缩含有'$super', '$', 'exports', 'require'的内容
            }
        })

    }
};