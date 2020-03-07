/**
 * @file 生成测试服务器启动
 * @author Angus Yang
 * @date 2020/2/28
 * @description
 */

var prodServer = require('webpack-server-start').prodServer;

prodServer('../dist');
