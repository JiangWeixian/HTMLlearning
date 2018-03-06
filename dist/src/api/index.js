'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initArticles = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _articles = require('../assets/articles/articles.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initArticles = exports.initArticles = function initArticles() {
    return new _promise2.default(function (resolve) {
        resolve(_articles.articleData);
    });
};
//# sourceMappingURL=index.js.map