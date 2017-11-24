const path = require('path');
const PATH = {
    basePath: path.resolve(__dirname, '../'),
    buildPath: path.resolve(__dirname, '../dist'),
    srcPath: path.resolve(__dirname, '../src')
}
// 通过NODE_ENV来设置环境变量，如果没有指定则默认为生产环境
var isProduction = function () {
    return process.env.NODE_ENV === 'production';
};
module.exports = { PATH: PATH, isProduction: isProduction}