'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _homepage = require('@/components/homepage');

var _homepage2 = _interopRequireDefault(_homepage);

var _Div2Img = require('@/components/Div2Img');

var _Div2Img2 = _interopRequireDefault(_Div2Img);

var _neo = require('@/components/OnePaper/neo');

var _neo2 = _interopRequireDefault(_neo);

var _city = require('@/components/OnePaper/20171012-city');

var _city2 = _interopRequireDefault(_city);

var _shareCard = require('@/components/OnePaper/20171019-shareCard.vue');

var _shareCard2 = _interopRequireDefault(_shareCard);

var _LoginBall = require('@/components/OnePaper/20171028-LoginBall.vue');

var _LoginBall2 = _interopRequireDefault(_LoginBall);

var _Weather = require('@/components/OnePaper/20171030-Weather.vue');

var _Weather2 = _interopRequireDefault(_Weather);

var _beginWithDogs = require('@/components/OnePaper/20180216-beginWithDogs');

var _beginWithDogs2 = _interopRequireDefault(_beginWithDogs);

var _article = require('@/components/Files/article');

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var routes = [{ path: '/', name: 'Hello', component: _homepage2.default }, { path: '/articles/:id', name: 'article', component: _article2.default, props: true }, { path: '/div2img', name: 'Div2Img', component: _Div2Img2.default }, { path: '/OnePaper', name: 'neo', component: _neo2.default }, { path: '/OnePaper/cityInfo', name: 'city', component: _city2.default }, { path: '/OnePaper/shareCard', name: 'shareCard', component: _shareCard2.default }, { path: '/OnePaper/loginBall', name: 'loginBall', component: _LoginBall2.default }, { path: '/OnePaper/weather', name: 'weather', component: _Weather2.default }, { path: '/OnePaper/beginWithDogs', name: 'dogs', component: _beginWithDogs2.default }];

var router = new _vueRouter2.default({
    routes: routes
});

exports.default = router;
//# sourceMappingURL=index.js.map