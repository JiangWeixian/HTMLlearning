'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var files = require.context('.', false, /\.js$/);
var modules = {};

files.keys().forEach(function (key) {
    if (key === './index.js') return;
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

exports.default = modules;
//# sourceMappingURL=index.js.map