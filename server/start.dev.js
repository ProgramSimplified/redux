/**
 * @file 开发服务器启动
 * @author Angus Yang
 * @date 2020/2/28
 * @description
 */

var devServer = require('webpack-server-start').devServer;
var webpackConfig = require('../webpack-config/webpack.config.dev.js');
var entries = require('../webpack-config/entries.dev');

devServer(webpackConfig, entries);
