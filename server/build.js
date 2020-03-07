/**
 * @file 构建打包
 * @author Angus Yang
 * @date 2020/2/28
 * @description
 */

var build = require('webpack-server-start').build;
var webpackConfig = require('../webpack-config/webpack.config.prod.js');
var entries = require('../webpack-config/entries.prod');

build(webpackConfig, entries);
